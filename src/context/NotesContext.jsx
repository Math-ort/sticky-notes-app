import { createContext, useContext, useState  } from "react";
import {v4 as uuid } from "uuid";

export const NotasContext = createContext();
//componente de react 
export const  NotasProvider = ({children}) => {
    // crear estados y sus funciones modificadoras 

    const [notas, setNotas] = useState([{id:uuid(), text:"nota 1", color:"blue"}]);

    const agregarNota =(nuevaNota) => {
        setNotas([...notas, nuevaNota]) // spread operator transfiere todas las propiedades de un objeto a un componente hijo sin listarlas una por una
    };
    const eliminarNotas= (id)=> {
        const nuevasNotas= notas.filter((n) =>n.id !==notas.id)
        setNotas(nuevasNotas);

    };

    return (
        <NotasContext.Provider value={{notas, agregarNota, eliminarNotas}}>
            {children}
        </NotasContext.Provider>

    )
};

// hook 

export const useNotas = ()=>useContext(NotasContext);