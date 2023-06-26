

import "./card.css"

const Cards = ({img,id,firstname,lastname,email,maidenName,gender,age}) => {
  return (
    <div className="mycards">
        <img src={img} alt="" />
        <span> {id}</span>
        <span>{firstname}</span>
        <span>{lastname}</span>
        <span>{email}</span>
        <span>{maidenName}</span>
        <span>{gender}</span>
        <span>{age}</span>
    </div>
  )
}

export default Cards