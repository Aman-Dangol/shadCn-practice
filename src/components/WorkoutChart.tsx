import {
  type ChartConfig,
  ChartContainer,
  ChartTooltipContent,
} from "./ui/chart";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

import { WORKOUT_VOLUME } from "@/constants/workout";
const chartData: { day: number; calories: number }[] = [];

WORKOUT_VOLUME.forEach((_, key) => {
  chartData.push({
    day: key,
    calories: Math.floor(Math.random() * (4000 - 2000 + 1) + 2000),
  });
});

console.log(chartData);

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#fff",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export default function WorkoutChart() {
  return (
    <>
      <h3 className="p-4 ">Calories spent </h3>
      <ChartContainer config={chartConfig} className=" h-[200px] w-full ">
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 10,
            right: 10,
            top: 10,
          }}
        >
          <XAxis
            dataKey={"day"}
            tickMargin={8}
            tickFormatter={(value) => value}
          />
          <YAxis dataKey={"calories"} tickCount={3} />
          <Tooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Line
            dataKey="calories"
            type="natural"
            stroke="#fff"
            strokeWidth={3}
          />
        </LineChart>
      </ChartContainer>
    </>
  );
}
