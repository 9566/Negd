import React from "react";

const callStats = [
  {
    label: "TOTAL CALLS RECEIVED",
    value1: "13,189",
    value2: "4,30,890",
    color: "#e74c3c",
  },
  {
    label: "TOTAL CALLS COMPLETED",
    value1: "13,174",
    value2: "4,19,779",
    color: "#008751",
  },
];

const stateData = [
  { sno: 1, state: "Andaman and Nicobar", assessed: 46, completed: 44 },
  { sno: 2, state: "Andhra Pradesh", assessed: 1331, completed: 1305 },
  { sno: 3, state: "Arunachal Pradesh", assessed: 118, completed: 100 },
  { sno: 4, state: "Assam", assessed: 630, completed: 605 },
  { sno: 5, state: "Bihar", assessed: 1002, completed: 867 },
  { sno: 6, state: "Chandigarh", assessed: 102, completed: 99 },
  { sno: 7, state: "Chhattisgarh", assessed: 383, completed: 381 },
  { sno: 8, state: "Delhi", assessed: 742, completed: 700 },
  { sno: 9, state: "Goa", assessed: 125, completed: 120 },
  { sno: 10, state: "Gujarat", assessed: 2036, completed: 1458 },
];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const PublicDashboard: React.FC = () => {
  return (
    <div className="p-3 sm:p-4 md:p-6">
      {/* Confidential Support Banner */}
      <div className="dashboard-banner-bg rounded-lg p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 flex flex-col sm:flex-row gap-4 justify-between items-center shadow-lg">
        <div className="flex-1">
          <h2 className="text-lg sm:text-xl font-bold mb-1">
            Confidential Support is Available
          </h2>
          <p className="text-xs sm:text-sm opacity-90">
            If you or someone you know is struggling with substance use, trained
            counsellors are available for confidential support, 24x7 Toll Free.
          </p>
        </div>
        <div className="dashboard-helpline-badge rounded-full px-4 sm:px-6 py-2 font-black text-xl sm:text-2xl whitespace-nowrap flex items-center gap-2">
          📞 14446
        </div>
      </div>

      {/* Stats Cards + Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5 mb-4 sm:mb-6">
        {callStats.map((stat, idx) => (
          <div
            key={idx}
            className="dashboard-card-bg rounded-lg border p-3 sm:p-4 md:p-5"
          >
            <div className="text-xs font-bold dashboard-stat-label uppercase tracking-wider mb-3">
              {stat.label}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-4">
              <div>
                <div
                  className={`text-2xl sm:text-3xl md:text-4xl font-black ${idx === 0 ? "dashboard-stat-red" : "dashboard-stat-green"}`}
                >
                  {stat.value1}
                </div>
              </div>
              <div>
                <div
                  className={`text-2xl sm:text-3xl md:text-4xl font-black ${idx === 0 ? "dashboard-stat-red" : "dashboard-stat-green"}`}
                >
                  {stat.value2}
                </div>
              </div>
            </div>
            {/* Chart placeholder */}
            <div className="h-32 relative border-b border-gray-100">
              <svg width="100%" height="120" viewBox="0 0 400 120" fill="none">
                <path
                  d={
                    idx === 0
                      ? "M0,80 C50,60 100,90 150,50 C200,10 250,70 300,40 C350,60 400,20 400,30"
                      : "M0,90 C50,70 100,80 150,40 C200,20 250,60 300,30 C350,50 400,25 400,35"
                  }
                  stroke={idx === 0 ? "#e74c3c" : "#008751"}
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d={
                    idx === 0
                      ? "M0,80 C50,60 100,90 150,50 C200,10 250,70 300,40 C350,60 400,20 400,30 L400,120 L0,120Z"
                      : "M0,90 C50,70 100,80 150,40 C200,20 250,60 300,30 C350,50 400,25 400,35 L400,120 L0,120Z"
                  }
                  fill={idx === 0 ? "#e74c3c" : "#008751"}
                  fillOpacity="0.1"
                />
              </svg>
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              {months.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* All India States Table + Call Category Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-5 mb-4 sm:mb-6">
        {/* States Table */}
        <div className="dashboard-card-bg rounded-lg border overflow-hidden">
          <div className="px-3 sm:px-4 md:px-5 py-3 sm:py-4 border-b border-gray-200 flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between items-start sm:items-center">
            <h3 className="text-base font-bold dashboard-table-cell">
              All India States
            </h3>
            <div className="flex gap-1 flex-wrap">
              {["Day", "Last 7 days", "MTD", "YTD"].map((f) => (
                <button
                  key={f}
                  className={`px-2 py-1 text-xs rounded border whitespace-nowrap ${f === "YTD" ? "dashboard-btn-active font-semibold" : "dashboard-btn-inactive font-normal"}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[500px]">
              <thead>
                <tr className="dashboard-table-header">
                  <th className="px-2 sm:px-3 md:px-4 py-2 text-xs font-semibold text-left">
                    S.No
                  </th>
                  <th className="px-2 sm:px-3 md:px-4 py-2 text-xs font-semibold text-left">
                    State
                  </th>
                  <th className="px-2 sm:px-3 md:px-4 py-2 text-xs font-semibold text-right">
                    Assessed
                  </th>
                  <th className="px-2 sm:px-3 md:px-4 py-2 text-xs font-semibold text-right">
                    Completed
                  </th>
                </tr>
              </thead>
              <tbody>
                {stateData.map((row) => (
                  <tr key={row.sno} className="border-t dashboard-table-row">
                    <td className="px-2 sm:px-3 md:px-4 py-2 text-xs sm:text-sm dashboard-stat-label">
                      {row.sno}
                    </td>
                    <td className="px-2 sm:px-3 md:px-4 py-2 text-xs sm:text-sm dashboard-table-cell font-medium">
                      {row.state}
                    </td>
                    <td className="px-2 sm:px-3 md:px-4 py-2 text-xs sm:text-sm dashboard-table-cell text-right">
                      {row.assessed.toLocaleString()}
                    </td>
                    <td className="px-2 sm:px-3 md:px-4 py-2 text-xs sm:text-sm dashboard-table-cell text-right">
                      {row.completed.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-4 py-3 border-t border-gray-200 text-sm dashboard-link-text cursor-pointer font-medium">
            Showing 10 of 36 states →
          </div>
        </div>

        {/* Call Category Stats Chart */}
        <div className="dashboard-card-bg rounded-lg border p-3 sm:p-4 md:p-5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-base font-bold dashboard-table-cell">
              Call Category Stats
            </h3>
            <span className="text-xs dashboard-stat-label px-2 py-1 border border-gray-200 rounded">
              ₹ 19,840
            </span>
          </div>
          {/* Stacked bar chart */}
          <div className="flex items-end gap-2 h-52 pb-1">
            {months.slice(0, 8).map((m, i) => {
              const heights = [
                [40, 30, 25, 20, 15],
                [50, 25, 30, 15, 20],
                [35, 35, 20, 25, 10],
                [60, 20, 25, 15, 25],
                [45, 30, 20, 20, 15],
                [55, 25, 30, 10, 20],
                [40, 35, 25, 20, 15],
                [50, 30, 20, 25, 10],
              ];
              const classes = [
                "chart-bar-green",
                "chart-bar-amber",
                "chart-bar-red",
                "chart-bar-blue",
                "chart-bar-gray",
              ];
              return (
                <div key={m} className="flex-1 flex flex-col items-center">
                  <div className="w-full flex flex-col">
                    {heights[i].map((h, j) => (
                      <div
                        key={j}
                        className={`flex-1 ${classes[j]} ${j === 0 ? "rounded-t" : j === heights[i].length - 1 ? "rounded-b" : ""}`}
                        style={{
                          height: `${h}%`,
                          minHeight: `${h * 1.5}px`,
                        }}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-400 mt-1">{m}</span>
                </div>
              );
            })}
          </div>
          <div className="flex gap-3 flex-wrap mt-3 text-xs">
            {[
              { label: "Drug Abuse", colorClass: "chart-bar-green" },
              { label: "Alcohol", colorClass: "chart-bar-amber" },
              { label: "In-Complete", colorClass: "chart-bar-red" },
              { label: "Follow up", colorClass: "chart-bar-blue" },
              { label: "Other", colorClass: "chart-bar-gray" },
            ].map((l) => (
              <div key={l.label} className="flex items-center gap-1">
                <div className={`w-2 h-2 rounded ${l.colorClass}`} />
                <span className="dashboard-stat-label">{l.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="dashboard-bottom-banner rounded-lg p-4 sm:p-6 md:p-8 text-center">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
          Combat Drug Crime: Report and Seek Help
        </h3>
        <p className="text-xs sm:text-sm opacity-90 mb-4">
          The NCBI/NMBA Portal is your secure platform to report drug-related
          issues and access crucial resources.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="px-4 sm:px-5 py-2 rounded dashboard-bottom-btn-primary font-semibold text-xs sm:text-sm cursor-pointer">
            🏛️ Proceed to NCBI-NMBA Portal
          </button>
          <button className="px-4 sm:px-5 py-2 rounded border dashboard-bottom-btn-secondary font-semibold text-xs sm:text-sm cursor-pointer">
            📞 Call NCBI Helpline: 1800
          </button>
        </div>
      </div>
    </div>
  );
};

export default PublicDashboard;
