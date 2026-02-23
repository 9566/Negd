import React from "react";
import { Button, Select } from "@mantine/core";

interface FilterOption {
    label: string;
    value: string;
}

interface Filter {
    label: string;
    value: string;
    options: FilterOption[];
    currentValue: string | null;
    onChange: (val: string | null) => void;
}

interface Props {
    filters: Filter[];
    onApply?: () => void;
    onReset?: () => void;
}

const FilterBar: React.FC<Props> = ({ filters, onApply, onReset }) => {
    return (
        <div style={{
            backgroundColor: "#fff", borderRadius: "8px", border: "1px solid #E5E7EB",
            padding: "12px 16px", display: "flex", alignItems: "flex-end", gap: "12px", flexWrap: "wrap",
        }}>
            {filters.map((f) => (
                <Select
                    key={f.value}
                    label={f.label}
                    placeholder={`Select ${f.label}`}
                    data={f.options}
                    value={f.currentValue}
                    onChange={f.onChange}
                    clearable
                    size="sm"
                    style={{ minWidth: "180px" }}
                />
            ))}
            <Button size="sm" color="#1A56DB" onClick={onApply}>Apply</Button>
            <Button size="sm" variant="outline" color="gray" onClick={onReset}>Reset</Button>
        </div>
    );
};

export default FilterBar;
