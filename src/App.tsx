import { useState } from "react";
import { Calendar } from "./components/ui/calendar";
import { Card } from "./components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "./components/ui/tabs";
import { ChevronRight, GitForkIcon, QrCode, Smile } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";
import { WORKOUT_VOLUME } from "./constants/workout";

function App() {
  const [date, setDate] = useState<Date | undefined>();

  return (
    <Card className="w-[70vh] mx-auto bg-primary text-foreground border-0 p-4 ">
      <header className="p-4  flex justify-between items-center ">
        <h3 className="capitalize">settings</h3>
        <h5 className={`capitalize text-sm  `}>logoout</h5>
      </header>
      <hr className="opacity-50" />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        data={WORKOUT_VOLUME}
        
      />
      <article className="p-4">
        <h5>Workout level</h5>
        <p className="opacity-50">We use basic workout assessment</p>
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
      <Card className="my-4 p-2 pr-4 rounded-3xl flex flex-col  justify-between gap-2">
        <Card className="flex gap-2">
          <span className="p-2 border-white/50 border-[0.5px] text-xs rounded-full">
            Body Metrics
          </span>
          <Smile
            className="rounded-full bg-gray-400/50 p-2 justify-center"
            size={35}
          />
        </Card>
        <Card>
          <h3>220 pounds</h3>
          <Card className="flex justify-between text-xs text-white/50 ">
            <span>Current weight</span>
            <span>Target weight: 190lbs</span>
          </Card>
        </Card>
      </Card>
      {/* progress bar */}
      <Card className="p-2 py-1 rounded-3xl">
        <Card className="w-[86%] h-[0.7rem] rgbBar relative">
          <Separator
            orientation="vertical"
            className=" absolute left-[25%] border-2 h-full border-[#52555a]"
          ></Separator>
          <Separator
            orientation="vertical"
            className=" absolute left-[50%] border-2 h-full border-[#52555a]"
          ></Separator>
          <Separator
            orientation="vertical"
            className=" absolute left-[75%] border-2 h-full border-[#52555a]"
          ></Separator>
        </Card>
      </Card>
    </Card>
  );
}

export default App;
