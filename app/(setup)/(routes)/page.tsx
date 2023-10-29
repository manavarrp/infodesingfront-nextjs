"use client";

import { BarChart } from "@/components/charts/bar-chart";
import { DataTable } from "@/components/data-table";
import HeaderComponent from "@/components/header-component";
import { InitialForm } from "@/components/initial-form";
import { SectionsContextType, useSections } from "@/context/sections-context";
import { UnfoldVertical } from "lucide-react";
import { columns } from "./columns";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const { data } = useSections() as SectionsContextType;

  const labelSet: string[] = [];
  const dataSet1: number[] = [];
  const dataSet2: number[] = [];
  const dataSet3: number[] = [];
  for (const val of data) {
    labelSet.push(val.Linea);
    dataSet1.push(val.consumo);
    dataSet2.push(val.costo);
    dataSet3.push(val.perdidas);
  }

  return (
    <div className="dark:bg-zinc-700/70">
      <HeaderComponent
        title="Tramos"
        icon={
          <UnfoldVertical className=" w-10 h-10 text-zinc-500 dark:text-zinc-400" />
        }
      />
      <div className="dark:bg-zinc-700/70 bg-gray-200/30 p-2">
        <InitialForm path="/tramos" />
        <DataTable columns={columns} data={data} />
        <Separator className="bg-zinc-200 dark:bg-zinc-900 rounded-md my-5" />
        <BarChart
          labelSet={labelSet}
          dataSet1={dataSet1}
          dataSet2={dataSet2}
          dataSet3={dataSet3}
          title="Perdida - Costos & Consumo por Tramo"
          label1= "Consumo"
          label2= "Costo"
          label3= "Perdida"
        />
      </div>
    </div>
  );
}
