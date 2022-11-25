import { useState } from "react";
import ReseniaList from "./componentes/ReseniaList";

import Resenias from "./data/Resenias"

function App(){

    const [lista_resenias, setListResenias] = useState (Resenias)

    const deleteResenia = id =>{
        window.confirm("Quieres eliminar la resenia?¿")
    }

    return(
        <div className="container">
            <ReseniaList
            deleteResenia={deleteResenia}
            listaresenias={lista_resenias} />

            
        </div>
    )
}

export default App;