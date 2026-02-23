import React, { useState } from "react";
import { Badge } from "@mantine/core";
import NmbaDataTable, { Column } from "../../components/common/NmbaDataTable/NmbaDataTable";
import PageHeader from "../../components/common/PageHeader/PageHeader";
import FilterBar from "../../components/common/FilterBar/FilterBar";

interface PledgeRow {
    [key: string]: unknown;
    sno: number;
    stateUt: string;
    district: string;
    totalPledges: number;
    male: number;
    female: number;
    other: number;
    dateRange: string;
    status: string;
}

const sampleData: PledgeRow[] = [
    { sno: 1, stateUt: "Uttar Pradesh", district: "Amroha", totalPledges: 12540, male: 6800, female: 5200, other: 540, dateRange: "01/01/2026 - 31/01/2026", status: "Verified" },
    { sno: 2, stateUt: "Madhya Pradesh", district: "Bhopal", totalPledges: 8920, male: 4500, female: 4100, other: 320, dateRange: "01/01/2026 - 31/01/2026", status: "Verified" },
    { sno: 3, stateUt: "Rajasthan", district: "Jaipur", totalPledges: 7340, male: 3800, female: 3200, other: 340, dateRange: "01/01/2026 - 31/01/2026", status: "Pending" },
    { sno: 4, stateUt: "Bihar", district: "Patna", totalPledges: 6180, male: 3200, female: 2800, other: 180, dateRange: "01/01/2026 - 31/01/2026", status: "Verified" },
    { sno: 5, stateUt: "Maharashtra", district: "Mumbai", totalPledges: 15200, male: 7600, female: 7100, other: 500, dateRange: "01/01/2026 - 31/01/2026", status: "Verified" },
    { sno: 6, stateUt: "Tamil Nadu", district: "Chennai", totalPledges: 9800, male: 5000, female: 4500, other: 300, dateRange: "01/01/2026 - 31/01/2026", status: "Pending" },
    { sno: 7, stateUt: "Gujarat", district: "Ahmedabad", totalPledges: 11200, male: 5700, female: 5200, other: 300, dateRange: "01/01/2026 - 31/01/2026", status: "Verified" },
    { sno: 8, stateUt: "Karnataka", district: "Bengaluru", totalPledges: 10500, male: 5400, female: 4800, other: 300, dateRange: "01/01/2026 - 31/01/2026", status: "Verified" },
];

const AllPledgeReport: React.FC = () => {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [searchValue, setSearchValue] = useState("");
    const [stateFilter, setStateFilter] = useState<string | null>(null);
    const [districtFilter, setDistrictFilter] = useState<string | null>(null);

    const columns: Column<PledgeRow>[] = [
        { key: "sno", label: "S.No", width: "60px", render: (_item, index) => index + 1 },
        { key: "stateUt", label: "State / UT", render: (item) => <span style={{ fontWeight: 500, color: "#111827" }}>{item.stateUt}</span> },
        { key: "district", label: "District" },
        { key: "totalPledges", label: "Total Pledges", render: (item) => <span style={{ fontWeight: 600, color: "#1A56DB" }}>{Number(item.totalPledges).toLocaleString()}</span> },
        { key: "male", label: "Male", render: (item) => Number(item.male).toLocaleString() },
        { key: "female", label: "Female", render: (item) => Number(item.female).toLocaleString() },
        { key: "other", label: "Other", render: (item) => Number(item.other).toLocaleString() },
        { key: "dateRange", label: "Date Range" },
        {
            key: "status", label: "Status", render: (item) => (
                <Badge color={item.status === "Verified" ? "green" : "orange"} variant="light" size="sm">
                    {item.status}
                </Badge>
            ),
        },
    ];

    return (
        <div>
            <PageHeader
                title="All Pledge Report"
                breadcrumbs={[
                    { label: "Home", path: "/dashboard" },
                    { label: "NMBA Activity" },
                    { label: "All Pledge Report" },
                ]}
                actionLabel="📥 Export Report"
                onAction={() => console.log("Export")}
            />

            <FilterBar
                filters={[
                    {
                        label: "State/UT",
                        value: "state",
                        options: [
                            { label: "Uttar Pradesh", value: "UP" },
                            { label: "Madhya Pradesh", value: "MP" },
                            { label: "Rajasthan", value: "RJ" },
                            { label: "Bihar", value: "BR" },
                            { label: "Maharashtra", value: "MH" },
                            { label: "Tamil Nadu", value: "TN" },
                            { label: "Gujarat", value: "GJ" },
                            { label: "Karnataka", value: "KA" },
                        ],
                        currentValue: stateFilter,
                        onChange: setStateFilter,
                    },
                    {
                        label: "District",
                        value: "district",
                        options: [
                            { label: "Amroha", value: "Amroha" },
                            { label: "Bhopal", value: "Bhopal" },
                            { label: "Jaipur", value: "Jaipur" },
                            { label: "Patna", value: "Patna" },
                        ],
                        currentValue: districtFilter,
                        onChange: setDistrictFilter,
                    },
                ]}
                onApply={() => console.log("Apply filters")}
                onReset={() => { setStateFilter(null); setDistrictFilter(null); }}
            />

            <NmbaDataTable
                columns={columns}
                data={sampleData}
                totalRecords={sampleData.length}
                page={page}
                pageSize={pageSize}
                onPageChange={setPage}
                onPageSizeChange={(val) => setPageSize(Number(val) || 10)}
                searchValue={searchValue}
                onSearchChange={setSearchValue}
                searchPlaceholder="Search pledge reports..."
                exportButton
            />
        </div>
    );
};

export default AllPledgeReport;
