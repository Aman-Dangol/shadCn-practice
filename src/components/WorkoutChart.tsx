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
    calories: Math.floor(Math.random() * 1000 + 200),
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
    <ChartContainer config={chartConfig} className="mt-10">
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 10,
          right: 10,
          top: 20,
        }}
      >






        <XAxis
          dataKey={"day"}
          tickMargin={8}
          tickFormatter={(value) => value}
        />
        <YAxis dataKey={"calories"} />
        <Tooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Line
          dataKey="calories"
          type="natural"
          stroke="#fff"
          strokeWidth={4}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
}
