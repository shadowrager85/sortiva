"use client"
import React, { useEffect, useState, FormEvent } from "react";

// Simulated backend (in-memory)
const leaderboardData: { name: string; score: number }[] = [
    { name: "Alice", score: 120 },
    { name: "Bob", score: 100 },
    { name: "Charlie", score: 80 },
];

// Simulate backend API
const fetchLeaderboard = async () => {
    return new Promise<typeof leaderboardData>((resolve) =>
        setTimeout(() => resolve([...leaderboardData]), 300)
    );
};

const addScore = async (name: string, score: number) => {
    leaderboardData.push({ name, score });
    leaderboardData.sort((a, b) => b.score - a.score);
    return new Promise<void>((resolve) => setTimeout(resolve, 300));
};

export default function LeaderboardPage() {
    const [leaderboard, setLeaderboard] = useState<
        { name: string; score: number }[]
    >([]);
    const [name, setName] = useState("");
    const [score, setScore] = useState<number>(0);
    const [loading, setLoading] = useState(false);

    const loadLeaderboard = async () => {
        setLoading(true);
        const data = await fetchLeaderboard();
        setLeaderboard(data);
        setLoading(false);
    };

    useEffect(() => {
        loadLeaderboard();
    }, []);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!name || score < 0) return;
        setLoading(true);
        await addScore(name, score);
        await loadLeaderboard();
        setName("");
        setScore(0);
        setLoading(false);
    };

    return (
        <div
            style={{
                maxWidth: 420,
                margin: "2rem auto",
                fontFamily: "Inter, sans-serif",
                background: "#f8fafc",
                borderRadius: 16,
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                padding: "2rem",
            }}
        >
            <h1
                style={{
                    textAlign: "center",
                    fontWeight: 800,
                    fontSize: "2rem",
                    marginBottom: "1.5rem",
                    color: "#2563eb",
                    letterSpacing: 1,
                }}
            >
                🏆 Leaderboard
            </h1>
            <form
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    gap: 8,
                    marginBottom: "1.5rem",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    required
                    maxLength={16}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                        padding: "0.5rem 1rem",
                        borderRadius: 8,
                        border: "1px solid #d1d5db",
                        fontSize: 16,
                        outline: "none",
                        flex: 1,
                        background: "#fff",
                    }}
                />
                <input
                    type="number"
                    placeholder="Score"
                    value={score}
                    required
                    min={0}
                    onChange={(e) => setScore(Number(e.target.value))}
                    style={{
                        padding: "0.5rem 1rem",
                        borderRadius: 8,
                        border: "1px solid #d1d5db",
                        fontSize: 16,
                        width: 90,
                        background: "#fff",
                    }}
                />
                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        padding: "0.5rem 1.2rem",
                        borderRadius: 8,
                        border: "none",
                        background: "#2563eb",
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: 16,
                        cursor: loading ? "not-allowed" : "pointer",
                        transition: "background 0.2s",
                        boxShadow: "0 2px 8px rgba(37,99,235,0.08)",
                    }}
                >
                    Add
                </button>
            </form>
            {loading ? (
                <div style={{ textAlign: "center", color: "#64748b" }}>
                    Loading...
                </div>
            ) : (
                <ol
                    style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                    }}
                >
                    {leaderboard.map((entry, idx) => (
                        <li
                            key={idx}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                background:
                                    idx === 0
                                        ? "#fef9c3"
                                        : idx === 1
                                        ? "#e0e7ff"
                                        : idx === 2
                                        ? "#f1f5f9"
                                        : "#fff",
                                borderRadius: 8,
                                marginBottom: 8,
                                padding: "0.75rem 1rem",
                                fontWeight: idx < 3 ? 700 : 500,
                                fontSize: idx === 0 ? 20 : 17,
                                border:
                                    idx < 3
                                        ? "2px solid #2563eb"
                                        : "1px solid #e5e7eb",
                                boxShadow:
                                    idx < 3
                                        ? "0 2px 8px rgba(37,99,235,0.06)"
                                        : undefined,
                            }}
                        >
                            <span>
                                <span
                                    style={{
                                        fontWeight: 900,
                                        color:
                                            idx === 0
                                                ? "#f59e42"
                                                : idx === 1
                                                ? "#6366f1"
                                                : idx === 2
                                                ? "#64748b"
                                                : "#334155",
                                        marginRight: 12,
                                    }}
                                >
                                    {idx + 1}
                                </span>
                                {entry.name}
                            </span>
                            <span
                                style={{
                                    fontWeight: 700,
                                    color: "#2563eb",
                                    fontSize: 18,
                                }}
                            >
                                {entry.score}
                            </span>
                        </li>
                    ))}
                </ol>
            )}
        </div>
    );
}