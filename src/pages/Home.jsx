import { useState, useEffect } from "react"

const moviesURL = import.meta.env.VITE_API
const apikey = import.meta.env.VITE_API_KEY


function Home(){
    { /*{console.log(moviesURL, apikey)}*/ }
    const [ topMovies, setTopMovies ] = useState([])
    const getTopRatedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        console.log(data)
    }
    useEffect(() =>{
        const topRatedUrl = `${moviesURL}top_rated?${apikey}`
        console.log(topRatedUrl)
    },[])
 return (<>
 <div>Home</div>
 <br />
 </>
 )
}
export default Home