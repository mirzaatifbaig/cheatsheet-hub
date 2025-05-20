import { useEffect, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { CommandIcon } from "lucide-react";
import { categories } from "@/data/cheatsheets";
import { useTheme } from "@/components/ThemeProvider";
export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const { setTheme } = useTheme();
  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);
  const handleSelectCategory = (categoryId) => {
    const event = new CustomEvent("categorySelected", {
      detail: { categoryId },
    });
    window.dispatchEvent(event);
    setOpen(false);
  };
  const allCheatSheets = categories.flatMap((category) =>
    category.cheatSheets.map((sheet) => ({
      ...sheet,
      categoryId: category.id,
    })),
  );
  const handleSelectCheatSheet = (categoryId, sheetId) => {
    const categoryEvent = new CustomEvent("categorySelected", {
      detail: { categoryId },
    });
    window.dispatchEvent(categoryEvent);
    setTimeout(() => {
      document.querySelector(`[data-value="${sheetId}"]`)?.click();
    }, 100);
    setOpen(false);
  };
  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-fit !font-light p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
        onClick={() => setOpen(true)}
      >
        Search...
        <CommandIcon className="h-4 w-4 xl:mr-2" />
        <span className="hidden xl:inline-flex">Search...</span>
        <span className="sr-only">Search cheatsheets</span>
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium opacity-100 xl:flex">
          <span className="text-xs">⌘</span>
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {categories.map((category) => (
              <CommandItem
                key={category.id}
                onSelect={() => handleSelectCategory(category.id)}
              >
                <span>{category.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Cheatsheets">
            {allCheatSheets.map((sheet) => (
              <CommandItem
                key={sheet.id}
                onSelect={() =>
                  handleSelectCheatSheet(sheet.categoryId, sheet.id)
                }
              >
                <span>{sheet.title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => setTheme("light")}>
              <span>Light Mode</span>
            </CommandItem>
            <CommandItem onSelect={() => setTheme("dark")}>
              <span>Dark Mode</span>
            </CommandItem>
            <CommandItem onSelect={() => setTheme("system")}>
              <span>System Theme</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
