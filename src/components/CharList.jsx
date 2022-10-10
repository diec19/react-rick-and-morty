import React from "react";
import { useEffect, useState } from "react";
import Char from './Char'
import NavPage from "./NavPage";




const CharList=()=>{

    const [characters, setCharacters] = useState([]);
    const [loading, setLoading]=useState(true)
    const [page,setPage]=useState(1);

    useEffect(()=>{
       async function fetchApp(){
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        const data = await response.json()
        setLoading(false)
        setCharacters(data.results)
       }
  
       fetchApp();
    },[page]);

    return(
        <>

          <div className="container">

            <NavPage page={page} setPage={setPage}/>
            {
              loading ?(
                <h1>Loading...</h1>
              ):(
                <div className="row">

          {
         characters.map(char=>{
          return(
            <div className="col-md-4" key={Char.id}>
            <Char key={char.id} char={char}/>
            </div>
          )
         })

    }
           </div>
              )
            }
            <NavPage page={page} setPage={setPage}/>
          </div>
          
        </>
    )
}

export default CharList;