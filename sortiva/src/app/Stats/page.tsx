"use client"
import ThemeSwitch from "@/components/ui/ThemeSwitch";
import React, { useEffect, useState } from "react";
import User from "@/lib/mongodb";

type User = {
    id: number;
    name: string;
    posts: number;
    comments: number;
};

const fetchUsers = async (): Promise<User[]> => {
    const res = await fetch("/api/users");
    if (!res.ok) throw new Error("Failed to fetch users");
    return res.json();
};

const cardStyle: React.CSSProperties = {
    display: "flex",
    gap: 24,
    margin: "24px 0",
};

const statBox: React.CSSProperties = {
    background: "#f5f6fa",
    borderRadius: 12,
    padding: "20px 32px",
    minWidth: 120,
    boxShadow: "0 2px 8px #0001",
    textAlign: "center",
};

const tableStyle: React.CSSProperties = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: 24,
    background: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    boxShadow: "0 1px 4px #0001",
};

const thStyle: React.CSSProperties = {
    background: "#f0f2f5",
    fontWeight: 600,
    padding: 12,
    borderBottom: "1px solid #e0e0e0",
};

const tdStyle: React.CSSProperties = {
    padding: 12,
    borderBottom: "1px solid #f0f0f0",
};

const StatsPage = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUsers()
            .then(setUsers)
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <div style={{ padding: 32, fontSize: 20 }}>Loading...</div>;

    const totalPosts = users.reduce((sum, u) => sum + u.posts, 0);
    const totalComments = users.reduce((sum, u) => sum + u.comments, 0);

    return (
        <div style={{ padding: 32, background: "#f7f9fb", minHeight: "100vh" }}>
            <ThemeSwitch />
            <h1 style={{ fontSize: 32, marginBottom: 8 }}>User Statistics</h1>
            <div style={cardStyle}>
                <div style={statBox}>
                    <div style={{ fontSize: 14, color: "#888" }}>Total Users</div>
                    <div style={{ fontSize: 28, fontWeight: 700 }}>{users.length}</div>
                </div>
                <div style={statBox}>
                    <div style={{ fontSize: 14, color: "#888" }}>Total Posts</div>
                    <div style={{ fontSize: 28, fontWeight: 700 }}>{totalPosts}</div>
                </div>
                <div style={statBox}>
                    <div style={{ fontSize: 14, color: "#888" }}>Total Comments</div>
                    <div style={{ fontSize: 28, fontWeight: 700 }}>{totalComments}</div>
                </div>
            </div>
            <h2 style={{ marginTop: 40, marginBottom: 12 }}>Users</h2>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>Name</th>
                        <th style={thStyle}>Posts</th>
                        <th style={thStyle}>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((u) => (
                        <tr key={u.id} style={{ background: u.id % 2 === 0 ? "#fafbfc" : "#fff" }}>
                            <td style={tdStyle}>{u.name}</td>
                            <td style={tdStyle}>{u.posts}</td>
                            <td style={tdStyle}>{u.comments}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StatsPage;