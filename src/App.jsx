import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { CheatSheetContent } from "@/components/CheatSheetContent";
import { Toaster } from "sonner";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="dev-toolbox-theme">
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <aside className="hidden md:flex w-64 flex-col border-r">
            <Sidebar />
          </aside>
          <main className="flex-1 overflow-y-auto">
            <CheatSheetContent />
          </main>
        </div>
      </div>
      <Toaster />
    </ThemeProvider>
  );
}
export default App;
