import React from 'react';
import SmallCard from './SmallCard';

let productInDataBase = {
    color:   "primary",
    titulo: "Total Vuelos",
    valor: 21,
    icono: "fa-solid fa-plane-departure",
}

let amount ={
    color:   "success",
    titulo: "Total Usuarios",
    valor: 79,
    icono: "fas fa-user",
}

let user = {
    color:   "warning",
    titulo: "Total Administradores",
    valor: 49,
    icono: "fa-solid fa-user-tie", 
}

let cardProps = [productInDataBase,amount,user];


function ContentRowTop(){
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;