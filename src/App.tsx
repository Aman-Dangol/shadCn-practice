import { useState } from "react";
import { Calendar } from "./components/ui/calendar";
import { Card } from "./components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "./components/ui/tabs";
import { ChevronRight, GitForkIcon, QrCode } from "lucide-react";

function App() {
  const [date, setDate] = useState<Date | undefined>();

  return (
    <Card className="w-[70vh] mx-auto bg-primary text-foreground border-0 p-2 ">
      <header className="p-4  flex justify-between items-center ">
        <h3 className="capitalize">settings</h3>
        <h5 className={`capitalize`}>logoout</h5>
      </header>
      <hr className="opacity-50" />
      <Calendar mode="single" selected={date} onSelect={setDate} />
      <article className="p-4">
        <h5>Workout level</h5>
        <p>We use basic workout assessment</p>
      </article>

      <Tabs className="" defaultValue="Beginner">
        <TabsList className=" bg-background w-full justify-between">
          <TabsTrigger value="Beginner">Beginner</TabsTrigger>
          <TabsTrigger value="Intermediate">Intermediate</TabsTrigger>
          <TabsTrigger value="Advanced">Advanced </TabsTrigger>
        </TabsList>
      </Tabs>
      <Card className="my-4 p-2 pr-4 rounded-3xl flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <QrCode className="rounded-full p-2 bg-gray-400/50" size={35} />
          <p className="text-sm">Your FitUp QR code</p>
        </div>
        <ChevronRight size={15} />
      </Card>
      <Card className="my-4 p-2 pr-4 rounded-3xl flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <GitForkIcon className="rounded-full p-2 bg-gray-400/50" size={35} />
          <p className="text-sm">Add fit up to your socials</p>
        </div>
        <ChevronRight size={15} />
      </Card>
    </Card>
  );
}

export default App;
