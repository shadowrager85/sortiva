"use client"
import React from "react";

type Achievement = {
    id: number;
    title: string;
    description: string;
    achieved: boolean;
};

type Reward = {
    id: number;
    name: string;
    description: string;
    obtained: boolean;
};

const achievements: Achievement[] = [
    { id: 1, title: "First Login", description: "Logged in for the first time.", achieved: true },
    { id: 2, title: "Task Master", description: "Completed 10 tasks.", achieved: false },
    { id: 3, title: "Streak Starter", description: "Logged in 7 days in a row.", achieved: false },
];

const rewards: Reward[] = [
    { id: 1, name: "Bronze Badge", description: "Awarded for your first achievement.", obtained: true },
    { id: 2, name: "Silver Badge", description: "Awarded for completing 10 tasks.", obtained: false },
    { id: 3, name: "Gold Badge", description: "Awarded for a 30-day streak.", obtained: false },
];

export default function RewardsPage() {
    return (
        <main
            style={{
                padding: 32,
                fontFamily: "sans-serif",
                background: "#f8fafc",
                minHeight: "100vh",
            }}
        >
            <div
                style={{
                    maxWidth: 500,
                    margin: "0 auto",
                    background: "#fff",
                    borderRadius: 16,
                    boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
                    padding: 32,
                }}
            >
                <h1 style={{ textAlign: "center", marginBottom: 24, color: "#1e293b" }}>
                    🏆 My Achievements
                </h1>
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {achievements.map((a) => (
                        <li
                            key={a.id}
                            style={{
                                marginBottom: 16,
                                padding: 16,
                                borderRadius: 10,
                                background: a.achieved ? "#e0f7e9" : "#f1f5f9",
                                display: "flex",
                                alignItems: "center",
                                gap: 12,
                                border: a.achieved ? "1.5px solid #22c55e" : "1.5px solid #e5e7eb",
                            }}
                        >
                            <span
                                style={{
                                    fontSize: 24,
                                    color: a.achieved ? "#22c55e" : "#94a3b8",
                                }}
                            >
                                {a.achieved ? "✔️" : "⏳"}
                            </span>
                            <div>
                                <div style={{ fontWeight: 600, color: "#334155" }}>{a.title}</div>
                                <div style={{ fontSize: 14, color: "#64748b" }}>{a.description}</div>
                            </div>
                            <span
                                style={{
                                    marginLeft: "auto",
                                    fontWeight: 500,
                                    color: a.achieved ? "#22c55e" : "#94a3b8",
                                }}
                            >
                                {a.achieved ? "Achieved" : "Not achieved"}
                            </span>
                        </li>
                    ))}
                </ul>

                <h2 style={{ marginTop: 40, marginBottom: 20, textAlign: "center", color: "#1e293b" }}>
                    🎁 Available Rewards
                </h2>
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {rewards.map((r) => (
                        <li
                            key={r.id}
                            style={{
                                marginBottom: 16,
                                padding: 16,
                                borderRadius: 10,
                                background: r.obtained ? "#fff7e6" : "#f1f5f9",
                                display: "flex",
                                alignItems: "center",
                                gap: 12,
                                border: r.obtained ? "1.5px solid #fbbf24" : "1.5px solid #e5e7eb",
                            }}
                        >
                            <span
                                style={{
                                    fontSize: 24,
                                    color: r.obtained ? "#fbbf24" : "#94a3b8",
                                }}
                            >
                                {r.obtained ? "🏅" : "🎖️"}
                            </span>
                            <div>
                                <div style={{ fontWeight: 600, color: "#334155" }}>{r.name}</div>
                                <div style={{ fontSize: 14, color: "#64748b" }}>{r.description}</div>
                            </div>
                            <span
                                style={{
                                    marginLeft: "auto",
                                    fontWeight: 500,
                                    color: r.obtained ? "#fbbf24" : "#94a3b8",
                                }}
                            >
                                {r.obtained ? "Obtained" : "Not obtained"}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}