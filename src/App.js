//dependencias necesarias
import { useState } from "react";
//data
import Resenias from "./data/Resenias";
//componentes
//import Header from "./componentes/Header";
import ReseniaList from "./componentes/ReseniaList";
import FormResenia from "./componentes/FormResenia";

function App() {

    //crear estado inicial para arreglo de resenias
    const [lista_resenias,
        setListaResenias] = useState(Resenias)

    //metodo para borrar una resenia:
    const deleteResenia = id => {
        if (window.confirm("estas seguro de borrar la resenia")) {
            setListaResenias(lista_resenias.filter((resenia) => resenia.id !== id))
        }
    }

    return (
        <div className="container">
            <FormResenia></FormResenia>
            <ReseniaList
                deleteResenia={deleteResenia}
                listaresenias={lista_resenias} />
        </div>
    )
}
export default App;