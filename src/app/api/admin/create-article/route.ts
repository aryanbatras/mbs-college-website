import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const NEWS_DIR = path.join(process.cwd(), "src/content/news");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, date, category, content } = body;

    if (!title || !date || !content) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Create filename from date and title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    const filename = `${date}-${slug}.md`;
    const filepath = path.join(NEWS_DIR, filename);

    // Create frontmatter
    const frontmatter = `---\ntitle: "${title}"\ndate: "${date}"\ncategory: "${category}"\n---\n\n`;

    // Write file
    fs.writeFileSync(filepath, frontmatter + content, "utf-8");

    return NextResponse.json({ 
      success: true, 
      message: "Article created successfully",
      filename 
    });
  } catch (error) {
    console.error("Error creating article:", error);
    return NextResponse.json({ error: "Failed to create article" }, { status: 500 });
  }
}
