import useFetch from "../hooks/useFetch";

const Home = () => {

    const data = useFetch("post", {
        name: "Carola",
        job: "programmer"
    })
    console.log(data)

    


    return(
        <>
        </>
    )
}

export default Home;