import { useEffect, useState } from "react";

const Home = () => {

    const [ data, setData ] = useState("")

    useEffect( () => {
        fetch("https://api.thecatapi.com/v1/breeds")
        .then( respuesta => respuesta.json())
        .then( data => {

           console.log(data[1].image.url)

        })
    })



    return(
        <>
        </>
    )
}

export default Home;