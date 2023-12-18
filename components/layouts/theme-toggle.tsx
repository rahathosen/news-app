"use client";

import React from "react";
import { useTheme } from "next-themes";

import {
  MoonIcon,
  SunIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/solid";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const btnDefault = "mr-2 p-1 dark:text-zinc-200 text-zinc-700";

  return (
    <div
      className={`flex border items-center bg-[#fafafa] dark:bg-[#040D12] dark:border-[#0c2525f8] p-2 px-4 justify-between rounded-full`}
    >
      <button
        aria-label="Default Button"
        className={`${btnDefault} ${
          theme === "system"
            ? "bg-white dark:bg-[#0c2525f8] dark:text-gray-100 text-zinc-50 rounded-full"
            : ""
        }`}
        onClick={() => setTheme("system")}
      >
        <ComputerDesktopIcon className="w-4 h-4" />
      </button>
      <button
        aria-label="Dark Button"
        className={`${btnDefault} ${
          theme === "dark"
            ? "bg-white dark:bg-[#0c2525f8] dark:text-gray-100 text-zinc-50 rounded-full"
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
            ? "bg-neutral-200 dark:bg-[#0c2525f8] text-zinc-700 rounded-full "
            : ""
        }`}
        onClick={() => setTheme("light")}
      >
        <SunIcon className="h-4 w-4" />
      </button>
    </div>
  );
}
