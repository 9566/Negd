import React from "react";
import { Button } from "@mantine/core";

interface Breadcrumb {
    label: string;
    path?: string;
}

interface Props {
    title: string;
    breadcrumbs?: Breadcrumb[];
    actionLabel?: string;
    onAction?: () => void;
    secondaryActionLabel?: string;
    onSecondaryAction?: () => void;
}

const PageHeader: React.FC<Props> = ({ title, breadcrumbs, actionLabel, onAction, secondaryActionLabel, onSecondaryAction }) => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
            <div>
                {breadcrumbs && (
                    <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "#9CA3AF", marginBottom: "6px" }}>
                        {breadcrumbs.map((b, i) => (
                            <span key={i}>
                                {b.path ? <a href={b.path} style={{ color: "#1A56DB", textDecoration: "none" }}>{b.label}</a> : <span>{b.label}</span>}
                                {i < breadcrumbs.length - 1 && <span style={{ margin: "0 4px" }}>/</span>}
                            </span>
                        ))}
                    </div>
                )}
                <h1 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", margin: 0 }}>{title}</h1>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
                {secondaryActionLabel && (
                    <Button variant="outline" color="#1A56DB" size="sm" onClick={onSecondaryAction}>{secondaryActionLabel}</Button>
                )}
                {actionLabel && (
                    <Button color="#1A56DB" size="sm" onClick={onAction}>{actionLabel}</Button>
                )}
            </div>
        </div>
    );
};

export default PageHeader;
