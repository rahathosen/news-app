"use client";

import React, { useState } from "react";
import {
  CaretSortIcon,
  CheckIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";

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
import Link from "next/link";

type Division = {
  name: string;
  uniqueId: string;
  districtSet: District[];
};

type District = {
  name: string;
  uniqueId: string;
  upozilaSet: Upozila[];
};

type Upozila = {
  name: string;
  uniqueId: string;
};

export default function LocationDropdowns({ allDivision }: any) {
  const [divisionOpen, setDivisionOpen] = useState(false);
  const [divisionValue, setDivisionValue] = useState<string | undefined>(
    undefined
  );

  const [districtOpen, setDistrictOpen] = useState(false);
  const [districtValue, setDistrictValue] = useState<string | undefined>(
    undefined
  );

  const [upazilaOpen, setUpazilaOpen] = useState(false);
  const [upazilaValue, setUpazilaValue] = useState<string | undefined>(
    undefined
  );
  const handleSearch = () => {
    if (divisionValue) {
      alert(divisionValue);
    }
    if (districtValue) {
      alert(districtValue);
    }
    if (upazilaValue) {
      alert(upazilaValue);
    }
  };

  return (
    <div>
      {/* Division Dropdown */}
      <Popover
        open={divisionOpen}
        onOpenChange={(open) => setDivisionOpen(open)}
      >
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-label="বিভাগ সিলেক্ট করুন"
            aria-expanded={divisionOpen}
            className="w-full justify-between dark:text-gray-400"
          >
            {divisionValue
              ? allDivision.find(
                  (division: any) =>
                    division.uniqueId.toLowerCase() === divisionValue
                )?.name || ""
              : "বিভাগ সিলেক্ট করুন..."}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search division..." className="h-9" />
            <CommandEmpty>No division found.</CommandEmpty>
            <CommandGroup>
              {allDivision.map((division: any) => (
                <CommandItem
                  key={division.uniqueId}
                  value={division.uniqueId.toLowerCase()}
                  onSelect={(currentValue) => {
                    setDivisionValue(
                      currentValue === divisionValue ? undefined : currentValue
                    );
                    setDistrictValue(undefined);
                    setUpazilaValue(undefined);
                    setDivisionOpen(false);
                  }}
                >
                  {division.name}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      divisionValue === division.uniqueId.toLowerCase()
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

      {/* District Dropdown */}
      <Popover
        open={districtOpen}
        onOpenChange={(open) => setDistrictOpen(open)}
      >
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-label="জেলা সিলেক্ট করুন"
            aria-expanded={districtOpen}
            className="w-full justify-between mt-2 dark:text-gray-400"
          >
            {districtValue
              ? allDivision
                  .find(
                    (division: any) =>
                      division.uniqueId.toLowerCase() === divisionValue
                  )
                  ?.districtSet.find(
                    (district: any) =>
                      district.uniqueId.toLowerCase() === districtValue
                  )?.name || ""
              : "জেলা সিলেক্ট করুন..."}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search district..." className="h-9" />
            <CommandEmpty>No district found.</CommandEmpty>
            <CommandGroup>
              {(
                allDivision.find(
                  (division: any) =>
                    division.uniqueId.toLowerCase() === divisionValue
                )?.districtSet || []
              ).map((district: any) => (
                <CommandItem
                  key={district.uniqueId.toLowerCase()}
                  value={district.uniqueId.toLowerCase()}
                  onSelect={(currentValue) => {
                    setDistrictValue(
                      currentValue === districtValue ? undefined : currentValue
                    );
                    setUpazilaValue(undefined);
                    setDistrictOpen(false);
                  }}
                >
                  {district.name}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      districtValue === district.uniqueId.toLowerCase()
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
              ? allDivision
                  .find(
                    (division: any) =>
                      division.uniqueId.toLowerCase() === divisionValue
                  )
                  ?.districtSet.find(
                    (district: any) =>
                      district.uniqueId.toLowerCase() === districtValue
                  )
                  ?.upozilaSet.find(
                    (upazila: any) =>
                      upazila.uniqueId.toLowerCase() === upazilaValue
                  )?.name || ""
              : "উপজেলা সিলেক্ট করুন..."}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search upazila..." className="h-9" />
            <CommandEmpty>No upazila found.</CommandEmpty>
            <CommandGroup>
              {allDivision
                .find(
                  (division: any) =>
                    division.uniqueId.toLowerCase() === divisionValue
                )
                ?.districtSet.find(
                  (district: any) =>
                    district.uniqueId.toLowerCase() === districtValue
                )
                ?.upozilaSet.map((upazila: any) => (
                  <CommandItem
                    key={upazila.uniqueId.toLowerCase()}
                    value={upazila.uniqueId.toLowerCase()}
                    onSelect={(currentValue) => {
                      setUpazilaValue(
                        currentValue === upazilaValue ? undefined : currentValue
                      );
                      setUpazilaOpen(false);
                    }}
                  >
                    {upazila.name}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        upazilaValue === upazila.uniqueId.toLowerCase()
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

<Link
href={`/search?selectedValue=${divisionValue}&selectedValue=${districtValue}&selectedValue=${upazilaValue}`}
className="w-full bg-[#E7E5E4] dark:bg-[#071720] mt-4 p-2 flex items-center justify-center text-sm rounded-md text-gray-600 dark:text-white hover:opacity-75"
>
<MagnifyingGlassIcon className="mr-2 h-4 w-4" />
সার্চ করুন
</Link>
    </div>
  );
}
