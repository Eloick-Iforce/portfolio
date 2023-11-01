import Header from "./components/header";
import Navigation from "./components/nav";
import List from "./components/list";
import Projects from "./components/projects";
import FormComponent from "./components/form";

import { Toaster } from "react-hot-toast";

export default function HomePage() {
  return (
    <main className="min-w-screen scroll-snap-y-mandatory min-h-screen overflow-auto overflow-x-hidden bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <Navigation />
      <div className="scroll-snap-start">
        <Header />
        <List />
        <Projects />
        <FormComponent />
        <Toaster />
      </div>
    </main>
  );
}
