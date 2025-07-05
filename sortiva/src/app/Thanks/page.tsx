import Link from "next/link";
import React from "react";

export default function ThanksPage() {
    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)",
            fontFamily: "Segoe UI, sans-serif"
        }}>
            <div style={{
                background: "#fff",
                padding: "2.5rem 2rem",
                borderRadius: "1.25rem",
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                textAlign: "center",
                maxWidth: 400,
                width: "100%"
            }}>
                <svg width="64" height="64" fill="none" viewBox="0 0 64 64" style={{marginBottom: 24}}>
                    <circle cx="32" cy="32" r="32" fill="#e0eafc"/>
                    <path d="M20 34l8 8 16-16" stroke="#4f8cff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h1 style={{fontSize: "2rem", margin: "0 0 0.5rem 0", color: "#2d3a4a"}}>Thank You!</h1>
                <p style={{fontSize: "1.1rem", color: "#4f5d75", marginBottom: "1.5rem"}}>
                    Your submission has been received.<br />
                    We appreciate your feedback!
                </p>
                <Link href="/" 
                    style={{
                        display: "inline-block",
                        padding: "0.75rem 1.5rem",
                        background: "#4f8cff",
                        color: "#fff",
                        borderRadius: "0.5rem",
                        textDecoration: "none",
                        fontWeight: 500,
                        transition: "background 0.2s"
                    }}
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
}