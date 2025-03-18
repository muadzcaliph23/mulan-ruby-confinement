"use client";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import Template from "@/app/Template";
import { simpanTempahan } from "@/services/tempahan";
import { Tempahan } from "@/types/tempahan";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const Form = () => {
  const [date, setDate] = useState<Date>();
  const [pakej, setPakej] = useState("Premium");
  const router = useRouter();
  const form = useForm<Tempahan>();
  const {
    handleSubmit,
    setError,
    register,
    setValue,
    formState: { isSubmitting, errors },
  } = form;

  useEffect(() => {
    setValue("tarikh", date);
  }, [date, setValue]);

  console.log(pakej);

  useEffect(() => {
    setValue("pakej", pakej);
  }, [pakej, setValue]);

  const handleClickSupport = () => {
    const destination = "https://wa.me/60143759441";
    window.open(destination, "_blank");
  };

  const onSubmit = async (data: Tempahan) => {
    const result = await simpanTempahan(data);
    if (!result) {
      toast("An error occurred while submitting your form.", {
        className: "bg-red-400 text-white",
        action: { label: "Contact Support", onClick: () => handleClickSupport },
      });

      form.reset();
      setError("root", {
        type: "manual",
        message: "An error occurred. Please try again.",
      });
    } else {
      toast("Submission Successful. Thank you!", {
        className: "bg-primary text-white",
      });

      form.reset();
      setTimeout(() => {
        router.push(`/`);
      }, 3000);
    }
  };

  return (
    <div
      className="bg-gray-200 min-h-screen grid justify-center items-center bg-no-repeat w-full"
      style={{
        backgroundImage: "url(/wave.svg)",
      }}
    >
      <Template>
        <div className="w-[250px]">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid gap-1 items-center">
              <p className="font-semibold text-white drop-shadow-md">Name:</p>
              <input
                type="text"
                className="px-3 py-2 rounded-md border-1 border-gray-300 text-sm drop-shadow-sm"
                {...register("nama", {
                  required: {
                    value: true,
                    message: "Nama anda diperlukan",
                  },
                })}
              />
              <p
                className={`${
                  errors.nama?.message ? "text-xs text-red-500 pl-2" : "hidden"
                }`}
              >
                {errors.nama?.message}
              </p>
            </div>
            <div className="grid gap-1 items-center">
              <p className="font-semibold text-white drop-shadow-md">Email:</p>
              <input
                type="email"
                className="px-3 py-2 rounded-md border-1 border-gray-300 text-sm drop-shadow-sm"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email anda diperlukan",
                  },
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "Format email anda salah",
                  },
                })}
              />
              <p
                className={`${
                  errors.email?.message ? "text-xs text-red-500 pl-2" : "hidden"
                }`}
              >
                {errors.email?.message}
              </p>
            </div>
            <div className="grid gap-1 items-center">
              <p className="font-semibold text-white drop-shadow-md">
                Nombor Telefon:
              </p>
              <input
                type="text"
                className="px-3 py-2 rounded-md border-1 border-gray-300 text-sm drop-shadow-sm"
                {...register("telefon", {
                  required: {
                    value: true,
                    message: "Nombor telefon anda diperlukan",
                  },
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Format nombor telefon anda salah",
                  },
                })}
              />
              <p
                className={`${
                  errors.telefon?.message
                    ? "text-xs text-red-500 pl-2"
                    : "hidden"
                }`}
              >
                {errors.telefon?.message}
              </p>
            </div>
            <div className="grid gap-1 items-center">
              <p className="font-semibold text-white drop-shadow-md">Pakej:</p>
              <Select value={pakej} onValueChange={setPakej}>
                <SelectTrigger className="bg-white py-2 border-none drop-shadow-sm">
                  <SelectValue placeholder="Pilih Pakej" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem
                    className="hover:cursor-pointer hover:bg-gray-100"
                    value="Premium"
                  >
                    Premium
                  </SelectItem>
                  <SelectItem
                    className="hover:cursor-pointer hover:bg-gray-100"
                    value="Medium"
                  >
                    Medium
                  </SelectItem>
                  <SelectItem
                    className="hover:cursor-pointer hover:bg-gray-100"
                    value="Basic"
                  >
                    Basic
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-1 items-center">
              <p className="text-white font-semibold drop-shadow-md">Tarikh:</p>
              <Popover>
                <PopoverTrigger
                  className="hover:bg-white"
                  style={{ color: "black" }}
                  asChild
                >
                  <Button
                    className={cn(
                      "bg-white text-sm w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pilih Tarikh</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <button
              className={`bg-secondary font-semibold w-full py-2 rounded-md hover:bg-[#fdcccf] flex gap-1.5 justify-center transition-all duration-500 ${
                isSubmitting && "opacity-60"
              }`}
            >
              Hantar
              {isSubmitting && (
                <div className="animate-spin ml-2 rounded-full h-[20px] w-[20px] border-t-2 border-b-2" />
              )}
            </button>
          </form>
        </div>
      </Template>
    </div>
  );
};

export default Form;
