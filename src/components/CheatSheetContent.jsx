import { useEffect, useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Code } from "@/components/ui/code";
import { categories } from "@/data/cheatsheets";
import {
  Code as CodeIcon,
  GitBranchIcon,
  Info,
  PaletteIcon,
  TerminalIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { ReactIcon } from "@/components/ui/ReactIcon";
import { LinuxIcon } from "@/components/ui/LinuxIcon";
import AxiosIcon from "@/components/ui/AxiosIcon";
import ReactQueryIcon from "@/components/ui/ReactQueryIcon";
import ZustandIcon from "@/components/ui/ZustandIcon";
import TailwindIcon from "@/components/ui/TailWindIcon";
export function CheatSheetContent() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [activeCheatSheet, setActiveCheatSheet] = useState(
    categories[0].cheatSheets[0].id,
  );
  const tabsListRef = useRef(null);
  useEffect(() => {
    const handleCategoryChange = (event) => {
      const categoryId = event.detail.categoryId;
      const category = categories.find((c) => c.id === categoryId);
      if (category) {
        setActiveCategory(category);
        setActiveCheatSheet(category.cheatSheets[0].id);
      }
    };
    window.addEventListener("categorySelected", handleCategoryChange);
    return () => {
      window.removeEventListener("categorySelected", handleCategoryChange);
    };
  }, []);
  const scrollTabs = (offset) => {
    tabsListRef.current?.scrollBy({ left: offset, behavior: "smooth" });
  };
  const getCheatSheetIcon = (icon) => {
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
    <div className="h-full flex flex-col gap-4 p-4 pt-0">
      <div className="flex items-center mt-2">
        <h1 className="text-2xl font-bold">{activeCategory.title}</h1>
      </div>{" "}
      <Tabs
        defaultValue={activeCheatSheet}
        value={activeCheatSheet}
        onValueChange={setActiveCheatSheet}
        className="w-full space-y-6"
      >
        <div className="relative">
          <Button
            size="icon"
            className="absolute left-0 top-1/2 z-10 text-white hover:bg-zinc-800 bg-zinc-900 -translate-y-1/2 shadow-md"
            onClick={() => scrollTabs(-150)}
          >
            <ChevronLeft />
          </Button>{" "}
          <div
            ref={tabsListRef}
            className="flex overflow-x-auto no-scrollbar px-10"
          >
            <TabsList className="inline-flex h-10 items-center justify-start rounded-md bg-muted p-1 text-muted-foreground flex-nowrap gap-2">
              {activeCategory.cheatSheets.map((sheet) => (
                <TabsTrigger
                  key={sheet.id}
                  value={sheet.id}
                  className="inline-flex items-center gap-2 whitespace-nowrap"
                >
                  {getCheatSheetIcon(sheet.icon)}
                  {sheet.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>{" "}
          <Button
            size="icon"
            className="absolute text-white hover:bg-zinc-800  bg-zinc-900   right-0 top-1/2 z-10 -translate-y-1/2 shadow-md"
            onClick={() => scrollTabs(150)}
          >
            <ChevronRight />
          </Button>
        </div>{" "}
        {activeCategory.cheatSheets.map((sheet) => (
          <TabsContent key={sheet.id} value={sheet.id} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {sheet.snippets.map((snippet) => (
                <Card key={snippet.id} className="h-full flex flex-col">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{snippet.title}</CardTitle>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            size="icon"
                            className=" bg-zinc-900 hover:bg-zinc-800 h-8 w-8"
                          >
                            <Info className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>{snippet.title}</DialogTitle>
                            <DialogDescription>
                              {snippet.description}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="mt-4">
                            <Code language={snippet.language} showLineNumbers>
                              {snippet.code}
                            </Code>
                            <div className="mt-4 text-sm">
                              <h4 className="font-medium mb-2">
                                Example Usage:
                              </h4>
                              <p className="text-muted-foreground">
                                {snippet.language === "bash" &&
                                  "Run this command in your terminal to " +
                                    snippet.description.toLowerCase() +
                                    "."}
                                {snippet.language === "regex" &&
                                  "Use this pattern to match " +
                                    snippet.description.toLowerCase() +
                                    "."}
                                {snippet.language === "css" &&
                                  "Apply these styles to create a consistent design system."}
                              </p>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                    <CardDescription className="text-sm">
                      {snippet.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 mt-auto">
                    <Code language={snippet.language}>{snippet.code}</Code>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
