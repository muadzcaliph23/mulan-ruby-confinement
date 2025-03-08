"use client";
import React, { useState } from "react";
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

const Form = () => {
  const [date, setDate] = useState<Date | undefined>();

  return (
    <div
      className="bg-gray-200 min-h-screen grid justify-center items-center bg-no-repeat w-full"
      style={{
        backgroundImage: "url(/wave.svg)",
      }}
    >
      <Template>
        <div className="space-y-4 w-[250px]">
          <div className="grid gap-1 items-center">
            <p className="font-semibold text-white drop-shadow-md">Name:</p>
            <input
              type="text"
              name="name"
              className="px-3 py-2 rounded-md border-1 border-gray-300 text-sm drop-shadow-sm"
            />
          </div>
          <div className="grid gap-1 items-center">
            <p className="font-semibold text-white drop-shadow-md">Email:</p>
            <input
              type="text"
              name="name"
              className="px-3 py-2 rounded-md border-1 border-gray-300 text-sm drop-shadow-sm"
            />
          </div>
          <div className="grid gap-1 items-center">
            <p className="font-semibold text-white drop-shadow-md">
              Nombor Telefon:
            </p>
            <input
              type="text"
              name="name"
              className="px-3 py-2 rounded-md border-1 border-gray-300 text-sm drop-shadow-sm"
            />
          </div>
          <div className="grid gap-1 items-center">
            <p className="font-semibold text-white drop-shadow-md">Pakej:</p>
            <Select>
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
                <SelectItem className="hover:cursor-pointer" value="Basic">
                  Basic
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-1 items-center mb-4">
            <p className="text-white font-semibold drop-shadow-md">Tarikh:</p>
            <Popover>
              <PopoverTrigger className="hover:bg-white" asChild>
                <Button
                  id="reservation_date"
                  name="book_datetime"
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
          <button className="bg-secondary font-semibold w-full py-2 rounded-md hover:bg-[#fdcccf] transition-all duration-500">
            Hantar
          </button>
        </div>
      </Template>
    </div>
  );
};

export default Form;
