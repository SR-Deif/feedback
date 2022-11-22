import { useState } from "react";
const Resenia = ({resenia}) => {

    const [rating, setRating ] = useState(resenia.rating)
    const [commet, setCommet ] = useState(resenia.text)
    const cambiar=() =>{
        setRating((prev)=>{
            return prev + 1
        })
    }
    const resNota = () =>{ 
        setRating((prev)=>{
            return prev - 1
        })
    }

    return (
        
        <div className="card">
            <div className="hum-display">
                {rating}
            </div>

            <div className="text-display">
                {commet}
            </div>
            <button onClick={(cambiar)}>
                Me sumas +1
            </button>
            <button onClick={(resNota)}>
                Me restas -1
            </button>
        </div>
    )
}

export default Resenia;