import { createContext, useState, useContext } from "react";
import { TokenContext } from "./TokenContext";
import api from "../services/api";
export const DataContext = createContext({});

export function DataContextProvider({ children }) {

  const { AuthStr } = useContext(TokenContext);

  const [dataOnly, setDataOnly] = useState([]);
  const [dataDelete, setDateDelete] = useState([]);

  const handleEditar = async(id) => {
    await api
      .get(`navers/${id}`, { headers: { Authorization: AuthStr } })
      .then((data) => {
        setDataOnly(data.data);
        console.log(data.data);
      })
      .catch((error) => {
        console.log(error);
      });

  };

  const handleDelete = async(id) => {
    await api
      .delete(`navers/${id}`, { headers: { Authorization: AuthStr } })
      .then((data) => {
        setDateDelete(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <DataContext.Provider
      value={{ handleEditar, handleDelete, dataDelete, dataOnly,dataDelete }}
    >
      {children}
    </DataContext.Provider>
  );
}
