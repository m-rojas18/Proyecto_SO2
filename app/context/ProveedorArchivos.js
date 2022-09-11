import React, {Component, createContext} from 'react' 
import {Text, View, Alert} from 'react-native'
import * as MediaLibrary from 'expo-media-library';


export const ArchivosContext = createContext(true);
export class ProveedorArchivos extends Component {
    
    constructor(props){
        super(props)
    }
    state = {
        isGranted: 'false'
    }

    setisGranted = (isGranted) => {
        this.setState((prevState) => ({isGranted}))
    }
    permisoAlert = () => {
        Alert.alert("Permiso Requerido", "Esta aplicacion requiere de este permiso para leer archivos y funcionar",
            [{
                text: 'Ok',
                onPress: () => this.getPermisos()
            },{
                text: 'Cancel'
            }
            ]);
    }

    getArchivo = async () => {

    }
    getPermisos = async () => {
        /* Permission Object Reference
            "canAskAgain": true,
            "expires": "never",
            "granted": false,
            "status": "undetermined",
        */
        const permiso =await MediaLibrary.getPermissionsAsync();
        if(permiso.granted){
            //Allow acces to AlmacenarScreen, permsio = 'granted'
           setisGranted('true');
        } else {
            //Si el permiso no esta dado y puede preguntar otra vez
            this.setisGranted('false');
            if(!permiso.granted && permiso.canAskAgain){
                
                //Pedir el permiso otra vez
                const {status, canAskAgain} = await MediaLibrary.requestPermissionsAsync();
                if(status == 'denied' && canAskAgain) {
                    //Poner una alerta que el usuario debe permitir el permiso para usar la app
                    this.permisoAlert();
                }

                if(status == 'granted'){
                    //Nos dio permiso para leer
                }
                //Para caso que el usuario ponga "NeverAskAgain"
                if(status == 'denied' && !canAskAgain){
                    //Presentar un error al usuario
                }
            }
        }
        
    }
    componentDidMount(){
        this.getPermisos()
    }
    render(){
        const {isGranted} = this.state
        const {setisGranted} = this

        return (
        <ArchivosContext.Provider value={{isGranted, setisGranted}}>
                        {this.props.children}
        </ArchivosContext.Provider>
        );    
    }
}

export default ProveedorArchivos