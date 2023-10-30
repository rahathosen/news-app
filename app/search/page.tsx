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
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
// import NewsGridTemplate from "@/components/layouts/newsGridTemplate";
import RowAd from "@/components/advertisement/row-ad";

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

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Page() {
  const [openCountry, setOpenCountry] = React.useState(false);
  const [openDivision, setOpenDivision] = React.useState(false);
  const [openDistrict, setOpenDistrict] = React.useState(false);
  const [openZip, setOpenZip] = React.useState(false);

  const [valueCountry, setValueCountry] = React.useState("");
  const [valueDivision, setValueDivision] = React.useState("");
  const [valueDistrict, setValueDistrict] = React.useState("");
  const [valueZip, setValueZip] = React.useState("");
  return (
    <div className="bg-stone-100 dark:bg-[#040D12] mt-4 2xl:p-8 rounded-b-lg rounded-t-lg pt-4  pb-4">
      <div className="flex flex-row flex-wrap relative px-4  py-4 bg-stone-100 dark:bg-[#040D12] ">
        <div className="max-w-full w-full lg:w-4/5">
          <div className="relative">
            <div className=" flex-1 lg:px-0 ">
              <div className="flex items-center  py-4 xl:px-0">
                <div className="w-full">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon
                        className="h-4 w-4 lg:h-5 lg:w-5  text-gray-900 dark:text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full rounded-md border-0 bg-white dark:bg-black
                       lg:py-2.5 py-1.5 pl-10 pr-3 text-gray-900 dark:text-gray-200 lg:text-lg ring-1 font-medium ring-inset ring-gray-300 dark:ring-[#071720]
                        placeholder:text-gray-400 focus:ring-2 focus:ring-inset dark:focus:ring-[#071720] focus:ring-gray-400
                        text-sm sm:leading-6"
                      placeholder="enter your Word"
                      type="search"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center ml-4 gap-x-1.5 
                  rounded-md bg-[#071720] px-2.5 lg:py-2.5 py-1.5 text-sm font-medium
                  text-white dark:text-gray-400  shadow-sm hover:bg-[#071720]/60 focus-visible:outline
                   focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                >
                  search
                  {/* <MagnifyingGlassIcon
                    className="-mr-0.5 h-5 w-5"
                    aria-hidden="true"
                  /> */}
                </button>
              </div>
            </div>
            {/* search end */}
            <h2 className="text-black dark:text-gray-400 lg:text-xl pb-4 text-lg font-bold">
              <span className="inline-block lg:h-4 h-4 lg:border-l-4 border-l-[3px] border-red-600 mr-2"></span>
              Search result for: {`"${"Dhaka Today"}"`}
            </h2>
            <div className="lg:hidden pb-2">
              <figcaption className="mt-2  flex gap-x-2 text-sm leading-6 text-gray-500">
                <InformationCircleIcon
                  className="mt-0.5 h-5 w-5 flex-none text-gray-300 dark:text-gray-700"
                  aria-hidden="true"
                />
                Select the menu for more sorting
              </figcaption>
            </div>
            <div className="flex flex-wrap gap-4">
              {/* <div className="hidden lg:block">
                <figcaption className="mt-2  flex gap-x-2 text-sm leading-6 text-gray-500">
                  <InformationCircleIcon
                    className="mt-0.5 h-5 w-5 flex-none text-gray-300 dark:text-gray-700"
                    aria-hidden="true"
                  />
                  Select menu for sorting
                </figcaption>
              </div> */}
              <Popover open={openCountry} onOpenChange={setOpenCountry}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={openCountry}
                    className="lg:w-[200px] w-full dark:text-gray-400 justify-between"
                  >
                    {valueCountry
                      ? country.find(
                          (framework) => framework.value === valueCountry
                        )?.label
                      : "Select Country"}
                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="lg:w-[200px] w-full p-0">
                  <Command>
                    <CommandInput
                      placeholder="Search Country..."
                      className="h-9"
                    />
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
                    className="lg:w-[200px] w-full justify-between dark:text-gray-400"
                  >
                    {valueDivision
                      ? division.find(
                          (framework) => framework.value === valueDivision
                        )?.label
                      : "Select Division"}
                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="lg:w-[200px] w-full p-0">
                  <Command>
                    <CommandInput
                      placeholder="Search Division..."
                      className="h-9"
                    />
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
                    className="lg:w-[200px] w-full justify-between dark:text-gray-400"
                  >
                    {valueDistrict
                      ? district.find(
                          (framework) => framework.value === valueDistrict
                        )?.label
                      : "Select District"}
                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="lg:w-[200px] w-full p-0">
                  <Command>
                    <CommandInput
                      placeholder="Search District..."
                      className="h-9"
                    />
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
                    className="lg:w-[200px] w-full justify-between dark:text-gray-400"
                  >
                    {valueZip
                      ? zip.find((framework) => framework.value === valueZip)
                          ?.label
                      : "Select Zip"}
                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="lg:w-[200px] w-full p-0">
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
            {/* <NewsGridTemplate /> */}
          </div>
        </div>
        <div className=" lg:w-[20%] lg:pl-4">
          <Image
            src={
              "https://st2.depositphotos.com/5544578/8976/v/950/depositphotos_89763874-stock-illustration-click-here-vertical-advertising-banner.jpg"
            }
            alt={""}
            width={640}
            height={427}
            className="hidden lg:block max-w-full w-full object-cover  max-h-full h-auto rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
