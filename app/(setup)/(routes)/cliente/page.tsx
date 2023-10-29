"use client";

import { DataTable } from "@/components/data-table";
import HeaderComponent from "@/components/header-component";
import { InitialForm } from "@/components/initial-form";
import { User } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { SectionsContextType, useSections } from "@/context/sections-context";
import { consumption } from "./consumption-columns";
import { cost } from "./cost-columns";
import { losses } from "./losses-columns";
import { BarChart } from "@/components/charts/bar-chart";

const ClientPage = () => {
  const { data } = useSections() as SectionsContextType;
  const labelSet: string[] = [];
  const dataSet1: number[] = [];
  const dataSet2: number[] = [];
  const dataSet3: number[] = [];
  const dataSet4: number[] = [];
  const dataSet5: number[] = [];
  const dataSet6: number[] = [];
  const dataSet7: number[] = [];
  const dataSet8: number[] = [];
  const dataSet9: number[] = [];
  for (const val of data) {
    labelSet.push(val.Linea);
    dataSet1.push(val.consumo_residencial);
    dataSet2.push(val.consumo_comercial);
    dataSet3.push(val.consumo_industrial);
    dataSet4.push(val.costo_residencial);
    dataSet5.push(val.costo_comercial);
    dataSet6.push(val.consumo_industrial);
    dataSet7.push(val.perdidas_residencial);
    dataSet8.push(val.perdidas_comercial);
    dataSet9.push(val.perdidas_industrial);
  }
  return (
    <div>
      <HeaderComponent
        title="Clientes"
        icon={<User className=" w-10 h-10 text-zinc-500 dark:text-zinc-400" />}
      />
      <div className="dark:bg-zinc-700/70 bg-gray-200/30 p-2 h-[40%]">
        <InitialForm path="/cliente" />
        <DataTable columns={consumption} data={data} />
        <BarChart
          labelSet={labelSet}
          dataSet1={dataSet1}
          dataSet2={dataSet2}
          dataSet3={dataSet3}
          title="Consumo por Tramo"
          label1= "Consumo Residencial"
          label2= "Consumo Comercial"
          label3= "Consumo Industrial"
        />
        <Separator className="bg-zinc-200 dark:bg-zinc-900 rounded-md my-8" />
        <DataTable columns={cost} data={data} />
        <BarChart
          labelSet={labelSet}
          dataSet1={dataSet4}
          dataSet2={dataSet5}
          dataSet3={dataSet6}
          title="Costos por Tramo"
          label1= "Costo Residencial"
          label2= "Costo Comercial"
          label3= "Costo Industrial" 
        />
        <Separator className="bg-zinc-200 dark:bg-zinc-900 rounded-md my-8" />
        <DataTable columns={losses} data={data} />
        <BarChart
          labelSet={labelSet}
          dataSet1={dataSet7}
          dataSet2={dataSet8}
          dataSet3={dataSet9}
          title="Perdida por Tramo"
          label1= "Perdida Residencial" 
          label2= "Perdida Comercial"
          label3= "Perdida Industrial"
        />
      </div>
    </div>
  );
};

export default ClientPage;
