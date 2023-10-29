"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { usePostSections } from "@/hooks/use-post-sections";
import { cn } from "@/lib/utils";
import { formSchema } from "@/utils/formSchemas/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { SquareEqual } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface InitialFormProps {
  path: String;
}

export const InitialForm = ({ path }: InitialFormProps) => {
  const { loading, postSections } = usePostSections();

  const form = useForm({
    resolver: zodResolver(formSchema),
  });
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const startDateISO = data.fechainicial.toISOString();
    const endDateISO = data.fechafinal.toISOString();

    const payload = {
      fechainicial: startDateISO.slice(0, 10), 
      fechafinal: endDateISO.slice(0, 10), 
    };

    await postSections(payload, path);
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-10 md:flex md:justify-center gap-4"
        >
          <FormField
            control={form.control}
            name="fechainicial"
            render={({ field }) => (
              <FormItem className="flex flex-col mb-6">
                <FormLabel>Fecha Inicial</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full md:w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "yyyy-MM-dd")
                        ) : (
                          <span>Selecciona una fecha</span>
                        )}
                        <SquareEqual className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>Fecha inicial para el calculo</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="fechafinal"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Fecha Final</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full md:w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "yyyy-MM-dd")
                        ) : (
                          <span>Selecciona una fecha</span>
                        )}
                        <SquareEqual className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>Fecha final para el calculo</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full md:w-[100px] mt-6"
            disabled={loading}
            variant="outline"
          >
            Cargar
          </Button>
        </form>
      </Form>
    </>
  );
};
