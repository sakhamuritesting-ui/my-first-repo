import {useState} from 'react'

function Explorer({data}) {
  const[isOpen, setIsOpen] = useState(false)

    if(data.isFolder) {
        return (
            <div> <span onClick={() => setIsOpen(!isOpen)}>📁{data.name}</span> <div>
                <div style={{display: isOpen ? "block" : "none"}}>
                {data.items.map((item) => {
                    return(
                       <Explorer key={item.id} data={item} />
                    )
                })}
                </div>
            </div>
            </div>
        )
    } else {
        return <span>📄{data.name}</span>
    }
  
}
export default Explorer