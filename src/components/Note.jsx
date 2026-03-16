import { createContext, useContext, useState  } from "react";

export const notas = createContext();
//componente de react 
export const  NotasProvider = ({children}) => {
    // crear estados y sus funciones modificadoras 

    const [notas, setNotas] = useState([
        {id: uuid(), text: "Nota 1", color: "blue"}
    ]);

    const agregarNota =(nuevaNota) => {
        setNotas([...notas, nuevaNota]) // spread operator transfiere todas las propiedades de un objeto a un componente hijo sin listarlas una por una
    };
    const eliminarNotas= (id)=> {
        const nuevasNotas= notas.filter((n) =>n.id !==notas.id)
        setNotas(nuevasNotas);

    };

    return (
        <NotasContex.Provider value={{notas, agregarNota, eliminarNotas}}>
            {children}
        </NotasContex.Provider>

    )
};

// hook 

export const useNotas = ()=>useContext(NotasContex);