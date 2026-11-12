import {useState} from 'react'
import Data from './Components/File Explorer/Data/Data.js'
import Explorer from './Components/File Explorer/Files/Explorer.jsx'

export default function App() {
  const [data, setData] = useState(Data)


  return <Explorer data={data} />  
}
