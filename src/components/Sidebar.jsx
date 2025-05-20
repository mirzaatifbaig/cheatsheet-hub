import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  GitBranchIcon,
  CodeIcon,
  TerminalIcon,
  PaletteIcon,
} from "lucide-react";
import { categories } from "@/data/cheatsheets";
import { ReactIcon } from "@/components/ui/ReactIcon";
import TailwindIcon from "@/components/ui/TailWindIcon";
import ZustandIcon from "@/components/ui/ZustandIcon";
import ReactQueryIcon from "@/components/ui/ReactQueryIcon";
import { LinuxIcon } from "@/components/ui/LinuxIcon";
import AxiosIcon from "@/components/ui/AxiosIcon";
export function Sidebar({ className, ...props }) {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const getCategoryIcon = (icon) => {
    console.log(icon);
    switch (icon) {
      case "linux":
        return <LinuxIcon className="h-5 w-5" />;
      case "axios":
        return <AxiosIcon className="h-5 w-5" />;
      case "react-query":
        return <ReactQueryIcon className="h-5 w-5" />;
      case "zustand":
        return <ZustandIcon className="h-5 w-5" />;
      case "git-branch":
        return <GitBranchIcon className="h-5 w-5" />;
      case "tailwind":
        return <TailwindIcon className="h-5 w-5" />;
      case "regex":
        return <CodeIcon className="h-5 w-5" />;
      case "terminal":
        return <TerminalIcon className="h-5 w-5" />;
      case "palette":
        return <PaletteIcon className="h-5 w-5" />;
      case "react":
        return <ReactIcon />;
      default:
        return <CodeIcon className="h-5 w-5" />;
    }
  };
  return (
    <div className={cn("pb-12", className)} {...props}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Categories
          </h2>
          <div className="space-y-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  const event = new CustomEvent("categorySelected", {
                    detail: { categoryId: category.id },
                  });
                  window.dispatchEvent(event);
                  setActiveCategory(category.id);
                }}
                className={cn(
                  "w-full flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors",
                  activeCategory === category.id
                    ? "bg-accent text-accent-foreground"
                    : "transparent",
                )}
              >
                {getCategoryIcon(category.icon)}
                <span>{category.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
