import React, { Component, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { Image } from 'react-native'; //COMPONENTE USADO PARA IMAGENES

export default function App() {
  //PIC. variable que estoy utilizando para guardar URL de imagen que quiero mostrar
  let pic = {
    uri: 'https://thumbs.dreamstime.com/b/dise%C3%B1o-del-confeti-de-la-celebraci%C3%B3n-41244387.jpg'
  };

  return (
    /*VIEW. Modifica el Estilo que se usa para lo que se muestra.
    todo lo que este encerrado dentro de VIEW tendra el estilo deseado*/
    //TEXT. Se usa para mostrar texto
    //IMAGE. Muestra una imagen. en este caso, se muestra la imagen guardada dentro de PIC
    //USAR PROPS. Se llama al nombre del prop para usarlo (Greeting) y se insertan sus parametro
    //BUTTON. Usado para crear botones
    //ALERT. Crea ventana con un mensaje adentro
    /*
      <Greeting name = 'Miguel'/>
      <Greeting name = 'Jose'/>
      <Separator />
      <Text>Estoy usando React Native!</Text>
      <Separator />
      <Image source={pic} style={{width: 200, height: 110}}/>
      <Separator />
      <Button title="Boton 1" onPress={() => Alert.alert('Presionaste el boton 1')}/>
      <Separator />
      <Button title="Boton 2" color="#f194ff" onPress={() => Alert.alert('Presionaste el boton Rosa')} />
    */
    <View style={styles.container1}>
      <View>
      <Text style={{
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingBottom: 12,
      }}>
        BIENVENIDO!
      </Text>
      </View>
      <LoadButtons />
      <StatusBar style="auto" />
    </View>
  );
}

//PROPS. se puede crear un Prop para utilizarlo de la misma manera que se haria una funcion
class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hola {this.props.name}!</Text>
      </View>
    );
  }
}

class LoadButtons extends Component {
  render() {
    return (
      <View style={[styles.separatorButton, {flexDirection: "column"}]}>
        <IndButton name = "Almacenar"/>
        <IndButton name = "Leer"/>
        <IndButton name = "Listar"/>
        <IndButton name = "Borrar"/>
      </View>
    );
  }
}

class IndButton extends Component
{
  render() {
    return (
      <View style={styles.boton}>
        <Button title={this.props.name} onPress={() => Alert.alert('Presionaste el boton')}/>
      </View>
    );
  }
}

class Almacenar extends Component{
  render(){
    return (
      <View style={styles.container1}>
        
      </View>
    );
  }
}

class Leer extends Component{
  render(){
    return (
      <View style={styles.container1}>

      </View>
    );
  }
}

class Borrar extends Component{
  render(){
    return (
      <View style={styles.container1}>
        
      </View>
    );
  }
}

class Listar extends Component{
  render(){
    return (
      <View style={styles.container1}>
        
      </View>
    );
  }
}

//SEPARATOR. Para agregar espacio entre componentes y demas
const Separator = () => (
  <View style={styles.separatorText} />
);

//Variable STYLES: Se utiliza StyleSheet para crear un estilo deseado
const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 0,
    backgroundColor: '#ffe4c4',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separatorText: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  separatorButton: {
    marginVertical: 50,
    borderBottomColor: '#737373',
  },
  boton: {
    marginVertical: 15,
    justifyContent: 'center',
    marginHorizontal: 5,
  },
});