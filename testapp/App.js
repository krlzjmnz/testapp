import React, {useState} from 'react'
import {Button} from 'react-native'

function CounterButton ({title, onIncrement}){
  return <Button title={title} onPress={onIncrement}/>
}

function App(){
  const [count, setCount] = useState(0)

  return(
    <CounterButton 
    title={`Clik aqui para incrementar....:${count}`}
    onIncrement={()=>setCount(count+1)}/>
  )
}

export default App