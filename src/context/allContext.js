"use client";
import { createContext, useContext, useState } from "react";
const AllContext = createContext();

export const AllContextProvider = ({ children }) => {
  const [toggleContactModal, setToggleContactModal] = useState(false);

  const toggleContactModalFunction = () =>
    setToggleContactModal((prev) => !prev);

  return (
    <AllContext.Provider
      value={{
        toggleContactModal,
        toggleContactModalFunction,
      }}
    >
      {children}
    </AllContext.Provider>
  );
};

export const useAllContext = () => {
  const context = useContext(AllContext);

  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
