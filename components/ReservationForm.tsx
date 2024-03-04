import { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const ReservationForm = () => {
  const [date, setDate] = useState<Date>();

  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
    >
      <form className="flex flex-col gap-y-10">
        <div className="grid gap-[30px]">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
            <div>
              <Label htmlFor="firstname">First Name</Label>
              <Input id="firstname" type="text" className="bg-white" />
            </div>
            <div>
              <Label htmlFor="lastname">First Name</Label>
              <Input id="lastname" type="text" className="bg-white" />
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
            <div>
              <Label>date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="default"
                    className={cn(
                      "w-full justify-start text-left font-normal bg-white text-black hover:bg-white",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-white">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <Label>person</Label>
              <Select>
                <SelectTrigger className="w-full bg-white">
                  <SelectValue placeholder="How many people?" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectGroup>
                    <SelectLabel>People</SelectLabel>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <Button
          variant="default2"
          className="uppercase w-full xl:w-auto xl:self-end"
        >
          Book a table
        </Button>
      </form>
    </motion.section>
  );
};

export default ReservationForm;
