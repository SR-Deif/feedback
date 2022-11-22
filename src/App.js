import { useState } from "react";
import ReseniaList from "./componentes/ReseniaList";

import Resenias from "./data/Resenias"

function App(){

    const [lista_resenias, setListResenias] = useState (Resenias)
    return(
        <div className="container">
            <ReseniaList listaresenias={lista_resenias} />

            
        </div>
    )
}

export default App;