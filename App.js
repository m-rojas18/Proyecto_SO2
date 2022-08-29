import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
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
    <View style={style1.container}>
      <Greeting name = 'Miguel'/>
      <Greeting name = 'Jose'/>
      <Text>Estoy usando React Native!</Text>
      <Image source={pic} style={{width: 200, height: 110}}/>
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

//Variable STYLES: Se utiliza StyleSheet para crear un estilo deseado
const style1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const style2 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});