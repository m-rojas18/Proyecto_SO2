import React, {useState, createContext, useEffect} from 'react' 
import {Alert} from 'react-native'
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';

export const ArchivosContext = createContext();

const ProveedorArchivos = ({children}) => {
    const [listaArchivos, setListaArchivos] = useState([]);
    const [permisoLeer, setpermisoLeer] = useState('false');
    
    //actions
    const addArchivo = (nuevoArchivo) => {
        
        if(!revisarNombreRep(nuevoArchivo)){
            setListaArchivos(state => [...state, nuevoArchivo ]);
        }         
    }

    const eliminarArchivo = nombre => {
        Alert.alert("", "¿Desea eliminar el archivo?",
            [{
                text: 'Cancelar',
                
            },{
                text: 'Eliminar',
                onPress: () => removeArchivo(nombre)
            }
            ]);
        
    }
    const removeArchivo = async archivoComparar => {
        const newListaArchivos = listaArchivos.filter(archivo =>{ 
            if(archivo != archivoComparar.nombre){
                return archivo;
            }
            
        });
        //console.log(newListaArchivos);
        setListaArchivos(newListaArchivos);
        //Eliminar Archivo del document Directory
        const discoDuro = FileSystem.documentDirectory + "DiscoDuro/" + archivoComparar.nombre;
        await FileSystem.deleteAsync(discoDuro);
        Alert.alert("Confirmación", "Se elimino el archivo exitosamente.",[{text: "Ok"}])
    }



    const revisarNombreRep = nombreRevisar => {
        if(listaArchivos.length > 1){
            if(listaArchivos.includes(nombreRevisar)){
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        } 
    }

    const permisoAlert = () => {
        Alert.alert("Permiso Requerido", "Esta aplicacion requiere de este permiso para leer archivos y funcionar",
            [{
                text: 'Cancel',
            },{
                text: 'Ok',
                onPress: () => getPermiso()
            }
            ]);
    }
    /*
    const delay = async(ms = 1500) =>
        new Promise(resolve => setTimeout(resolve,ms));
    */
    const getArchivos = async () => {
        let archivos = await FileSystem.readDirectoryAsync(FileSystem.documentDirectory + "DiscoDuro");
       // console.log(archivos);
        //console.log(archivos.length);
        for(let i = 0; i < archivos.length; i +=1){
            addArchivo(archivos[i]);
            //await delay(1000);
        }
       
    }

    const getPermiso = async () => {
        /* Permission Object Reference
            "canAskAgain": true,
            "expires": "never",
            "granted": false,
            "status": "undetermined",
        */
        const permiso =await MediaLibrary.getPermissionsAsync();
        if(permiso.granted){
            //Allow acces to AlmacenarScreen, permsio = 'granted'
            getArchivos();
            setpermisoLeer('granted');
        } else {
            //Si el permiso no esta dado y puede preguntar otra vez
            if(!permiso.granted && permiso.canAskAgain){
                
                //Pedir el permiso otra vez
                const {status, canAskAgain} = await MediaLibrary.requestPermissionsAsync();
                if(status == 'denied' && canAskAgain) {
                    //Poner una alerta que el usuario debe permitir el permiso para usar la app
                    permisoAlert();
                    setpermisoLeer('false');
                }

                if(status == 'granted'){
                    //Nos dio permiso para leer
                    getArchivos();
                    setpermisoLeer('granted');
                }
                //Para caso que el usuario ponga "NeverAskAgain"
                if(status == 'denied' && !canAskAgain){
                    //Presentar un error al usuario
                    permisoAlert();
                    setpermisoLeer('false');
                }
            }
        }
        
    }
    useEffect(() => {
        getPermiso();
    }, []);
    return (
        <ArchivosContext.Provider value={{listaArchivos, setListaArchivos, permisoLeer, setpermisoLeer,
        addArchivo, eliminarArchivo, revisarNombreRep}}>
            {children}
        </ArchivosContext.Provider>
    );    
}

export default ProveedorArchivos