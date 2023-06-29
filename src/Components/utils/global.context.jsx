import { createContext, useMemo, useState } from "react";


export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const info =useMemo(()=>{
    const getDentists =async()=>{
      const dataFetched = await fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=>{
        return response.json()
      })
      return(dataFetched)
    }
    localStorage.setItem('docsFavoritos', JSON.stringify(data))
    return{getDentists,theme,data,setTheme,setData}},[theme,data])
  

  return (
    <ContextGlobal.Provider value={{info}}>
      {children}
    </ContextGlobal.Provider>
  );
};

