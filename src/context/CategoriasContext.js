import React, { createContext, useState, useEffect } from 'react';
import Axios from 'axios';

//Crear Context
export const CategoriasContext = createContext();

//Provider es donde se encuentran las funciones y state

const CategoriasProvider = (props) => {

    //Crear el state del Context
    const [categorias, guardarCategorias] = useState([]);

    //Ejecutar llamada a API
    useEffect(() => {
        const obtenerCategorias = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`

            const categorias = await Axios.get(url)

            guardarCategorias(categorias.data.drinks);
        }
        obtenerCategorias()
    }, []);


    return (
        <CategoriasContext.Provider
            value={{
               categorias 
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider;