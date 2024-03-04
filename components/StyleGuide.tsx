"use client";

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
import Link from "next/link";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const StyleGuide = () => {
  const [date, setDate] = useState<Date>();

  return (
    <>
      <div className="flex flex-col gap-y-4 p-24">
        <h1>heading 1</h1>
        <h2>heading 2</h2>
        <h3>heading 3</h3>
        <p>ajfiewajfoije;of ajfoeiwajfio vaeoivejaovj vjeoijveoijv;ioerj</p>
        <div className="bg-black p-24 flex flex-col gap-y-4">
          <Link href="/">Link</Link>
          <Button variant="default2">Let&apos;s Go</Button>
          <Button variant="orange">Let&apos;s Go</Button>
          <Button variant="input">Let&apos;s Go</Button>
          <div>
            <Label htmlFor="firstname">First Name</Label>
            <Input
              className="bg-white"
              //   className="bg-white/10 text-white border-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange"
              type="firstname"
              id="firstname"
            />
          </div>
          <div>
            <Label htmlFor="lastname">Last Name</Label>
            <Input
              className="bg-white"
              //   className="bg-white/10 text-white border-white/10"
              type="lastname"
              id="lastname"
            />
          </div>
          <div>
            <Label htmlFor="lastname">Date</Label>
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
            <Label>Select</Label>
            <Select>
              <SelectTrigger className="w-full bg-white">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </>
  );
};

export default StyleGuide;
