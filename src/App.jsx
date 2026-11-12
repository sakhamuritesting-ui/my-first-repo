import {useState} from 'react'
import Data from './Components/File-explorer/Data.js'
import Explorer from './Components/File-explorer/Explorer.jsx'

export default function App() {
  const [data, setData] = useState(Data)
  console.log(data)

  return <Explorer data={data} />  
}
