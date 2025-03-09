"use server"
import { supabase } from "@/lib/supabase/server";
import { Tempahan } from "@/types/tempahan";

export const simpanTempahan = async (
    formData: Tempahan,
  ): Promise<number | undefined> => {
  
    try {
      const { data, error } = await supabase
        .from("tempahan")
        .insert([formData])
        .select();
  
      if (error) {
        console.error("Error fetching data in simpanTempahan:", error);
        return;
      }
  
      return data[0].id;
    } catch (e) {
      console.error("An unexpected error occurred in simpanTempahan:", e);
      return;
    }
  };