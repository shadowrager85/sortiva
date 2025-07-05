"use client";
import React, { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar"; // shadcn calendar
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import  ThemeSwitch  from '@/components/ui/ThemeSwitch';
type WasteEvent = {
    id: number;
    date: string;
    type: string;
};

const wasteTypes = ["Plastic", "Organic", "Paper", "Glass"];

export default function WasteCalendar() {
    const [events, setEvents] = useState<WasteEvent[]>([]);
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [type, setType] = useState(wasteTypes[0]);

    // Fetch events from backend
    useEffect(() => {
        fetch("/api/waste-events")
            .then((res) => res.json())
            .then(setEvents);
    }, []);

    // Add new event
    const handleAdd = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!date) return;
        const res = await fetch("/api/waste-events", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ date: date.toISOString(), type }),
        });
        const newEvent = await res.json();
        setEvents((prev) => [...prev, newEvent]);
        setDate(undefined);
        setType(wasteTypes[0]);
    };

    return (
        <div className="flex flex-col  items-center min-h-screen bg-muted py-10">
            <Card className="w-full bg-white max-w-md shadow-lg ">
                <CardHeader>
                    <ThemeSwitch />
                    <CardTitle className="text-2xl font-bold text-center">Waste Calendar</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleAdd} className="space-y-4">
                        <div>
                            <label className="block mb-1 font-medium">Pick a date</label>
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                className="rounded-md border"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Waste type</label>
                            <Select value={type} onValueChange={setType}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                                <SelectContent>
                                    {wasteTypes.map((t) => (
                                        <SelectItem key={t} value={t}>
                                            {t}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <Button type="submit" className="w-full" disabled={!date}>
                            Add
                        </Button>
                    </form>
                    <div className="mt-8">
                        <h3 className="font-semibold mb-2">Upcoming Waste Events</h3>
                        <ul className="space-y-2">
                            {events.length === 0 && (
                                <li className="text-muted-foreground text-sm">No events yet.</li>
                            )}
                            {events.map((ev) => (
                                <li
                                    key={ev.id}
                                    className="flex items-center justify-between px-3 py-2 rounded bg-accent"
                                >
                                    <span>
                                        {new Date(ev.date).toLocaleDateString(undefined, {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                        })}
                                    </span>
                                    <span className="font-medium">{ev.type}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}