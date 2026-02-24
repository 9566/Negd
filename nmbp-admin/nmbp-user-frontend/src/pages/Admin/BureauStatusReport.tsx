import React, { useState } from "react";
import { Badge } from "@mantine/core";
import NmbaDataTable, {
  Column,
} from "../../components/common/NmbaDataTable/NmbaDataTable";
import PageHeader from "../../components/common/PageHeader/PageHeader";
import FilterBar from "../../components/common/FilterBar/FilterBar";

interface BureauRow {
  [key: string]: unknown;
  sno: number;
  bureauName: string;
  state: string;
  activitiesCompleted: number;
  activitiesPending: number;
  totalParticipants: number;
  lastUpdated: string;
  status: string;
}

const sampleData: BureauRow[] = [
  {
    sno: 1,
    bureauName: "Narcotics Control Bureau",
    state: "Delhi",
    activitiesCompleted: 245,
    activitiesPending: 12,
    totalParticipants: 18500,
    lastUpdated: "15/02/2026",
    status: "Active",
  },
  {
    sno: 2,
    bureauName: "Social Welfare Department",
    state: "Uttar Pradesh",
    activitiesCompleted: 189,
    activitiesPending: 23,
    totalParticipants: 14200,
    lastUpdated: "14/02/2026",
    status: "Active",
  },
  {
    sno: 3,
    bureauName: "Health & Family Welfare",
    state: "Madhya Pradesh",
    activitiesCompleted: 156,
    activitiesPending: 8,
    totalParticipants: 11800,
    lastUpdated: "13/02/2026",
    status: "Active",
  },
  {
    sno: 4,
    bureauName: "Education Department",
    state: "Rajasthan",
    activitiesCompleted: 134,
    activitiesPending: 45,
    totalParticipants: 9600,
    lastUpdated: "12/02/2026",
    status: "Pending",
  },
  {
    sno: 5,
    bureauName: "Youth Affairs Bureau",
    state: "Maharashtra",
    activitiesCompleted: 220,
    activitiesPending: 5,
    totalParticipants: 16800,
    lastUpdated: "11/02/2026",
    status: "Completed",
  },
  {
    sno: 6,
    bureauName: "Women & Child Development",
    state: "Bihar",
    activitiesCompleted: 98,
    activitiesPending: 30,
    totalParticipants: 7400,
    lastUpdated: "10/02/2026",
    status: "Active",
  },
  {
    sno: 7,
    bureauName: "Rural Development Dept",
    state: "Tamil Nadu",
    activitiesCompleted: 167,
    activitiesPending: 15,
    totalParticipants: 12500,
    lastUpdated: "09/02/2026",
    status: "Active",
  },
  {
    sno: 8,
    bureauName: "Urban Development Body",
    state: "Gujarat",
    activitiesCompleted: 143,
    activitiesPending: 20,
    totalParticipants: 10800,
    lastUpdated: "08/02/2026",
    status: "Pending",
  },
];

const BureauStatusReport: React.FC = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchValue, setSearchValue] = useState("");
  const [stateFilter, setStateFilter] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string | null>(null);

  const columns: Column<BureauRow>[] = [
    {
      key: "sno",
      label: "S.No",
      width: "60px",
      render: (_item, index) => index + 1,
    },
    {
      key: "bureauName",
      label: "Bureau Name",
      render: (item) => (
        <span style={{ fontWeight: 500, color: "#111827" }}>
          {item.bureauName}
        </span>
      ),
    },
    { key: "state", label: "State" },
    {
      key: "activitiesCompleted",
      label: "Completed",
      render: (item) => (
        <span style={{ fontWeight: 600, color: "#057A55" }}>
          {item.activitiesCompleted}
        </span>
      ),
    },
    {
      key: "activitiesPending",
      label: "Pending",
      render: (item) => (
        <span style={{ fontWeight: 600, color: "#f59e0b" }}>
          {item.activitiesPending}
        </span>
      ),
    },
    {
      key: "totalParticipants",
      label: "Participants",
      render: (item) => Number(item.totalParticipants).toLocaleString(),
    },
    { key: "lastUpdated", label: "Last Updated" },
    {
      key: "status",
      label: "Status",
      render: (item) => (
        <Badge
          color={
            item.status === "Active"
              ? "blue"
              : item.status === "Completed"
                ? "green"
                : "orange"
          }
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
        title="Bureau Status Report"
        breadcrumbs={[
          { label: "Home", path: "/dashboard" },
          { label: "NMBA Activity" },
          { label: "Bureau Status Report" },
        ]}
        actionLabel="📥 Export Report"
        onAction={() => console.log("Export")}
      />

      <FilterBar
        filters={[
          {
            label: "State",
            value: "state",
            options: [
              { label: "Delhi", value: "DL" },
              { label: "Uttar Pradesh", value: "UP" },
              { label: "Madhya Pradesh", value: "MP" },
              { label: "Rajasthan", value: "RJ" },
              { label: "Maharashtra", value: "MH" },
            ],
            currentValue: stateFilter,
            onChange: setStateFilter,
          },
          {
            label: "Status",
            value: "status",
            options: [
              { label: "Active", value: "Active" },
              { label: "Pending", value: "Pending" },
              { label: "Completed", value: "Completed" },
            ],
            currentValue: statusFilter,
            onChange: setStatusFilter,
          },
        ]}
        onApply={() => console.log("Apply filters")}
        onReset={() => {
          setStateFilter(null);
          setStatusFilter(null);
        }}
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
        searchPlaceholder="Search bureaus..."
        exportButton
      />
    </div>
  );
};

export default BureauStatusReport;
