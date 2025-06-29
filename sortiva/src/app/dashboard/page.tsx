"use client"

import Link from "next/link";
import UserProfile from "@/components/ui/user";
import { SessionProvider } from "next-auth/react";
export default function Dashboard (){
return (  
<>

<div>
    <h1 className="text-4xl font-semibold">Dashboard</h1>
    <p className="mb-4">Welcome to your dashboard</p>
</div>
<SessionProvider>
<UserProfile />
</SessionProvider>
<div className="flex flex-row space-x-4 mb-6">
    <div className="card border-2 rounded-2xl p-4 flex-1">
        <h1 className="font-bold text-2xl">Total Waste Sorted</h1>
        <p className="text-2xl font-bold">0 kg</p>
    </div>
    <div className="card border-2 rounded-2xl p-4 flex-1">
        <h1 className="font-bold text-2xl">Total Waste Sorted</h1>
        <p className="text-2xl font-bold">0 kg</p>
    </div>
    <div className="card border-2 rounded-2xl p-4 flex-1">
        <h1 className="font-bold text-2xl">Total Waste Sorted</h1>
        <p className="text-2xl font-bold">0 kg</p>
    </div>
</div>
<div className="Quick Actions mb-6">
    <h1 className="mb-2">Quick Actions</h1>
    <div className="flex flex-row space-x-4">
                <div className="btn flex flex-col flex-1 bg-emerald-400 w-96 h-48 rounded-2xl p-10 m-2 items-center justify-center cursor-pointer hover:bg-emerald-800 shadow-2xl transition-all duration-300 hover:shadow-emerald-600 ">
            <div className="icon mb-2"></div>
            <Link href="/Scanner" className="text-2xl font-bold">Scan Waste</Link>
        </div>
                <div className="btn flex flex-col flex-1 bg-emerald-400 w-96 h-48 rounded-2xl p-10 m-2 items-center justify-center cursor-pointer hover:bg-emerald-800 shadow-2xl transition-all duration-300 hover:shadow-emerald-600 ">
            <div className="icon mb-2"></div>
            <Link href="/sort" className="text-2xl font-bold">Sort Waste</Link>
        </div>
                <div className="btn flex flex-col flex-1 bg-emerald-400 w-96 h-48 rounded-2xl p-10 m-2 items-center justify-center cursor-pointer hover:bg-emerald-800 shadow-2xl transition-all duration-300 hover:shadow-emerald-600 ">
            <div className="icon mb-2"></div>
            <Link href="/Learn" className="text-2xl font-bold">Learn </Link>
        </div>
    </div>
    <div className="task">
        <h1>Recent Activity</h1>

    </div>
    </div>
</>
);
}