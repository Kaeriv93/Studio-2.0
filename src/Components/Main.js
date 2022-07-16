import { useEffect, useState} from "react";
import {Routes, Route} from 'react-router-dom'
import Film from "./Film";

function Main(){
    const[film, setFilm] = useState(null)
    const URL = "https://ghibliapi.herokuapp.com/films";

    const getFilm = () =>{
        fetch(URL)
        .then(response => response.json())
        .then(result => setFilm(result))
        console.log(setFilm)
    }
    useEffect(()=> getFilm(),[])


    return(
        <>
        <Routes>
            <Route path ='/' element = {<Film film ={film}/>}/>
        </Routes>
        </>
    )
}

export default Main