import { clientAxios } from "@/config";

interface PayloadType {
  fechainicial: Date;
  fechafinal: Date;
}

export const sectionsPost = async (payload: PayloadType, path: String) => {
  const response = await clientAxios.post(`${path}`, payload);
  return response.data;
};
