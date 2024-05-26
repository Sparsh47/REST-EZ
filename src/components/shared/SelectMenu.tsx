import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "@/context/apiContext";
import { useState } from "react";

interface SelectMenuProps {
  label: string;
  values: string[];
}

export function SelectMenu({ label, values }: SelectMenuProps) {
  const { setFormData } = useForm();

  const handleSelectChange = (value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [label]: value,
    }));
  };

  return (
    <>
      <Select onValueChange={handleSelectChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={`Select a ${label}`} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{label}</SelectLabel>
            {values.map((value, index) => (
              <SelectItem key={index} value={value}>
                {value}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}
