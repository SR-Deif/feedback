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

    const addResenia = (newResenia) => {
        newResenia.id = lista_resenias + 1
        setListaResenias([newResenia, ...lista_resenias])
    }

    return (
        <div className="container">
            <FormResenia addResenia={addResenia} />
            <ReseniaList
                deleteResenia={deleteResenia}
                listaresenias={lista_resenias} />
        </div>
    )
}
/**Aplicar buenas prácticas de calidad en el proceso de desarrollo de software, de acuerdo con el referente adoptado en la empresa.
resultado de aprendizaje
Evaluar procesos y productos de desarrollo de software, documentar y concertar acciones a seguir, para garantizar el cumplimiento de las normas establecidas, de acuerdo con el plan definido y con los criterios de medición, métrico y político determinados por la empresa. */
export default App;