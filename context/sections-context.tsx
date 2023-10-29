"use client";

import { createContext, useContext, useState } from "react";

export type SectionsClient = {
  Linea: string;
  consumo: number;
  costo: number
  perdidas: number;
  TipoConsumo: string,
  Perdidas: number,
  consumo_residencial: number,
  consumo_comercial: number,
  consumo_industrial: number,
  perdidas_residencial: number,
  perdidas_comercial: number,
  perdidas_industrial: number,
  costo_residencial: number,
  costo_comercial: number,
  costo_industrial: number
};



export type SectionsContextType = {
  data: SectionsClient[] ;
  setData: (data: SectionsClient[]) => void;
};

const SectionsContext = createContext<SectionsContextType | null>(null);

export const useSections = () => {
  const context = useContext(SectionsContext);
  if (context === undefined) {
    throw new Error("useSections must be used within a SectionsProvider");
  }
  return context;
};

export const SectionsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, setData] = useState<SectionsClient[]>([]);

  return (
    <SectionsContext.Provider value={{ data, setData }}>
      {children}
    </SectionsContext.Provider>
  );
};
