import React from 'react'
import Rating from "./Rating";
import { useState } from "react"

export const FormResenia = () => {

    const [rating, setRating] = useState(10)
    const [text, setText] = useState('')
    const cambiarTexto = (e) => {
        setText(e.target.value)
    }

    return (
        <div className="card" >

            <form onSubmit={(e)=>{e.preventDefault(); 
                sonsole.log("hola")} }>
                <h2>Como calificarias el curso?¿</h2>
                <Rating setRating={setRating} />
                <div className="input-group" >
                    <input type="text" placeholder="Escriba aqui su Resenia" onChange={cambiarTexto} />
                    <button type="submit">Registrar</button>

                </div>
            </form>
        </div>
    )
}
export default FormResenia;