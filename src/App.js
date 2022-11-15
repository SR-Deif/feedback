function App(){
    const bootcamps =[
        {id:1, name: 'Luisa', avarege_rating:8},
        {id:2, name: 'Pepe', avarege_rating:73}
    ]

    return(
        <>
        <h1> Creo que este es el Titulo!</h1>,
        <ul >
            {bootcamps.map((bootcamp, index)=>(
            <li key={index}>{bootcamp.name}</li>
        ))
        }
        </ul>
        </>
    )
}

export default App