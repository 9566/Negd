import React from "react";
import { useNavigate } from "react-router-dom";

const DataEntryForm: React.FC = () => {
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate("/dashboard");
    };

    return (
        <div>
            <div className="page-header">
                <h1 className="heading-page">Data Entry Form</h1>
                <button className="btn btn-secondary" onClick={() => navigate(-1)}>← Back</button>
            </div>

            <div className="card">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        {/* Section 1 */}
                        <div className="form-section-title">Activity Information</div>
                        <div className="form-grid">
                            <div className="form-group">
                                <label className="form-label">Activity Name</label>
                                <input type="text" className="form-input" placeholder="Enter activity name" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Activity Type</label>
                                <select className="form-select">
                                    <option value="">Select Type</option>
                                    <option>Awareness Campaign</option>
                                    <option>Competition</option>
                                    <option>Workshop</option>
                                    <option>Rally</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Date</label>
                                <input type="date" className="form-input" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Location</label>
                                <input type="text" className="form-input" placeholder="Enter location" />
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div className="form-section-title" style={{ marginTop: "24px" }}>Participant Details</div>
                        <div className="form-grid">
                            <div className="form-group">
                                <label className="form-label">Total Participants</label>
                                <input type="number" className="form-input" placeholder="0" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Male Participants</label>
                                <input type="number" className="form-input" placeholder="0" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Female Participants</label>
                                <input type="number" className="form-input" placeholder="0" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Other Participants</label>
                                <input type="number" className="form-input" placeholder="0" />
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div className="form-section-title" style={{ marginTop: "24px" }}>Additional Details</div>
                        <div className="form-group">
                            <label className="form-label">Description</label>
                            <textarea
                                className="form-input"
                                style={{ height: "100px", paddingTop: "10px" }}
                                placeholder="Describe the activity..."
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Upload Photos</label>
                            <input type="file" className="form-input" style={{ paddingTop: "8px" }} multiple accept="image/*" />
                        </div>

                        <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
                            <button type="submit" className="btn btn-primary">Submit Entry</button>
                            <button type="button" className="btn btn-secondary" onClick={() => navigate(-1)}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DataEntryForm;
