"use client"
// Import necessary types from React
import React, { useState } from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

// Import types from your utility library and UI components
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

// Define types for division, district, and upazila
type Division = {
  value: string;
  label: string;
};

type District = {
  value: string;
  label: string;
};

type Upazila = {
  value: string;
  label: string;
};

// Define the data for divisions, districts, and upazilas
const divisions: Division[] = [
  {
    value: "dhaka",
    label: "Dhaka",
  },
  {
    value: "chittagong",
    label: "Chittagong",
  },
  // Add more divisions as needed
];

const districts: Record<string, District[]> = {
  dhaka: [
    {
      value: "dhakaCity",
      label: "Dhaka City",
    },
    {
      value: "gazipur",
      label: "Gazipur",
    },
    // Add more districts for Dhaka as needed
  ],
  chittagong: [
    {
      value: "chittagongCity",
      label: "Chittagong City",
    },
    {
      value: "coxsbazar",
      label: "Cox's Bazar",
    },
    // Add more districts for Chittagong as needed
  ],
  // Add more divisions with their respective districts as needed
};

const upazilas: Record<string, Upazila[]> = {
  dhakaCity: [
    {
      value: "gulshan",
      label: "Gulshan",
    },
    {
      value: "mohammadpur",
      label: "Mohammadpur",
    },
    // Add more upazilas for Dhaka City as needed
  ],
  gazipur: [
    {
      value: "tongi",
      label: "Tongi",
    },
    {
      value: "kapasia",
      label: "Kapasia",
    },
    // Add more upazilas for Gazipur as needed
  ],
  chittagongCity: [
    {
      value: "kotwali",
      label: "Kotwali",
    },
    {
      value: "doubleMooring",
      label: "Double Mooring",
    },
    // Add more upazilas for Chittagong City as needed
  ],
  coxsbazar: [
    {
      value: "coxsbazarSadar",
      label: "Cox's Bazar Sadar",
    },
    {
      value: "ukhiya",
      label: "Ukhiya",
    },
    // Add more upazilas for Cox's Bazar as needed
  ],
  // Add more districts with their respective upazilas as needed
};

// Define the component
const LocationDropdowns: React.FC = () => {
  const [divisionOpen, setDivisionOpen] = useState(false);
  const [divisionValue, setDivisionValue] = useState<string | undefined>(undefined);

  const [districtOpen, setDistrictOpen] = useState(false);
  const [districtValue, setDistrictValue] = useState<string | undefined>(undefined);

  const [upazilaOpen, setUpazilaOpen] = useState(false);
  const [upazilaValue, setUpazilaValue] = useState<string | undefined>(undefined);

  return (
    <div>
      {/* Division Dropdown */}
      <Popover open={divisionOpen} onOpenChange={(open) => setDivisionOpen(open)}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-label="বিভাগ সিলেক্ট করুন"
            aria-expanded={divisionOpen}
            className="w-full justify-between dark:text-gray-400"
          >
            {divisionValue
              ? divisions.find((division) => division.value === divisionValue)?.label || ""
              : "বিভাগ সিলেক্ট করুন..."}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search division..." className="h-9" />
            <CommandEmpty>No division found.</CommandEmpty>
            <CommandGroup>
              {divisions.map((division) => (
                <CommandItem
                  key={division.value}
                  value={division.value}
                  onSelect={(currentValue) => {
                    setDivisionValue(currentValue === divisionValue ? undefined : currentValue);
                    setDistrictValue(undefined);
                    setUpazilaValue(undefined);
                    setDivisionOpen(false);
                  }}
                >
                  {division.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      divisionValue === division.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>

      {/* District Dropdown */}
      <Popover open={districtOpen} onOpenChange={(open) => setDistrictOpen(open)}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-label="জেলা সিলেক্ট করুন"
            aria-expanded={districtOpen}
            className="w-full justify-between mt-2 dark:text-gray-400"
          >
            {districtValue
              ? districts[divisionValue || ""]?.find((district) => district.value === districtValue)?.label || ""
              : "জেলা সিলেক্ট করুন..."}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search district..." className="h-9" />
            <CommandEmpty>No district found.</CommandEmpty>
            <CommandGroup>
              {districts[divisionValue || ""]?.map((district) => (
                <CommandItem
                  key={district.value}
                  value={district.value}
                  onSelect={(currentValue) => {
                    setDistrictValue(currentValue === districtValue ? undefined : currentValue);
                    setUpazilaValue(undefined);
                    setDistrictOpen(false);
                  }}
                >
                  {district.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      districtValue === district.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>

      {/* Upazila Dropdown */}
      <Popover open={upazilaOpen} onOpenChange={(open) => setUpazilaOpen(open)}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-label="উপজেলা সিলেক্ট করুন"
            aria-expanded={upazilaOpen}
            className="w-full justify-between mt-2 dark:text-gray-400"
          >
            {upazilaValue
              ? upazilas[districtValue || ""]?.find((upazila) => upazila.value === upazilaValue)?.label || ""
              : "উপজেলা সিলেক্ট করুন..."}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search upazila..." className="h-9" />
            <CommandEmpty>No upazila found.</CommandEmpty>
            <CommandGroup>
              {upazilas[districtValue || ""]?.map((upazila) => (
                <CommandItem
                  key={upazila.value}
                  value={upazila.value}
                  onSelect={(currentValue) => {
                    setUpazilaValue(currentValue === upazilaValue ? undefined : currentValue);
                    setUpazilaOpen(false);
                  }}
                >
                  {upazila.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      upazilaValue === upazila.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default LocationDropdowns;
