"use client";
import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
const country = [
  {
    value: "bangladesh",
    label: "Bangladesh",
  },
  {
    value: "india",
    label: "India",
  },
  {
    value: "pakistan",
    label: "Pakistan",
  },
  {
    value: "afghanistan",
    label: "Afghanistan",
  },
  {
    value: "nepal",
    label: "Nepal",
  },
];
const division = [
  {
    value: "dhaka",
    label: "Dhaka",
  },
  {
    value: "chittagong",
    label: "Chittagong ",
  },
  {
    value: "khulna",
    label: "Khulna",
  },
  {
    value: "rajshahi ",
    label: "Rajshahi ",
  },
  {
    value: "nepal1",
    label: "Nepal1",
  },
];
const district = [
  {
    value: "tangail",
    label: "Tangail",
  },
  {
    value: "gazipur",
    label: "Gazipur",
  },
  {
    value: "jessore",
    label: "Jessore",
  },
  {
    value: "bagerhat",
    label: "Bagerhat",
  },
  {
    value: "noakhali",
    label: "Noakhali",
  },
];
const zip = [
  {
    value: "1600",
    label: "1600",
  },
  {
    value: "1480",
    label: "1480",
  },
  {
    value: "1680",
    label: "1680",
  },
  {
    value: "1280",
    label: "1280",
  },
  {
    value: "1420",
    label: "1420",
  },
];

export default function DropdownSelect() {
  const [openCountry, setOpenCountry] = React.useState(false);
  const [openDivision, setOpenDivision] = React.useState(false);
  const [openDistrict, setOpenDistrict] = React.useState(false);
  const [openZip, setOpenZip] = React.useState(false);

  const [valueCountry, setValueCountry] = React.useState("");
  const [valueDivision, setValueDivision] = React.useState("");
  const [valueDistrict, setValueDistrict] = React.useState("");
  const [valueZip, setValueZip] = React.useState("");
  return (
    <div>
      <div className="flex flex-wrap gap-4">
        <Popover open={openCountry} onOpenChange={setOpenCountry}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={openCountry}
              className=" w-full dark:text-gray-400 justify-between"
            >
              {valueCountry
                ? country.find((framework) => framework.value === valueCountry)
                    ?.label
                : "দেশ সিলেক্ট করুন"}
              <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className=" w-full p-0">
            <Command>
              <CommandInput placeholder="Search Country..." className="h-9" />
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {country.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    onSelect={(currentValue) => {
                      setValueCountry(
                        currentValue === valueCountry ? "" : currentValue
                      );
                      setOpenCountry(false);
                    }}
                  >
                    {framework.label}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        valueCountry === framework.value
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
        <Popover open={openDivision} onOpenChange={setOpenDivision}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={openDivision}
              className=" w-full justify-between dark:text-gray-400"
            >
              {valueDivision
                ? division.find(
                    (framework) => framework.value === valueDivision
                  )?.label
                : "বিভাগ সিলেক্ট করুন"}
              <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className=" w-full p-0">
            <Command>
              <CommandInput placeholder="Search Division..." className="h-9" />
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {division.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    onSelect={(currentValue) => {
                      setValueDivision(
                        currentValue === valueDivision ? "" : currentValue
                      );
                      setOpenDivision(false);
                    }}
                  >
                    {framework.label}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        valueDivision === framework.value
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
        <Popover open={openDistrict} onOpenChange={setOpenDistrict}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={openDistrict}
              className=" w-full justify-between dark:text-gray-400"
            >
              {valueDistrict
                ? district.find(
                    (framework) => framework.value === valueDistrict
                  )?.label
                : "জেলা সিলেক্ট করুন"}
              <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className=" w-full p-0">
            <Command>
              <CommandInput placeholder="Search District..." className="h-9" />
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {district.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    onSelect={(currentValue) => {
                      setValueDistrict(
                        currentValue === valueDistrict ? "" : currentValue
                      );
                      setOpenDistrict(false);
                    }}
                  >
                    {framework.label}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        valueDistrict === framework.value
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
        <Popover open={openZip} onOpenChange={setOpenZip}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={openZip}
              className=" w-full justify-between dark:text-gray-400"
            >
              {valueZip
                ? zip.find((framework) => framework.value === valueZip)?.label
                : "জিপকোড সিলেক্ট করুন"}
              <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className=" w-full p-0">
            <Command>
              <CommandInput placeholder="Search Zip..." className="h-9" />
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {zip.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    onSelect={(currentValue) => {
                      setValueZip(
                        currentValue === valueZip ? "" : currentValue
                      );
                      setOpenZip(false);
                    }}
                  >
                    {framework.label}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        valueZip === framework.value
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
