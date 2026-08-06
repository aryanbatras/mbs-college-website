"use client";

import dynamic from "next/dynamic";

const PDFViewer = dynamic(
  () => import("@embedpdf/react-pdf-viewer").then((mod) => mod.PDFViewer),
  { ssr: false }
);

interface PdfEmbedProps {
  src: string;
  title?: string;
  height?: string;
}

export function PdfEmbed({ src, title, height = "600px" }: PdfEmbedProps) {
  return (
    <div className="w-full">
      {title && (
        <p className="mb-2 text-sm font-medium text-[#00274C]">{title}</p>
      )}
      <div style={{ height }} className="w-full">
        <PDFViewer
          config={{
            src,
            theme: { preference: "light" },
            disabledCategories: ["annotation", "redaction"],
          }}
        />
      </div>
    </div>
  );
}