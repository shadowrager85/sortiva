"use client"

import Link from "next/link";
import UserProfile from "@/components/ui/user";
import { SessionProvider } from "next-auth/react";

const recentTasks = [
    { id: 1, title: "Sorted 2kg of Plastic", date: "2024-06-10", status: "Completed" },
    { id: 2, title: "Scanned Waste", date: "2024-06-09", status: "Completed" },
    { id: 3, title: "Learned about Composting", date: "2024-06-08", status: "In Progress" },
];

const dailyTasks = [
    { id: 1, title: "Sort today's waste", completed: false },
    { id: 2, title: "Scan new items", completed: true },
    { id: 3, title: "Read a recycling tip", completed: false },
];

export default function Dashboard() {
    return (
        <>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                    <h1 className="text-4xl font-semibold">Dashboard</h1>
                    <p className="mb-2 text-gray-600">Welcome to your dashboard</p>
                </div>
                <SessionProvider>
                    <UserProfile />
                </SessionProvider>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="card border-2 rounded-2xl p-6 bg-white shadow hover:shadow-emerald-200 transition">
                    <h2 className="font-bold text-xl mb-2 text-emerald-700">Total Waste Sorted</h2>
                    <p className="text-3xl font-bold text-emerald-900">12 kg</p>
                </div>
                <div className="card border-2 rounded-2xl p-6 bg-white shadow hover:shadow-emerald-200 transition">
                    <h2 className="font-bold text-xl mb-2 text-emerald-700">Tasks Completed</h2>
                    <p className="text-3xl font-bold text-emerald-900">8</p>
                </div>
                <div className="card border-2 rounded-2xl p-6 bg-white shadow hover:shadow-emerald-200 transition">
                    <h2 className="font-bold text-xl mb-2 text-emerald-700">Points Earned</h2>
                    <p className="text-3xl font-bold text-emerald-900">120</p>
                </div>
            </div>

            {/* Premium Pay Button */}
            <div className="flex justify-end mb-8">
                <button
                    className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-2xl shadow transition"
                    onClick={() => alert("Redirect to premium payment")}
                >
                    Go Premium
                </button>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
                <div className="flex flex-col md:flex-row gap-4">
                    <Link href="/Scanner" className="flex-1 flex flex-col items-center justify-center bg-emerald-400 hover:bg-emerald-700 text-white rounded-2xl p-8 shadow-lg transition cursor-pointer">
                        <span className="text-xl font-bold">Scan Waste</span>
                    </Link>
                    <Link href="/sort" className="flex-1 flex flex-col items-center justify-center bg-emerald-400 hover:bg-emerald-700 text-white rounded-2xl p-8 shadow-lg transition cursor-pointer">
                        <span className="text-xl font-bold">Sort Waste</span>
                    </Link>
                    <Link href="/Learn" className="flex-1 flex flex-col items-center justify-center bg-emerald-400 hover:bg-emerald-700 text-white rounded-2xl p-8 shadow-lg transition cursor-pointer">
                        <span className="text-xl font-bold">Learn</span>
                    </Link>
                    <Link href="/Rewards" className="flex-1 flex flex-col items-center justify-center bg-emerald-400 hover:bg-emerald-700 text-white rounded-2xl p-8 shadow-lg transition cursor-pointer">
                        <span className="text-xl font-bold">Rewards</span>
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Daily Tasks */}
                <div className="bg-white rounded-2xl shadow p-6">
                    <h2 className="text-xl font-semibold mb-4">Daily Tasks</h2>
                    <ul>
                        {dailyTasks.map(task => (
                            <li key={task.id} className="flex items-center mb-3">
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    readOnly
                                    className="mr-3 accent-emerald-600"
                                />
                                <span className={task.completed ? "line-through text-gray-400" : ""}>
                                    {task.title}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Recent Activity */}
                <div className="bg-white rounded-2xl shadow p-6">
                    <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
                    <ul>
                        {recentTasks.map(task => (
                            <li key={task.id} className="mb-3 flex flex-col">
                                <span className="font-medium">{task.title}</span>
                                <span className="text-xs text-gray-500">{task.date} &middot; {task.status}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}