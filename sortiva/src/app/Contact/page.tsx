import React from "react";

export default function ContactPage() {
    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#f4f6fb"
        }}>
            <div style={{
                background: "#fff",
                padding: "2rem 2.5rem",
                borderRadius: "12px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                maxWidth: "400px",
                width: "100%"
            }}>
                <h2 style={{ marginBottom: "1.5rem", color: "#2d3748", textAlign: "center" }}>
                    Contact Us
                </h2>
                <form>
                    <div style={{ marginBottom: "1rem" }}>
                        <label style={{ display: "block", marginBottom: ".5rem", color: "#4a5568" }}>
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            style={{
                                width: "100%",
                                padding: ".75rem",
                                borderRadius: "6px",
                                border: "1px solid #cbd5e1",
                                outline: "none"
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: "1rem" }}>
                        <label style={{ display: "block", marginBottom: ".5rem", color: "#4a5568" }}>
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            style={{
                                width: "100%",
                                padding: ".75rem",
                                borderRadius: "6px",
                                border: "1px solid #cbd5e1",
                                outline: "none"
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: "1.5rem" }}>
                        <label style={{ display: "block", marginBottom: ".5rem", color: "#4a5568" }}>
                            Message
                        </label>
                        <textarea
                            placeholder="How can we help you?"
                            rows={4}
                            style={{
                                width: "100%",
                                padding: ".75rem",
                                borderRadius: "6px",
                                border: "1px solid #cbd5e1",
                                outline: "none",
                                resize: "vertical"
                            }}
                        />
                    </div>
                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            padding: ".75rem",
                            background: "#2563eb",
                            color: "#fff",
                            border: "none",
                            borderRadius: "6px",
                            fontWeight: 600,
                            cursor: "pointer"
                        }}
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}