"use client"

import { SectionsContextType, useSections } from "@/context/sections-context";
import { sectionsPost } from "@/services/api";
import { useCallback, useState } from "react";

interface PayloadType {
  fechainicial: Date;
  fechafinal: Date;
}

export const usePostSections = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);
  const { setData} = useSections() as SectionsContextType;
  const postSections = useCallback(async (payload: PayloadType, path: String) => {
    try {
      setLoading(true);
      const response = await sectionsPost(payload, path);
      setResult(response);
      setData(response)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [setData]);

  return { loading, result, postSections };
};
