import { MoonIcon, SunIcon, MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CommandMenu } from "@/components/CommandMenu";
import { Sidebar } from "@/components/Sidebar";
export function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-0">
              <Sidebar />
            </SheetContent>
          </Sheet>{" "}
          <div className="font-bold text-lg sm:text-xl flex items-center gap-1">
            <span className="text-primary">Dev</span>
            <span>Toolbox</span>
          </div>
        </div>{" "}
        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <CommandMenu />
          </div>{" "}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
