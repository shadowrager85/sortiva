"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
// Simulated backend API (would be in /api/articles in a real app)
const fetchArticles = async () => {
  // Simulate fetching from backend
  return [
    
    {
      id: 1,
      title: "What is Environmental Conservation?",
      content:
        "Environmental conservation is the protection, preservation, management, or restoration of natural environments and the ecological communities that inhabit them.",
    },
    
    {
      id: 2,
      title: "How Sortiva Helps",
      content:
        "Sortiva is a platform dedicated to promoting sustainable waste management and recycling, making it easier for communities to reduce their environmental impact.",
    },
    {
      id: 3,
      title: "Simple Ways to Conserve the Environment",
      content:
        "Reduce, reuse, recycle, save energy, and support eco-friendly initiatives in your community.",
    },
  ];
};

type Article = {
  id: number;
  title: string;
  content: string;
};

const LearnPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles().then((data) => {
      setArticles(data);
      setLoading(false);
    });
  }, []);

  return (
    <main
      style={{
        maxWidth: 800,
        margin: "2rem auto",
        padding: "2rem",
        borderRadius: 16,
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: 8, color: "#256029" }}>
        📖 Learn More
      </h1>
      <p style={{ color: "rgba(117, 130, 152)", fontSize: "1.15rem", marginBottom: 32 }}>
        Explore articles about <b>environmental conservation</b> and how <b>Sortiva</b> is making a difference.
      </p>
      {loading ? (
        <div style={{ textAlign: "center", color: "rgb(33, 186, 145)", fontSize: "1.1rem" }}>
          <span className="loader" style={{
            display: "inline-block",
            width: 24,
            height: 24,
            border: "3px solidrgb(117, 133, 159)",
            borderTop: "3px solid #256029",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
            marginRight: 8,
            verticalAlign: "middle"
          }} />
  
          Loading articles...
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg);}
              100% { transform: rotate(360deg);}
            }
          `}</style>
        </div>
      ) : (
        <section>
          {articles.map((article) => (
            <article
              key={article.id}
              style={{
                background: " ",
                borderRadius: 12,
                boxShadow: "0 2px 8px rgba(34, 139, 34, 0.1)",
                marginBottom: "2rem",
                padding: "1.5rem 1.5rem 1rem 1.5rem",
                borderLeft: "6px solid rgba(117, 130, 152)",
                transition: "box-shadow 0.2s",
              }}
            >
              <h2 style={{ color: "#256029", marginBottom: 8, fontSize: "1.35rem" }}>
                {article.title}
              </h2>
              <p style={{ color: "rgba(117, 130, 152)", lineHeight: 1.7 }}>{article.content}</p>
              <Link href="/learn-more">
               <button className="rounded-md px-6 py-3 border-2 border-green-600 text-green-600 dark:text-green-400 bg-white dark:bg-gray-800 hover:bg-green-600 hover:text-white transition w-full sm:w-auto">Learn More</button>
              </Link>          
            </article>
          ))}
        </section>
      )}
    </main>
  );
};

export default LearnPage;