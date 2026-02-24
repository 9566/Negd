import React, { useState } from "react";
import { Badge } from "@mantine/core";
import NmbaDataTable, { Column } from "../common/NmbaDataTable/NmbaDataTable";
import PageHeader from "../common/PageHeader/PageHeader";
import FilterBar from "../common/FilterBar/FilterBar";

interface DnoRow {
  [key: string]: unknown;
  sno: number;
  name: string;
  designation: string;
  district: string;
  state: string;
  contact: string;
  email: string;
  activitiesCount: number;
  status: string;
}

const sampleData: DnoRow[] = [
  {
    sno: 1,
    name: "Ashok Kumar",
    designation: "District Collector",
    district: "Amroha",
    state: "Uttar Pradesh",
    contact: "9876543210",
    email: "ashok.kumar@nic.in",
    activitiesCount: 45,
    status: "Active",
  },
  {
    sno: 2,
    name: "Rajesh Singh",
    designation: "ADM",
    district: "Ayodhya",
    state: "Uttar Pradesh",
    contact: "9876543211",
    email: "rajesh.singh@nic.in",
    activitiesCount: 38,
    status: "Active",
  },
  {
    sno: 3,
    name: "Priya Sharma",
    designation: "District Collector",
    district: "Bhopal",
    state: "Madhya Pradesh",
    contact: "9876543212",
    email: "priya.sharma@nic.in",
    activitiesCount: 32,
    status: "Active",
  },
  {
    sno: 4,
    name: "Vikram Patel",
    designation: "SDM",
    district: "Azamgarh",
    state: "Uttar Pradesh",
    contact: "9876543213",
    email: "vikram.patel@nic.in",
    activitiesCount: 28,
    status: "Inactive",
  },
  {
    sno: 5,
    name: "Sunita Devi",
    designation: "District Collector",
    district: "Jaipur",
    state: "Rajasthan",
    contact: "9876543214",
    email: "sunita.devi@nic.in",
    activitiesCount: 52,
    status: "Active",
  },
  {
    sno: 6,
    name: "Manoj Tiwari",
    designation: "ADM",
    district: "Patna",
    state: "Bihar",
    contact: "9876543215",
    email: "manoj.tiwari@nic.in",
    activitiesCount: 41,
    status: "Active",
  },
  {
    sno: 7,
    name: "Kavita Rao",
    designation: "District Collector",
    district: "Mumbai",
    state: "Maharashtra",
    contact: "9876543216",
    email: "kavita.rao@nic.in",
    activitiesCount: 60,
    status: "Active",
  },
  {
    sno: 8,
    name: "Ramesh Verma",
    designation: "SDM",
    district: "Chennai",
    state: "Tamil Nadu",
    contact: "9876543217",
    email: "ramesh.verma@nic.in",
    activitiesCount: 35,
    status: "Active",
  },
];

const DnoListPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchValue, setSearchValue] = useState("");
  const [stateFilter, setStateFilter] = useState<string | null>(null);

  const columns: Column<DnoRow>[] = [
    {
      key: "sno",
      label: "S.No",
      width: "60px",
      render: (_item, index) => index + 1,
    },
    {
      key: "name",
      label: "Name",
      render: (item) => (
        <span style={{ fontWeight: 500, color: "#111827" }}>{item.name}</span>
      ),
    },
    { key: "designation", label: "Designation" },
    { key: "district", label: "District" },
    { key: "state", label: "State" },
    {
      key: "contact",
      label: "Contact",
      render: (item) => (
        <span style={{ fontFamily: "monospace", color: "#1A56DB" }}>
          {item.contact}
        </span>
      ),
    },
    {
      key: "email",
      label: "Email",
      render: (item) => (
        <span style={{ color: "#1A56DB", fontSize: "12px" }}>{item.email}</span>
      ),
    },
    {
      key: "activitiesCount",
      label: "Activities",
      render: (item) => (
        <span style={{ fontWeight: 600 }}>{item.activitiesCount}</span>
      ),
    },
    {
      key: "status",
      label: "Status",
      render: (item) => (
        <Badge
          color={item.status === "Active" ? "green" : "red"}
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
        title="List of DNO's"
        breadcrumbs={[
          { label: "Home", path: "/dashboard" },
          { label: "NMBA Activity" },
          { label: "List of DNO's" },
        ]}
        actionLabel="📥 Export"
        onAction={() => console.log("Export")}
      />

      <FilterBar
        filters={[
          {
            label: "State",
            value: "state",
            options: [
              { label: "Uttar Pradesh", value: "UP" },
              { label: "Madhya Pradesh", value: "MP" },
              { label: "Rajasthan", value: "RJ" },
              { label: "Bihar", value: "BR" },
              { label: "Maharashtra", value: "MH" },
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
        searchPlaceholder="Search DNOs..."
        exportButton
      />
    </div>
  );
};

export default DnoListPage;
