"use client";

import { motion } from "motion/react";

interface Column<T> {
  key: string;
  label: string;
  className?: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  caption?: string;
  highlightFirstRow?: boolean;
}

export function DataTable<T extends Record<string, unknown>>({
  columns,
  data,
  caption,
  highlightFirstRow = false,
}: DataTableProps<T>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="overflow-x-auto"
    >
      <table className="w-full text-sm">
        {caption && (
          <caption className="text-left text-xs font-medium tracking-wider uppercase text-ink-muted mb-4">
            {caption}
          </caption>
        )}
        <thead>
          <tr className="border-b border-line">
            {columns.map((col) => (
              <th
                key={col.key}
                className={`text-left py-3 px-4 font-medium text-ink-muted ${col.className || ""}`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={i}
              className={`border-b border-line last:border-0 transition-colors hover:bg-ink/[0.02] ${
                highlightFirstRow && i === 0 ? "bg-accent/5" : ""
              }`}
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={`py-3 px-4 ${col.className || ""}`}
                >
                  {col.render
                    ? col.render(row[col.key] as T[keyof T], row)
                    : String(row[col.key] ?? "")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}

// Fee structure table
export function FeeStructureTable() {
  const feeData = [
    { program: "B.E. Computer Science", duration: "4 Years", totalFee: "₹2,40,000", seats: 60 },
    { program: "B.E. Information Technology", duration: "4 Years", totalFee: "₹2,40,000", seats: 60 },
    { program: "B.E. Electronics & Communication", duration: "4 Years", totalFee: "₹2,40,000", seats: 60 },
    { program: "B.E. Electrical Engineering", duration: "4 Years", totalFee: "₹2,40,000", seats: 30 },
    { program: "B.E. Mechanical Engineering", duration: "4 Years", totalFee: "₹2,40,000", seats: 30 },
    { program: "B.E. Civil Engineering", duration: "4 Years", totalFee: "₹2,40,000", seats: 30 },
    { program: "B.E. AI & Machine Learning", duration: "4 Years", totalFee: "₹2,40,000", seats: 30 },
    { program: "MCA", duration: "3 Years", totalFee: "₹1,80,000", seats: 60 },
  ];

  const columns: Column<typeof feeData[number]>[] = [
    { key: "program", label: "Program" },
    { key: "duration", label: "Duration" },
    { key: "totalFee", label: "Total Fee", className: "text-right" },
    { key: "seats", label: "Seats", className: "text-right" },
  ];

  return (
    <DataTable
      columns={columns}
      data={feeData}
      caption="Fee Structure (2024-25)"
    />
  );
}

// Program comparison table
export function ProgramComparisonTable() {
  const programs = [
    { name: "CSE", intake: 60, labs: 8, placements: "95%", avgPackage: "₹4.5 LPA" },
    { name: "IT", intake: 60, labs: 6, placements: "90%", avgPackage: "₹4.2 LPA" },
    { name: "ECE", intake: 60, labs: 7, placements: "85%", avgPackage: "₹4.0 LPA" },
    { name: "EE", intake: 30, labs: 5, placements: "80%", avgPackage: "₹3.8 LPA" },
    { name: "ME", intake: 30, labs: 6, placements: "75%", avgPackage: "₹3.5 LPA" },
    { name: "Civil", intake: 30, labs: 4, placements: "70%", avgPackage: "₹3.2 LPA" },
    { name: "AI&ML", intake: 30, labs: 5, placements: "92%", avgPackage: "₹4.8 LPA" },
    { name: "MCA", intake: 60, labs: 4, placements: "88%", avgPackage: "₹4.0 LPA" },
  ];

  const columns: Column<typeof programs[number]>[] = [
    { key: "name", label: "Program" },
    { key: "intake", label: "Intake", className: "text-right" },
    { key: "labs", label: "Labs", className: "text-right" },
    { key: "placements", label: "Placements", className: "text-right" },
    { key: "avgPackage", label: "Avg Package", className: "text-right" },
  ];

  return (
    <DataTable
      columns={columns}
      data={programs}
      caption="Program Comparison"
      highlightFirstRow
    />
  );
}
