import React from "react";
import {View , Text , Button, StyleSheet} from "react-native"
import database from '@react-native-firebase/database';

function App() {

  const CheckDB = () => { //bilgi okumak için databese den çekmek
    const reference = database().ref("/books"); //ref("/books") sadece books hiyararşisi
    reference.once('value')        
  .then(snapshot => {
    const response = snapshot.val()  //yol belirtmedik databesin en tepesinden tüm verileri çeker
    console.log(response);
  });
  }

  const ListenDB = () => { //bir şey silindiği an tetiklenir ve onu yazdırır
    const reference = database().ref("/books"); //ref("/books") sadece books hiyararşisi
    reference.on('value', snapshot => {
      console.log( snapshot.val());
    });
  }

  const SetDB = () => { 
    const reference = database().ref("car/rentable");
    reference.set({
      brand: "audi" , 
      model: "A8" ,
      price: 128.000
    })
  }
  const UpdateDB = () => { 
    const reference = database().ref("car/rentable");
    reference.update({
      brand: "BMV" , 
      model: "A3" ,
      price: 140.000
    })
  }

  const PushDB = () => { 
    const reference = database().ref("car/rentable");
    reference.push({
      brand: "Ford" , 
      model: "Focus" ,
      price: 540.000
    })
  }
  
  return(
    <View>
      <Text style={{fontSize:70}}>Hello Realtime Database !</Text>

      <Button title="Check DB" onPress={CheckDB}/>
      <Button title="Listen DB" onPress={ListenDB}/>
      <Button title="Set DB" onPress={SetDB}/>
      <Button title="Update DB" onPress={UpdateDB}/>
      <Button title="Push DB" onPress={PushDB}/>
    </View>
  )
}

export default App;

