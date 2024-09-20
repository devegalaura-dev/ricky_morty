import './App.css'
import { api } from './services'
import { useEffect, useState } from 'react'
import Body from './components/Body'

function App() {
  const [char, setChar] = useState([])
  useEffect(()=>{
    async function teste (){
      try{
        const response = await api.get()
        setChar(response.data.results)
      }
      catch(error){
        console.log(error);
      }
    }teste()
    
  },[])
  return (
    <Body charList={char}/>
  )
}

export default App
