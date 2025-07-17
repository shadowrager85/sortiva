"use client";

import Link from "next/link";
import UserProfile from "@/components/ui/user";
import { SessionProvider } from "next-auth/react";
import ThemeSwitch from "@/components/ui/ThemeSwitch";


const rewards = [
    { id: 1, title: "First Sort", description: "Completed your first waste sorting task.", points: 10 },
    { id: 2, title: "Eco Warrior", description: "Sorted 10kg of waste.", points: 50 },
    { id: 3, title: "Daily Streak", description: "Completed daily tasks for 7 days.", points: 30 },
];

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

export default function PremiumPage() {
    return (
        <>
        <nav className="mb-6">
            {/* Add navigation links or logo here if needed */}
        </nav>
        <div className="max-w-5xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                <div>
                    <ThemeSwitch />
                    <h1 className="text-4xl font-semibold mt-2 mb-1">Premium Dashboard</h1>
                    <p className="mb-2 text-gray-600 dark:text-gray-300">Welcome to your premium dashboard! Enjoy unlimited access to all features.</p>
                </div>
                <SessionProvider>
                    <UserProfile />
                </SessionProvider>
            </div>
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
                <div className="flex flex-col md:flex-row gap-4">
                    <Link href="/Scanner" className="flex-1 flex flex-col items-center justify-center bg-emerald-400 hover:bg-emerald-700 text-white rounded-2xl p-8 shadow-lg transition-colors duration-200 cursor-pointer">
                        <span className="text-xl font-bold">Scan Waste</span>
                    </Link>
                    <Link href="/sort" className="flex-1 flex flex-col items-center justify-center bg-emerald-400 hover:bg-emerald-700 text-white rounded-2xl p-8 shadow-lg transition-colors duration-200 cursor-pointer">
                        <span className="text-xl font-bold">Sort Waste</span>
                    </Link>
                    <Link href="/Learn" className="flex-1 flex flex-col items-center justify-center bg-emerald-400 hover:bg-emerald-700 text-white rounded-2xl p-8 shadow-lg transition-colors duration-200 cursor-pointer">
                        <span className="text-xl font-bold">Learn</span>
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div className="border-2 rounded-2xl p-6 bg-white dark:bg-emerald-900 shadow hover:shadow-emerald-200 transition">
                    <h2 className="font-bold text-xl mb-2 text-emerald-700 dark:text-emerald-300">Total Waste Sorted</h2>
                    <p className="text-3xl font-bold text-emerald-900 dark:text-emerald-100">12 kg</p>
                </div>
                <div className="border-2 rounded-2xl p-6 bg-white dark:bg-emerald-900 shadow hover:shadow-emerald-200 transition">
                    <h2 className="font-bold text-xl mb-2 text-emerald-700 dark:text-emerald-300">Tasks Completed</h2>
                    <p className="text-3xl font-bold text-emerald-900 dark:text-emerald-100">8</p>
                </div>
                <div className="border-2 rounded-2xl p-6 bg-white dark:bg-emerald-900 shadow hover:shadow-emerald-200 transition">
                    <h2 className="font-bold text-xl mb-2 text-emerald-700 dark:text-emerald-300">Points Earned</h2>
                    <p className="text-3xl font-bold text-emerald-900 dark:text-emerald-100">120</p>
                </div>
                <div className="border-2 rounded-2xl p-6 bg-white dark:bg-emerald-900 shadow hover:shadow-emerald-200 transition">
                    <h2 className="font-bold text-xl mb-2 text-emerald-700 dark:text-emerald-300">Leaderboard Rank</h2>
                    <p className="text-3xl font-bold text-emerald-900 dark:text-emerald-100">#5</p>
                </div>
            </div>
            <div className="bg-white dark:bg-emerald-900 rounded-2xl mb-8 shadow p-6"></div>
                <h2 className="text-xl font-semibold mb-4 text-emerald-700 dark:text-emerald-300">Daily Tasks</h2>
                <ul>
                    {dailyTasks.map(task => (
                        <li key={task.id} className="flex items-center mb-3">
                            <input
                                type="checkbox"
                                checked={task.completed}
                                readOnly
                                className="mr-3 accent-emerald-600"
                            />
                            <span className={task.completed ? "line-through text-gray-400 dark:text-gray-500" : "text-gray-700 dark:text-gray-200"}>
                                {task.title}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bg-white dark:bg-emerald-900 rounded-2xl mb-8 shadow p-6">
                <h2 className="text-xl font-semibold mb-4 text-emerald-700 dark:text-emerald-300">Recent Activity</h2>
                <ul>
                    {recentTasks.map(task => (
                        <li key={task.id} className="mb-3 flex flex-col">
                            <span className="font-medium text-gray-700 dark:text-gray-200">{task.title}</span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">{task.date} &middot; {task.status}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-8 bg-white dark:bg-emerald-900 rounded-2xl shadow p-6">
                <h2 className="text-xl font-semibold mb-4 text-emerald-700 dark:text-emerald-300">Rewards</h2>
                <ul>
                    {rewards.map(reward => (
                        <li key={reward.id} className="mb-4 flex items-center">
                            <div className="flex-1">
                                <span className="font-bold text-emerald-700 dark:text-emerald-300">{reward.title}</span>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">{reward.description}</p>
                            </div>
                            <span className="ml-4 bg-emerald-100 dark:bg-emerald-800 text-emerald-700 dark:text-emerald-200 font-bold px-3 py-1 rounded-xl">
                                +{reward.points} pts
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        
        </>
    );
}