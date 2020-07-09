import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput,KeyboardAvoidingView,TouchableOpacity,Alert, ToastAndroid } from 'react-native';
import firebase from 'firebase';
import db from '../config';
import MyHeader from '../components/MyHeader'

export default class ExchangeScreen extends Component{

  constructor(){
    super()
    this.state = {
      userName : firebase.auth().currentUser.email,
      Name : "",
      description : ""
    }
  }

  addItem=(itemName, description)=>{
    var userName = this.state.userName
    db.collection("exchange_requests").add({
      "username"    : userName,
      "item_name"   : itemName,
      "description" : description
     })
     this.setState({
       Name : '',
       description :''
     })

     this.setState({
       Name : '',
       description :''
     })

  }



  render(){
    return(
      <View style={{flex:1}}>
      <MyHeader title="Add Item"/>
      <KeyboardAvoidingView style={{flex:1,justifyContent:'center', alignItems:'center'}}>
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Item Name"}
          maxLength ={8}
          onChangeText={(text)=>{
            this.setState({
              itemName: text
            })
          }}
          value={this.state.itemName}
        />
        <TextInput
          multiline
          numberOfLines={4}
          style={[styles.formTextInput,{height:100}]}
          placeholder ={"Description"}
          onChangeText={(text)=>{
            this.setState({
              description: text
            })
          }}
          value={this.state.description}

        />
        <TouchableOpacity
          style={[styles.button,{marginTop:10}]}
          onPress = {()=>{this.addItem(this.state.itemName, this.state.description)}}
          >
          <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>Add Item</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  formTextInput:{
    width:"75%",
    height:35,
    borderWidth:1,
    marginTop:20,
  },
  button:{
    width:"75%",
    height:50,
    backgroundColor: "green"
 
  },

})
