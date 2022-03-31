import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [modal, setModal] = React.useState(false);
  const [id, setId] = React.useState(false);
  const [modalUpdate, setModalUpdate] = React.useState(false);

  return (
    <GlobalContext.Provider
      value={{ modal, setModal, id, setId, modalUpdate, setModalUpdate }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
