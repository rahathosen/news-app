"use client";

import React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import {
  MoonIcon,
  SunIcon,
  ComputerDesktopIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const btnDefault = "mr-2 p-1 dark:text-zinc-200 text-zinc-700";

  return (
    <div
      className={`flex border  items-center bg-[#fafafa] dark:bg-[#040D12] dark:border-[#0c2525f8] p-2 px-4 justify-between rounded-md`}
    >
      {/* <button
        className={`${btnDefault} ${
          theme === "system"
            ? "bg-white dark:bg-[#0c2525f8] dark:text-gray-100 text-zinc-50 rounded-full shadow-xl"
            : ""
        }`}
        onClick={() => setTheme("system")}
      >
        <ComputerDesktopIcon className="w-4 h-4" />
      </button> */}
      <button
        aria-label="Dark Button"
        className={`${btnDefault} ${
          theme === "dark"
            ? "bg-white dark:bg-[#0c2525f8] dark:text-gray-100 text-zinc-50 rounded-md shadow-xl"
            : ""
        }`}
        onClick={() => setTheme("dark")}
      >
        <MoonIcon className="h-4 w-4" />
      </button>
      <button
        aria-label="Light Button"
        className={`${btnDefault} ${
          theme === "light"
            ? "bg-gray-200 dark:bg-[#0c2525f8] text-zinc-700 rounded-md shadow-xl"
            : ""
        }`}
        onClick={() => setTheme("light")}
      >
        <SunIcon className="h-4 w-4" />
      </button>
      <div className="border-l border-gray-200 dark:border-[#0c2525f8]  py-2"></div>
      <button
        className={`${btnDefault} ${"bg-gray-200 dark:bg-[#0c2525f8]  text-zinc-700 rounded-md shadow-md"}`}
      >
        <SheetClose asChild className="-mb-1">
          <Link href="/search">
            <MagnifyingGlassIcon className="h-4 w-4" />
          </Link>
        </SheetClose>
      </button>
    </div>
  );
}
