import React, { useState } from "react";
import { Badge, Button, Modal, TextInput, Select, Group } from "@mantine/core";
import NmbaDataTable, { Column } from "../../../components/common/NmbaDataTable/NmbaDataTable";
import PageHeader from "../../../components/common/PageHeader/PageHeader";
import FilterBar from "../../../components/common/FilterBar/FilterBar";

interface QrRow {
    [key: string]: unknown;
    sno: number;
    qrId: string;
    activityName: string;
    state: string;
    district: string;
    createdDate: string;
    status: string;
}

const sampleData: QrRow[] = [
    { sno: 1, qrId: "QR-2026-001", activityName: "Drawing Competition", state: "Madhya Pradesh", district: "Bhopal", createdDate: "2026-01-15", status: "Active" },
    { sno: 2, qrId: "QR-2026-002", activityName: "Essay Writing", state: "Maharashtra", district: "Mumbai", createdDate: "2026-01-16", status: "Active" },
    { sno: 3, qrId: "QR-2026-003", activityName: "Cultural Event", state: "Uttar Pradesh", district: "Lucknow", createdDate: "2026-01-17", status: "Inactive" },
    { sno: 4, qrId: "QR-2026-004", activityName: "Sports Meet", state: "Tamil Nadu", district: "Chennai", createdDate: "2026-01-18", status: "Active" },
    { sno: 5, qrId: "QR-2026-005", activityName: "Awareness Rally", state: "Rajasthan", district: "Jaipur", createdDate: "2026-01-19", status: "Active" },
    { sno: 6, qrId: "QR-2026-006", activityName: "Health Camp", state: "Gujarat", district: "Ahmedabad", createdDate: "2026-01-20", status: "Expired" },
];

const QrManagement: React.FC = () => {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [searchValue, setSearchValue] = useState("");
    const [stateFilter, setStateFilter] = useState<string | null>(null);
    const [generateModalOpen, setGenerateModalOpen] = useState(false);

    const columns: Column<QrRow>[] = [
        { key: "sno", label: "S.No", width: "60px", render: (_item, index) => index + 1 },
        { key: "qrId", label: "QR ID", render: (item) => <span style={{ fontFamily: "monospace", color: "#1A56DB", fontWeight: 600 }}>{item.qrId}</span> },
        { key: "activityName", label: "Activity Name" },
        { key: "state", label: "State / UT" },
        { key: "district", label: "District" },
        { key: "createdDate", label: "Created Date" },
        {
            key: "status",
            label: "Status",
            render: (item) => (
                <Badge
                    color={item.status === "Active" ? "green" : item.status === "Inactive" ? "orange" : "red"}
                    variant="light"
                    size="sm"
                >
                    {item.status}
                </Badge>
            ),
        },
        {
            key: "actions",
            label: "Actions",
            render: () => (
                <Group gap="xs">
                    <Button size="compact-xs" variant="light" color="blue">View</Button>
                    <Button size="compact-xs" variant="light" color="green">Download</Button>
                </Group>
            ),
        },
    ];

    return (
        <div>
            <PageHeader
                title="QR Management"
                breadcrumbs={[
                    { label: "Home", path: "/dashboard" },
                    { label: "NMBA Activity" },
                    { label: "QR Management" },
                ]}
                actionLabel="+ Generate QR"
                onAction={() => setGenerateModalOpen(true)}
                secondaryActionLabel="Bulk Download"
                onSecondaryAction={() => console.log("Bulk Download")}
            />

            <FilterBar
                filters={[
                    {
                        label: "State/UT",
                        value: "state",
                        options: [
                            { label: "Madhya Pradesh", value: "MP" },
                            { label: "Maharashtra", value: "MH" },
                            { label: "Uttar Pradesh", value: "UP" },
                            { label: "Tamil Nadu", value: "TN" },
                        ],
                        currentValue: stateFilter,
                        onChange: setStateFilter,
                    },
                ]}
                onApply={() => console.log("Apply")}
                onReset={() => setStateFilter(null)}
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
                searchPlaceholder="Search QR codes..."
                exportButton
            />

            {/* Generate QR Modal */}
            <Modal
                opened={generateModalOpen}
                onClose={() => setGenerateModalOpen(false)}
                title="Generate QR Code"
                size="md"
            >
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <Select
                        label="Activity"
                        placeholder="Select activity"
                        data={[
                            { label: "Drawing Competition", value: "drawing" },
                            { label: "Essay Writing", value: "essay" },
                            { label: "Cultural Event", value: "cultural" },
                        ]}
                    />
                    <Select
                        label="State/UT"
                        placeholder="Select state"
                        data={[
                            { label: "Madhya Pradesh", value: "MP" },
                            { label: "Maharashtra", value: "MH" },
                        ]}
                    />
                    <TextInput label="District" placeholder="Enter district" />
                    <Group justify="flex-end" mt="md">
                        <Button variant="outline" onClick={() => setGenerateModalOpen(false)}>Cancel</Button>
                        <Button color="#1A56DB" onClick={() => setGenerateModalOpen(false)}>Generate</Button>
                    </Group>
                </div>
            </Modal>
        </div>
    );
};

export default QrManagement;
