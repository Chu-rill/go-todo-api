"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="container max-w-[900px] mx-auto">
      <div className="my-4 px-4 h-16 rounded-md bg-slate-200 dark:bg-slate-800 flex items-center justify-between">
        {/* LEFT SIDE */}
        <div className="hidden sm:flex justify-center items-center gap-3">
          <img src="/react.png" alt="logo" width={50} height={50} />
          <span className="text-4xl">+</span>
          <img src="/go.png" alt="logo" width={40} height={40} />
          <span className="text-4xl">=</span>
          <img src="/explode.png" alt="logo" width={50} height={50} />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          <span className="text-lg font-medium">Daily Tasks</span>
          {/* Theme Toggle Button */}
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              <span className="sr-only">Toggle theme</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
