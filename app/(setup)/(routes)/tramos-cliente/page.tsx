"use client";

import HeaderComponent from "@/components/header-component";
import { InitialForm } from "@/components/initial-form";
import { SectionsContextType, useSections } from "@/context/sections-context";
import { SquareEqual } from "lucide-react";
import { columns } from "./columns";
import { DataTable } from "@/components/data-table";

const TramosClientePage = () => {
  const { data } = useSections() as SectionsContextType;
  return (
    <div>
      <HeaderComponent
        title="Cantidad Tramos/Cliente"
        icon={
          <SquareEqual className=" w-10 h-10 text-zinc-500 dark:text-zinc-400" />
        }
      />
      <div className="dark:bg-zinc-700/70 bg-gray-200/30 p-2">
        <InitialForm path="/tramos-cliente" />
        <div className="container mx-auto py-10">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default TramosClientePage;
