import React, {useState} from 'react'
import  {View, Text , TextInput} from 'react-native'

export default function App(){
  const [text, setText]=useState('')

  return (
    <View>
      <TextInput
        value={text}
        style={{fontSize:42, color:'steelblue'}}
        placeholder="type here"
        onChangeText={(text)=>{
          setText(text)
        }}
      />
      <Text style={{fontSize:24}}>
      {'\n'}you entered: {text}
      </Text>
    </View>
  )
}