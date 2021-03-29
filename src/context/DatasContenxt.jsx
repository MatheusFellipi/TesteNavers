import { createContext, useState, useContext } from "react";
import { TokenContext } from "./TokenContext";
import api from "../services/api";
import { useHistory } from "react-router";

export const DataContext = createContext({});

export function DataContextProvider({ children }) {
  const history = useHistory(); 

  const { AuthStr } = useContext(TokenContext);

  const [dataOnly, setDataOnly] = useState([]);
  const [dataDelete, setDateDelete] = useState([]);

  const handleDataOnly = async (id) => {
    await api
      .get(`navers/${id}`, { headers: { Authorization: AuthStr } })
      .then((data) => {
        setDataOnly(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = async (id) => {
    await api
      .delete(`navers/${id}`, { headers: { Authorization: AuthStr } })
      .then((data) => {
        setDateDelete(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const isToken = () => {
    if (AuthStr === " " ) {
      history.push('/');
    }
  };

  return (
    <DataContext.Provider
      value={{ handleDataOnly, handleDelete, dataDelete, dataOnly, dataDelete,isToken }}
    >
      {children}
    </DataContext.Provider>
  );
}
