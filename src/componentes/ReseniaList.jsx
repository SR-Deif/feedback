import React from 'react'
import Resenia from './Resenia'

export const ReseniaList = ({listaresenias, deleteResenia}) => {

    if(!listaresenias || listaresenias.length ===0){
        return <p>No hay reseñas</p>
    }else{
        return (


            <div className='feedback-list'>
                {listaresenias.map((resenia)=>
                    (
                        <Resenia 
                        deleteResenia={deleteResenia}
                        key={resenia.id} resenia={resenia} />
                    )
                )}
            </div>
        )
    }

}
