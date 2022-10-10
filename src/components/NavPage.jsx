import { useState } from "react";


function NavPage({page,setPage}){

  
    return(
    <header className="d-flex justify-content-between aling-item-center">
     
      <button className="btn btn-primary btn-sm" onClick={()=>setPage(page-1)}>
         Anterior
      </button>

      <p>Pagina: {page}</p>

      <button className="btn btn-primary btn-sm" onClick={()=>setPage(page+1)}>
         Siguiente
      </button>
    </header>
  )
  }
  export default NavPage;