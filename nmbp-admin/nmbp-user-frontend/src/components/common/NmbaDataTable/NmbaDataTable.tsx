import React, { ReactNode } from "react";

export interface Column<T> {
    key: string;
    label: string;
    width?: string;
    render?: (item: T, index: number) => ReactNode;
}

interface Props<T> {
    columns: Column<T>[];
    data: T[];
    totalRecords: number;
    page: number;
    pageSize: number;
    onPageChange: (page: number) => void;
    onPageSizeChange: (size: string | null) => void;
    searchValue?: string;
    onSearchChange?: (val: string) => void;
    searchPlaceholder?: string;
    exportButton?: boolean;
}

function NmbaDataTable<T extends Record<string, unknown>>({ columns, data, totalRecords, page, pageSize, onPageChange, onPageSizeChange, searchValue, onSearchChange, searchPlaceholder, exportButton }: Props<T>) {
    const totalPages = Math.ceil(totalRecords / pageSize);

    return (
        <div style={{ backgroundColor: "#fff", borderRadius: "12px", border: "1px solid #E5E7EB", marginTop: "16px" }}>
            {/* Toolbar */}
            <div style={{ padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #F3F4F6" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", backgroundColor: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: "6px", padding: "6px 12px", width: "280px" }}>
                    <span style={{ color: "#9CA3AF" }}>🔍</span>
                    <input
                        type="text"
                        value={searchValue || ""}
                        onChange={(e) => onSearchChange?.(e.target.value)}
                        placeholder={searchPlaceholder || "Search..."}
                        style={{ border: "none", background: "none", outline: "none", fontSize: "13px", width: "100%", color: "#374151" }}
                    />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    {exportButton && (
                        <button style={{ padding: "6px 14px", border: "1px solid #E5E7EB", borderRadius: "6px", fontSize: "12px", backgroundColor: "#fff", cursor: "pointer", color: "#374151" }}>
                            📥 Export
                        </button>
                    )}
                    <select
                        value={pageSize}
                        onChange={(e) => onPageSizeChange(e.target.value)}
                        style={{ border: "1px solid #E5E7EB", borderRadius: "6px", padding: "6px 8px", fontSize: "12px", color: "#374151" }}
                    >
                        {[10, 25, 50].map((s) => <option key={s} value={s}>{s} / page</option>)}
                    </select>
                </div>
            </div>

            {/* Table */}
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr style={{ backgroundColor: "#F9FAFB" }}>
                        {columns.map((col) => (
                            <th key={col.key} style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: 600, color: "#6B7280", textTransform: "uppercase", width: col.width }}>
                                {col.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, idx) => (
                        <tr key={idx} style={{ borderTop: "1px solid #F3F4F6" }}>
                            {columns.map((col) => (
                                <td key={col.key} style={{ padding: "12px 16px", fontSize: "13px", color: "#374151" }}>
                                    {col.render ? col.render(row, idx) : String(row[col.key] ?? "")}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination */}
            <div style={{ padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #F3F4F6", fontSize: "12px", color: "#6B7280" }}>
                <div>Showing {data.length} of {totalRecords} records</div>
                <div style={{ display: "flex", gap: "4px" }}>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                        <button key={p} onClick={() => onPageChange(p)} style={{
                            padding: "4px 10px", borderRadius: "4px", fontSize: "12px", cursor: "pointer",
                            border: page === p ? "1px solid #1A56DB" : "1px solid #E5E7EB",
                            backgroundColor: page === p ? "#EBF5FF" : "#fff",
                            color: page === p ? "#1A56DB" : "#6B7280", fontWeight: page === p ? 600 : 400,
                        }}>{p}</button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NmbaDataTable;
