import React, { createContext, useState } from "react";

const CarContext = createContext();

export default CarContext;

export function CarContextProvider({ children }) {
  const [] = useState([]);
  return <CarContext.Provider value={{}}>{children}</CarContext.Provider>;
}
