import React, { useState } from "react";
import { Badge } from "@mantine/core";
import NmbaDataTable, { Column } from "../../components/common/NmbaDataTable/NmbaDataTable";
import PageHeader from "../../components/common/PageHeader/PageHeader";
import FilterBar from "../../components/common/FilterBar/FilterBar";

interface ActivityRow {
    [key: string]: unknown;
    sno: number;
    stateUt: string;
    district: string;
    activityName: string;
    activityDate: string;
    totalParticipants: number;
    male: number;
    female: number;
    status: string;
}

const sampleData: ActivityRow[] = [
    { sno: 1, stateUt: "Uttar Pradesh", district: "Amroha", activityName: "Drawing Competition", activityDate: "11/02/2026", totalParticipants: 80, male: 40, female: 40, status: "Completed" },
    { sno: 2, stateUt: "Uttar Pradesh", district: "Ayodhya", activityName: "Slogan Writing Competition", activityDate: "09/12/2025", totalParticipants: 532, male: 232, female: 300, status: "Completed" },
    { sno: 3, stateUt: "Madhya Pradesh", district: "Bhopal", activityName: "Rangoli Making Competition", activityDate: "26/01/2026", totalParticipants: 150, male: 100, female: 50, status: "Completed" },
    { sno: 4, stateUt: "Uttar Pradesh", district: "Azamgarh", activityName: "Nukad Natak", activityDate: "01/01/2026", totalParticipants: 40, male: 20, female: 20, status: "In Progress" },
    { sno: 5, stateUt: "Rajasthan", district: "Jaipur", activityName: "Marathon/Walkathon", activityDate: "01/01/2026", totalParticipants: 210, male: 120, female: 90, status: "Completed" },
    { sno: 6, stateUt: "Bihar", district: "Patna", activityName: "Awareness Rally", activityDate: "15/01/2026", totalParticipants: 350, male: 180, female: 170, status: "Completed" },
    { sno: 7, stateUt: "Maharashtra", district: "Mumbai", activityName: "Health Camp", activityDate: "20/01/2026", totalParticipants: 200, male: 100, female: 100, status: "In Progress" },
    { sno: 8, stateUt: "Tamil Nadu", district: "Chennai", activityName: "Cultural Event", activityDate: "25/01/2026", totalParticipants: 300, male: 150, female: 150, status: "Pending" },
    { sno: 9, stateUt: "Gujarat", district: "Ahmedabad", activityName: "Essay Writing", activityDate: "28/01/2026", totalParticipants: 180, male: 90, female: 90, status: "Completed" },
    { sno: 10, stateUt: "Karnataka", district: "Bengaluru", activityName: "Sports Meet", activityDate: "30/01/2026", totalParticipants: 250, male: 130, female: 120, status: "Completed" },
];

const StateUtDistrictActivity: React.FC = () => {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [searchValue, setSearchValue] = useState("");
    const [stateFilter, setStateFilter] = useState<string | null>(null);
    const [districtFilter, setDistrictFilter] = useState<string | null>(null);
    const [statusFilter, setStatusFilter] = useState<string | null>(null);

    const columns: Column<ActivityRow>[] = [
        { key: "sno", label: "S.No", width: "60px", render: (_item, index) => index + 1 },
        { key: "stateUt", label: "State / UT", render: (item) => <span style={{ fontWeight: 500, color: "#111827" }}>{item.stateUt}</span> },
        { key: "district", label: "District" },
        { key: "activityName", label: "Activity Name", render: (item) => <span style={{ fontWeight: 500, color: "#1A56DB" }}>{item.activityName}</span> },
        { key: "activityDate", label: "Date" },
        { key: "totalParticipants", label: "Participants", render: (item) => <span style={{ fontWeight: 600 }}>{item.totalParticipants}</span> },
        { key: "male", label: "Male" },
        { key: "female", label: "Female" },
        {
            key: "status", label: "Status", render: (item) => (
                <Badge
                    color={item.status === "Completed" ? "green" : item.status === "In Progress" ? "blue" : "orange"}
                    variant="light"
                    size="sm"
                >
                    {item.status}
                </Badge>
            ),
        },
    ];

    return (
        <div>
            <PageHeader
                title="State, UT & District Activity"
                breadcrumbs={[
                    { label: "Home", path: "/dashboard" },
                    { label: "NMBA Activity" },
                    { label: "State, UT & District Activity" },
                ]}
                actionLabel="📥 Export"
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
                            { label: "Mumbai", value: "Mumbai" },
                        ],
                        currentValue: districtFilter,
                        onChange: setDistrictFilter,
                    },
                    {
                        label: "Status",
                        value: "status",
                        options: [
                            { label: "Completed", value: "Completed" },
                            { label: "In Progress", value: "In Progress" },
                            { label: "Pending", value: "Pending" },
                        ],
                        currentValue: statusFilter,
                        onChange: setStatusFilter,
                    },
                ]}
                onApply={() => console.log("Apply")}
                onReset={() => { setStateFilter(null); setDistrictFilter(null); setStatusFilter(null); }}
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
                searchPlaceholder="Search activities..."
                exportButton
            />
        </div>
    );
};

export default StateUtDistrictActivity;
