"use client"
import React, { useState, useEffect } from "react";

// src/app/Settings/page.tsx

type Settings = {
    theme: string;
    notifications: boolean;
};

export default function SettingsPage() {
    const [settings, setSettings] = useState<Settings>({
        theme: "light",
        notifications: true,
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState<string | null>(null);

    useEffect(() => {
        fetch("/api/settings")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch settings");
                return res.json();
            })
            .then((data) => {
                setSettings(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const target = e.target as HTMLInputElement | HTMLSelectElement;
        const { name, type, value } = target;
        const checked = (target as HTMLInputElement).checked;
        setSettings((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSave = async () => {
        setSaving(true);
        setMessage(null);
        try {
            const response = await fetch("/api/settings", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(settings),
            });
            if (!response.ok) throw new Error("Failed to save settings");
            setMessage("Settings saved!");
        } catch (error) {
            setMessage("Error saving settings.");
            console.error(error);
        } finally {
            setSaving(false);
        }
    };

    if (loading) return (
        <div style={{
            display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"
        }}>
            <div className="spinner" />
            <span style={{ marginLeft: 12 }}>Loading...</span>
            <style>{`
                .spinner {
                    width: 24px;
                    height: 24px;
                    border: 3px solid #eee;
                    border-top: 3px solid #0070f3;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }
                @keyframes spin {
                    0% { transform: rotate(0deg);}
                    100% { transform: rotate(360deg);}
                }
            `}</style>
        </div>
    );

    return (
        <div style={{
            maxWidth: 420,
            margin: "3rem auto",
            background: "#fff",
            borderRadius: 12,
            boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
            padding: "2rem"
        }}>
            <h2 style={{ textAlign: "center", marginBottom: 24 }}>Settings</h2>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    handleSave();
                }}
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
            >
                <div>
                    <label htmlFor="theme" style={{ fontWeight: 500, marginBottom: 6, display: "block" }}>
                        Theme
                    </label>
                    <select
                        id="theme"
                        name="theme"
                        value={settings.theme}
                        onChange={handleChange}
                        style={{
                            width: "100%",
                            padding: "8px 12px",
                            borderRadius: 6,
                            border: "1px solid #ccc",
                            fontSize: 16
                        }}
                    >
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                        type="checkbox"
                        id="notifications"
                        name="notifications"
                        checked={settings.notifications}
                        onChange={handleChange}
                        style={{ marginRight: 10, accentColor: "#0070f3" }}
                    />
                    <label htmlFor="notifications" style={{ fontWeight: 500 }}>
                        Enable Notifications
                    </label>
                </div>
                <button
                    type="submit"
                    disabled={saving}
                    style={{
                        background: "#0070f3",
                        color: "#fff",
                        border: "none",
                        borderRadius: 6,
                        padding: "10px 0",
                        fontSize: 16,
                        fontWeight: 600,
                        cursor: saving ? "not-allowed" : "pointer",
                        opacity: saving ? 0.7 : 1,
                        marginTop: 10
                    }}
                >
                    {saving ? "Saving..." : "Save"}
                </button>
                {message && (
                    <div style={{
                        marginTop: 8,
                        color: message === "Settings saved!" ? "#0070f3" : "#d32f2f",
                        textAlign: "center",
                        fontWeight: 500
                    }}>
                        {message}
                    </div>
                )}
            </form>
        </div>
    );
}