import React, { useState } from "react";
import { Button, Select, TextInput, Textarea } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../../components/common/PageHeader/PageHeader";

const AddQr: React.FC = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        activity: "",
        state: "",
        district: "",
        description: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("QR Code generated successfully!");
        navigate("/qr-management");
    };

    return (
        <div>
            <PageHeader
                title="Add QR Code"
                breadcrumbs={[
                    { label: "Home", path: "/dashboard" },
                    { label: "NMBA Activity" },
                    { label: "QR Management", path: "/qr-management" },
                    { label: "Add QR Code" },
                ]}
            />

            <form onSubmit={handleSubmit} style={{ backgroundColor: "#fff", borderRadius: "12px", border: "1px solid #E5E7EB", padding: "28px", maxWidth: "640px" }}>
                <div style={{ marginBottom: "18px" }}>
                    <Select
                        label="Activity"
                        placeholder="Select activity"
                        data={[
                            { label: "Drawing Competition", value: "drawing" },
                            { label: "Essay Writing", value: "essay" },
                            { label: "Cultural Event", value: "cultural" },
                            { label: "Sports Meet", value: "sports" },
                            { label: "Awareness Rally", value: "rally" },
                            { label: "Health Camp", value: "health" },
                        ]}
                        value={form.activity}
                        onChange={(val) => setForm({ ...form, activity: val || "" })}
                        required
                    />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "18px" }}>
                    <Select
                        label="State / UT"
                        placeholder="Select state"
                        data={[
                            { label: "Uttar Pradesh", value: "UP" },
                            { label: "Madhya Pradesh", value: "MP" },
                            { label: "Rajasthan", value: "RJ" },
                            { label: "Bihar", value: "BR" },
                            { label: "Maharashtra", value: "MH" },
                            { label: "Tamil Nadu", value: "TN" },
                            { label: "Gujarat", value: "GJ" },
                            { label: "Karnataka", value: "KA" },
                        ]}
                        value={form.state}
                        onChange={(val) => setForm({ ...form, state: val || "" })}
                        required
                    />
                    <TextInput
                        label="District"
                        placeholder="Enter district"
                        value={form.district}
                        onChange={(e) => setForm({ ...form, district: e.currentTarget.value })}
                        required
                    />
                </div>

                <div style={{ marginBottom: "24px" }}>
                    <Textarea
                        label="Description"
                        placeholder="Enter QR code description or purpose"
                        value={form.description}
                        onChange={(e) => setForm({ ...form, description: e.currentTarget.value })}
                        rows={4}
                    />
                </div>

                <div style={{ display: "flex", gap: "12px" }}>
                    <Button type="submit" color="#1A56DB" size="md">Generate QR Code</Button>
                    <Button variant="outline" color="gray" size="md" onClick={() => navigate("/qr-management")}>Cancel</Button>
                </div>
            </form>
        </div>
    );
};

export default AddQr;
