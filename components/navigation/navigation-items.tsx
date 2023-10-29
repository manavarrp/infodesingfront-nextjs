"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UnfoldVertical, User, SquareEqual } from "lucide-react";
import { SectionsContextType, useSections } from "@/context/sections-context";
import { Sheet, SheetClose } from "../ui/sheet";

const NavigationItems = () => {
  const pathname = usePathname();
  const { setData } = useSections() as SectionsContextType;

  return (
    <Sheet>
      <div className="flex flex-col ml-2 mt-8 space-y-2">
        <SheetClose asChild>
          <Link href="/">
            <div
              className={cn(
                "px-2 py-2 rounded-md flex items-center gap-x-2 w-[90%] hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition mb-1",
                pathname === "/"
                  ? "bg-zinc-700/30 dark:bg-zinc-700 text-white"
                  : ""
              )}
              onClick={() => setData([])}
            >
              <UnfoldVertical className="flex-shrink-0 w-5 h-5 text-zinc-500 dark:text-zinc-400" />
              <p className="font-semibold text-sm text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300">
                Tramos
              </p>
            </div>
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <Link href="/cliente">
            <div
              className={cn(
                "px-2 py-2 rounded-md flex items-center gap-x-2 w-[90%] hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition mb-1",
                pathname === "/cliente"
                  ? "bg-zinc-700/30 dark:bg-zinc-700 text-white"
                  : ""
              )}
              onClick={() => setData([])}
            >
              <User className="flex-shrink-0 w-5 h-5 text-zinc-500 dark:text-zinc-400" />
              <p className="font-semibold text-sm text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300">
                Cliente
              </p>
            </div>
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <Link href="/tramos-cliente">
            <div
              className={cn(
                "px-2 py-2 rounded-md flex items-center gap-x-2 w-[90%] hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition mb-1",
                pathname === "/tramos-cliente"
                  ? "bg-zinc-700/30 dark:bg-zinc-700 text-white"
                  : ""
              )}
              onClick={() => setData([])}
            >
              <SquareEqual className="flex-shrink-0 w-5 h-5 text-zinc-500 dark:text-zinc-400" />
              <p className="font-semibold text-sm text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300">
                Tramos / Cliente
              </p>
            </div>
          </Link>
        </SheetClose>
      </div>
    </Sheet>
  );
};

export default NavigationItems;
