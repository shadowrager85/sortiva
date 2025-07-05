"use client"
import ThemeSwitch from "@/components/ui/ThemeSwitch";
import React, { useState } from "react";

// Simulated backend function
const getDisposalInstructions = async (wasteType: string): Promise<string> => {
    const instructions: Record<string, string> = {
        plastic: "Recycle plastics in the yellow bin.",
        paper: "Recycle paper in the blue bin.",
        glass: "Recycle glass in the green bin.",
        organic: "Compost organic waste.",
        electronics: "Take electronics to a special e-waste facility.",
        default: "Please check local guidelines for disposal instructions.",
    };
    return instructions[wasteType.toLowerCase()] || instructions["default"];
};

const wasteTypes = [
    { label: "Plastic", value: "plastic" },
    { label: "Paper", value: "paper" },
    { label: "Glass", value: "glass" },
    { label: "Organic", value: "organic" },
    { label: "Electronics", value: "electronics" },
];

export default function SortPage() {
    const [wasteType, setWasteType] = useState("");
    const [instructions, setInstructions] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const result = await getDisposalInstructions(wasteType);
        setInstructions(result);
        setLoading(false);
    };

    return (
        <main
            style={{
                maxWidth: 520,
                margin: "3rem auto",
                fontFamily: "Inter, sans-serif",
                background: "#030c06",
                borderRadius: 12,
                boxShadow: "0 4px 24px rgba(155, 239, 185, 0.08)",
                padding: "2.5rem 2rem",
            }}
        >
            <h1 style={{ textAlign: "center", marginBottom: 24, color: "#e4f6eb" }}>
                <ThemeSwitch />
                🗑️ Waste Sorting Helper
            </h1>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <label style={{ fontWeight: 500, color: "#374151" }}>
                    Select or enter type of waste:
                    <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                        <select
                            value={wasteType}
                            onChange={e => setWasteType(e.target.value)}
                            style={{
                                flex: 1,
                                padding: "8px 12px",
                                borderRadius: 6,
                                border: "1px solid #d1d5db",
                                fontSize: 16,
                                background: "#f9fafb",
                            }}
                        >
                            <option value="">-- Choose waste type --</option>
                            {wasteTypes.map(w => (
                                <option key={w.value} value={w.value}>
                                    {w.label}
                                </option>
                            ))}
                        </select>
                        <input
                            type="text"
                            value={wasteType}
                            onChange={e => setWasteType(e.target.value)}
                            placeholder="Or type here..."
                            style={{
                                flex: 1,
                                padding: "8px 12px",
                                borderRadius: 6,
                                border: "1px solidrgb(58, 126, 227)",
                                fontSize: 16,
                                background: "#f9fafb",
                            }}
                        />
                    </div>
                </label>
                <button
                    type="submit"
                    disabled={!wasteType || loading}
                    style={{
                        background: "#2ac05c",
                        color: "#e4f6eb",
                        padding: "10px 0",
                        border: "none",
                        borderRadius: 6,
                        fontWeight: 600,
                        fontSize: 17,
                        cursor: loading ? "not-allowed" : "pointer",
                        transition: "background 0.2s",
                        boxShadow: "0 2px 8px rgba(38, 198, 193, 0.08)",
                    }}
                >
                    {loading ? "Loading..." : "Get Instructions"}
                </button>
            </form>
            {instructions && !loading && (
                <div
                    style={{
                        marginTop: 28,
                        padding: "18px 16px",
                        background: "#f1f5f9",
                        borderRadius: 8,
                        borderLeft: "5px solidrgb(37, 235, 189)",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                    }}
                >
                    <strong style={{ color: "#2ac05c" }}>Disposal Instructions:</strong>
                    <p style={{ margin: "8px 0 0", color: "#405372", fontSize: 17 }}>{instructions}</p>
                </div>
            )}
        </main>
    );
}