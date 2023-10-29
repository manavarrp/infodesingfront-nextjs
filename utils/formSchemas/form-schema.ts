import { z, ZodType } from "zod";

type FormData = {
  fechainicial: Date | String;
  fechafinal:  Date | String;
};

export const formSchema: ZodType<any> = z
  .object({
    fechainicial: z.coerce
      .date()
      .refine((data) => data < new Date(), {
        message: "Start date must be in the future",
      }),
      fechafinal: z.coerce.date(),
  })
  .refine((data) => data.fechafinal > data.fechainicial, {
    message: "Fecha final no puede ser menor que la fecha inicial",
    path: ["fechafinal"],
  });
