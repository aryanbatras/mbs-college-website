"use client";

import { useState } from "react";

interface Article {
  title: string;
  date: string;
  category: string;
  content: string;
  image?: string;
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<"articles" | "create">("articles");
  const [article, setArticle] = useState<Article>({
    title: "",
    date: new Date().toISOString().split("T")[0],
    category: "News",
    content: "",
  });
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage("");

    try {
      const response = await fetch("/api/admin/create-article", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(article),
      });

      if (response.ok) {
        setMessage("Article created successfully! It will appear on the website after the next build.");
        setArticle({ title: "", date: new Date().toISOString().split("T")[0], category: "News", content: "" });
      } else {
        setMessage("Error creating article. Please try again.");
      }
    } catch {
      setMessage("Error creating article. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#00274C] text-white py-6">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-2xl font-bold">MBSCET Admin Dashboard</h1>
          <p className="text-white/70 mt-1">Content Management System</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-0">
            <button
              onClick={() => setActiveTab("articles")}
              className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "articles"
                  ? "border-[#FFCB05] text-[#00274C]"
                  : "border-transparent text-gray-500 hover:text-[#00274C]"
              }`}
            >
              Articles
            </button>
            <button
              onClick={() => setActiveTab("create")}
              className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "create"
                  ? "border-[#FFCB05] text-[#00274C]"
                  : "border-transparent text-gray-500 hover:text-[#00274C]"
              }`}
            >
              Create Article
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === "articles" && (
          <div>
            <h2 className="text-xl font-bold text-[#00274C] mb-6">Published Articles</h2>
            <p className="text-gray-600 mb-4">
              Articles are stored as markdown files in <code className="bg-gray-100 px-2 py-1">src/content/news/</code>
            </p>
            <div className="bg-white border border-gray-200 p-6">
              <p className="text-gray-500">
                To manage articles, add markdown files to the <code>src/content/news/</code> directory.
                Each file should have frontmatter with title, date, and category.
              </p>
              <pre className="mt-4 bg-gray-50 p-4 text-sm text-gray-700 overflow-x-auto">
{`---
title: "Article Title"
date: "2024-01-15"
category: "News"
---

Your article content here...`}
              </pre>
            </div>
          </div>
        )}

        {activeTab === "create" && (
          <div>
            <h2 className="text-xl font-bold text-[#00274C] mb-6">Create New Article</h2>
            
            {message && (
              <div className={`p-4 mb-6 ${message.includes("Error") ? "bg-red-50 text-red-700" : "bg-green-50 text-green-700"}`}>
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="bg-white border border-gray-200 p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={article.title}
                  onChange={(e) => setArticle({ ...article, title: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-[#00274C]"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                  <input
                    type="date"
                    value={article.date}
                    onChange={(e) => setArticle({ ...article, date: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-[#00274C]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={article.category}
                    onChange={(e) => setArticle({ ...article, category: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-[#00274C]"
                  >
                    <option value="News">News</option>
                    <option value="Event">Event</option>
                    <option value="Placement">Placement</option>
                    <option value="Achievement">Achievement</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Content (Markdown)</label>
                <textarea
                  value={article.content}
                  onChange={(e) => setArticle({ ...article, content: e.target.value })}
                  rows={12}
                  className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-[#00274C] font-mono text-sm"
                  placeholder="Write your article content in markdown..."
                  required
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={saving}
                  className="px-6 py-2 bg-[#00274C] text-white font-medium hover:bg-[#001a33] transition-colors disabled:opacity-50"
                >
                  {saving ? "Creating..." : "Create Article"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}