import React, { useState } from "react";
import { Badge, Button } from "@mantine/core";
import PageHeader from "../common/PageHeader/PageHeader";

interface Document {
  id: number;
  name: string;
  category: string;
  type: string;
  uploadDate: string;
  fileSize: string;
  description: string;
}

const documentsData: Document[] = [
  {
    id: 1,
    name: "NMBA Guidelines 2025-26",
    category: "Guidelines",
    type: "PDF",
    uploadDate: "15/01/2026",
    fileSize: "2.4 MB",
    description:
      "Comprehensive guidelines for implementing NMBA activities at district level.",
  },
  {
    id: 2,
    name: "Activity Reporting Format",
    category: "Templates",
    type: "DOCX",
    uploadDate: "10/01/2026",
    fileSize: "856 KB",
    description:
      "Standard template for reporting activities conducted under NMBA.",
  },
  {
    id: 3,
    name: "Circular - Q1 2026 Targets",
    category: "Circulars",
    type: "PDF",
    uploadDate: "01/01/2026",
    fileSize: "1.2 MB",
    description: "Target allocations and timelines for Q1 2026 activities.",
  },
  {
    id: 4,
    name: "Monthly Progress Report Template",
    category: "Templates",
    type: "XLSX",
    uploadDate: "05/01/2026",
    fileSize: "324 KB",
    description:
      "Excel template for monthly progress reporting to state authorities.",
  },
  {
    id: 5,
    name: "Drug Abuse Statistics 2025",
    category: "Reports",
    type: "PDF",
    uploadDate: "28/12/2025",
    fileSize: "4.8 MB",
    description:
      "National statistics on drug abuse trends and rehabilitation data.",
  },
  {
    id: 6,
    name: "Awareness Material Guidelines",
    category: "Guidelines",
    type: "PDF",
    uploadDate: "20/12/2025",
    fileSize: "3.1 MB",
    description:
      "Guidelines for creating awareness materials including posters, banners, and pamphlets.",
  },
  {
    id: 7,
    name: "Budget Allocation Circular 2026",
    category: "Circulars",
    type: "PDF",
    uploadDate: "15/12/2025",
    fileSize: "980 KB",
    description:
      "Detailed budget allocation for NMBA activities across districts.",
  },
  {
    id: 8,
    name: "Training Module - DNO Onboarding",
    category: "Guidelines",
    type: "PDF",
    uploadDate: "10/12/2025",
    fileSize: "5.6 MB",
    description: "Training module for newly appointed District Nodal Officers.",
  },
];

const categories = ["All", "Guidelines", "Circulars", "Templates", "Reports"];
const typeColors: Record<string, string> = {
  PDF: "red",
  DOCX: "blue",
  XLSX: "green",
};
const typeIcons: Record<string, string> = { PDF: "📄", DOCX: "📝", XLSX: "📊" };

const ImportantDocuments: React.FC = () => {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = documentsData.filter((d) => {
    const matchCategory =
      categoryFilter === "All" || d.category === categoryFilter;
    const matchSearch =
      !search ||
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.description.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div>
      <PageHeader
        title="Important Documents"
        breadcrumbs={[
          { label: "Home", path: "/dashboard" },
          { label: "NMBA Activity" },
          { label: "Important Documents" },
        ]}
      />

      {/* Filters */}
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "8px",
          border: "1px solid #E5E7EB",
          padding: "16px",
          marginBottom: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategoryFilter(c)}
                style={{
                  padding: "6px 16px",
                  borderRadius: "20px",
                  border: "1px solid #E5E7EB",
                  fontSize: "13px",
                  cursor: "pointer",
                  backgroundColor: categoryFilter === c ? "#1A56DB" : "#fff",
                  color: categoryFilter === c ? "#fff" : "#374151",
                  fontWeight: categoryFilter === c ? 600 : 400,
                }}
              >
                {c}
              </button>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#F9FAFB",
              border: "1px solid #E5E7EB",
              borderRadius: "6px",
              padding: "6px 12px",
              width: "280px",
            }}
          >
            <span style={{ color: "#9CA3AF" }}>🔍</span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search documents..."
              style={{
                border: "none",
                background: "none",
                outline: "none",
                fontSize: "13px",
                width: "100%",
                color: "#374151",
              }}
            />
          </div>
        </div>
        <div style={{ fontSize: "12px", color: "#6B7280", marginTop: "8px" }}>
          {filtered.length} documents found
        </div>
      </div>

      {/* Document Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: "16px",
        }}
      >
        {filtered.map((doc) => (
          <div
            key={doc.id}
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              border: "1px solid #E5E7EB",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div style={{ fontSize: "24px" }}>
                  {typeIcons[doc.type] || "📄"}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#111827",
                    }}
                  >
                    {doc.name}
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "#9CA3AF",
                      marginTop: "2px",
                    }}
                  >
                    {doc.fileSize} • {doc.uploadDate}
                  </div>
                </div>
              </div>
              <Badge
                color={typeColors[doc.type] || "gray"}
                variant="light"
                size="sm"
              >
                {doc.type}
              </Badge>
            </div>
            <p
              style={{
                fontSize: "13px",
                color: "#6B7280",
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              {doc.description}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "auto",
              }}
            >
              <Badge color="gray" variant="light" size="sm">
                {doc.category}
              </Badge>
              <Button size="compact-sm" variant="light" color="blue">
                📥 Download
              </Button>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: "center", padding: "60px", color: "#9CA3AF" }}>
          <div style={{ fontSize: "48px", marginBottom: "12px" }}>📂</div>
          <div style={{ fontSize: "16px", fontWeight: 600 }}>
            No documents found
          </div>
          <div style={{ fontSize: "13px", marginTop: "4px" }}>
            Try adjusting your search or filter criteria.
          </div>
        </div>
      )}
    </div>
  );
};

export default ImportantDocuments;
