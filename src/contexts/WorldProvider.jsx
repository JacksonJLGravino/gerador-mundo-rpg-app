import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

const WordContext = createContext();

export default function WorldProvider({ children }) {
  const [worlds, setWorlds] = useState([]);

  const findWorlds = async () => {
    const result = await AsyncStorage.getItem("worlds");
    if (result !== null) setWorlds(JSON.parse(result));
  };

  useEffect(() => {
    findWorlds();
  }, []);

  return (
    <WordContext.Provider value={{ worlds, setWorlds, findWorlds }}>
      {children}
    </WordContext.Provider>
  );
}

export const useWorlds = () => useContext(WordContext);
