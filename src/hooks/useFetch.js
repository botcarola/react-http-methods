import { useState, useEffect } from "react";

const useFetch = ( request, paginacion, info, id ) => {
    
    const [ data, setData ] = useState([])  
    const [ paginado, setPaginado ] = useState(paginacion)
    const verifyRequest = ( request ) => request === "get" || "post" ? "https://reqres.in/api/users" : `https://reqres.in/api/users/${id}`
    const url = verifyRequest(request)    

    useEffect(() => {       

            if (request === "get") { 

                fetch(url)
                .then( res => res.json() )
                .then( data => setData(data) ) 

            }
            else if (request === "post") {

                fetch(url, {
                    method: "POST",
                    body: JSON.stringify({info}),
                    headers: {
                        "Content-Type":"application/json",
                    }
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })                
            }
            else if (request === "put") {

                fetch(url, {
                    method: "PUT",
                    body: JSON.stringify({info}),
                    headers: {
                        "Content-Type":"application/json"
                    }
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
            }
            else if (request === "delete") {
                fetch(url, {
                    method: "DELETE",
                    headers: {
                        "Content-Type":"application/json"
                    }
                })
                .then(res => res.json())
                .then(data => console.log(data))
            }
    }, [paginado])
    
    return data
}

export default useFetch;