import * as React from "react";

import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

type extraProps = {
  data: Map<number, string>;
};

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  data,
  ...props
}: CalendarProps & extraProps) {
  const thin: Date[] = [];
  const heavy: Date[] = [];
  const medium: Date[] = [];
  Array.from(data.keys()).map((day) => {
    switch (data.get(day)) {
      case "light":
        thin.push(
          new Date(new Date().getFullYear(), new Date().getMonth(), day)
        );
        break;
      case "heavy":
        heavy.push(
          new Date(new Date().getFullYear(), new Date().getMonth(), day)
        );
        break;
      case "medium":
        medium.push(
          new Date(new Date().getFullYear(), new Date().getMonth(), day)
        );
        break;
    }
  });

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      modifiers={{
        thin: thin,
        heavy: heavy,
        medium: medium,
      }}
      modifiersClassNames={{
        thin: " bg-white w-4 h-4  text-white overflow-hidden hover:bg-white ",
        heavy: "bg-white h-8 w-8 overflow=hidden text-white hover:bg-white",
        medium: "bg-white text-white w-6 h-6 overflow=hidden hover:bg-white",
      }}
      className={cn("p-3 border-none ", className)}
      classNames={{
        months:
          "flex flex-col justify-between items-center w sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4  w-full",
        caption: "flex justify-center items-center pt-1 relative items-center ",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center justify-between ",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1 hidden",
        nav_button_next: "absolute right-1 hidden",
        table: "w-full  border-collapse space-y-1  ",
        head_row: "",
        head_cell:
          "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        row: "",
        cell: cn(
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8  p-0 font-normal aria-selected:opacity-100 rounded-full hover:bg-green-400 hover:text-foreground block mx-auto   "
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected:
          "bg-green-600 rounded-full hover:bg-green-600 text-white  ",
        day_outside: "opacity-50",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
