import { useState } from "react"


export default function Card({name, photo, info, price, id}) {
  
  const [readmore, setReadmore] = useState(false)
  const description = readmore ? info : `${info.subStr(0,200)}...`
  function readmoreHandler(){
    setReadmore(!readmore)
  }
  return (
    <div>
      <img src={photo} alt="" />

      <div>
        <h4>{price}</h4>
        <h4>{name}</h4>
      </div>

      <div>
        {
          description
        }
        <span onClick={readmoreHandler}>
          {readmore ? 'Read More' : 'Show Less'}
        </span>
      </div>
    </div>
  )
}
