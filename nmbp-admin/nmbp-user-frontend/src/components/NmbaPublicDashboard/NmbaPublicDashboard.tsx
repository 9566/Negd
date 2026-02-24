import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mantine/core";

const recentActivities = [
  {
    id: 1,
    title: "Aksnd Student Awareness Drive",
    location: "Pune, Maharashtra",
    date: "25 Jun 2026",
    category: "Awareness Rally",
    categoryBg: "#E1EFFE",
    categoryColor: "#1A56DB",
    bgColor: "#dbeafe",
  },
  {
    id: 2,
    title: "Government School Pledge",
    location: "Anand, Andhra Pradesh",
    date: "15 Jun 2026",
    category: "School Programme",
    categoryBg: "#DEF7EC",
    categoryColor: "#03543F",
    bgColor: "#dcfce7",
  },
  {
    id: 3,
    title: "Village Meeting",
    location: "Alwar, Rajasthan",
    date: "13 Jun 2026",
    category: "Panchayat Rally",
    categoryBg: "#FDE8E8",
    categoryColor: "#9B1C1C",
    bgColor: "#fef3c7",
  },
];

const NmbaPublicDashboard: React.FC = () => {
  return (
    <div className="px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
      {/* Hero Banner */}
      <div className="nmba-hero-banner flex flex-col sm:flex-row gap-4 justify-between items-center p-5 sm:p-6 md:p-8 mb-5 sm:mb-6">
        <div className="flex-1">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
            Nasha Mukt Bharat Abhiyaan
          </h2>
          <p className="text-xs sm:text-sm opacity-90">
            Join 98 lakh+ citizens committed to a drug-free society.
          </p>
        </div>
        <Link to="/pledge">
          <Button
            color="#fff"
            variant="white"
            size="sm"
            radius="md"
            styles={{ root: { color: "#047857", fontWeight: 600 } }}
          >
            Take the Pledge →
          </Button>
        </Link>
      </div>

      {/* Dashboard Title */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-5 sm:mb-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
            Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-gray-500">
            Live impact metrics verified from field reports across 372 districts
          </p>
        </div>
        <div className="flex gap-3">
          <select className="px-4 py-2 border border-gray-200 rounded-md text-xs sm:text-sm bg-white">
            <option>All States ▾</option>
          </select>
          <select className="px-4 py-2 border border-gray-200 rounded-md text-xs sm:text-sm bg-white">
            <option>All Districts ▾</option>
          </select>
        </div>
      </div>

      {/* Stats Cards Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {[
          { label: "Total Pledges", value: "22,75,906" },
          { label: "People Reached", value: "25,89,78,572" },
          { label: "Youth Reached", value: "9,33,63,189" },
          { label: "Women Reached", value: "6,36,83,454" },
        ].map((s) => (
          <div key={s.label} className="nmba-stat-card">
            <div className="nmba-stat-label">{s.label}</div>
            <div className="nmba-stat-value">{s.value}</div>
          </div>
        ))}
      </div>

      {/* Stats Cards Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {[
          { label: "Total Activities Conducted", value: "8,16,100" },
          { label: "Villages Covered", value: "3,79,707" },
          { label: "Educational Institutions Covered", value: "16,09,943" },
        ].map((s) => (
          <div key={s.label} className="nmba-stat-card">
            <div className="nmba-stat-label">{s.label}</div>
            <div className="nmba-stat-value">{s.value}</div>
          </div>
        ))}
      </div>

      {/* Number of Programmes */}
      <h2 className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">
        NUMBER OF PROGRAMMES
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
        {/* Education & Youth */}
        <div className="nmba-program-card">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg sm:text-xl">📚</span>
            <h3 className="nmba-program-title">Education & Youth</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                label: "Educational Institute Community Programme",
                value: "20,503",
              },
              { label: "Active Std Against Drug Abuse", value: "47,131" },
              { label: "Dnk % Social/Culture", value: "681" },
              { label: "Youth Reached by Govt", value: "77,687" },
              { label: "Nasha Mukt Social Programme", value: "5,705" },
              { label: "Art & Cultural", value: "1,461" },
            ].map((s) => (
              <div key={s.label}>
                <div className="nmba-program-stat-label">{s.label}</div>
                <div className="nmba-program-stat-value">{s.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Outreach */}
        <div className="nmba-program-card">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg sm:text-xl">🤝</span>
            <h3 className="nmba-program-title">Community Outreach</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Awareness/Community Programme", value: "9,019" },
              { label: "Community Awareness", value: "58,851" },
              { label: "Community Dep Programme", value: "53,541" },
              { label: "Media Campaign", value: "7,901" },
              { label: "Nasha Awareness Programme", value: "4,448" },
              { label: "All Youth And Development", value: "4,116" },
            ].map((s) => (
              <div key={s.label}>
                <div className="nmba-program-stat-label">{s.label}</div>
                <div className="nmba-program-stat-value">{s.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Governance & Local Bodies */}
        <div className="nmba-program-card">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg sm:text-xl">🏛️</span>
            <h3 className="nmba-program-title">Governance & Local Bodies</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "District Committee Meeting", value: "898" },
              { label: "People Event Coverage", value: "31,864" },
              { label: "Villages Covered", value: "39,296" },
              { label: "Panchayat", value: "4,602" },
            ].map((s) => (
              <div key={s.label}>
                <div className="nmba-program-stat-label">{s.label}</div>
                <div className="nmba-program-stat-value">{s.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Targeted Interventions */}
        <div className="nmba-program-card">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg sm:text-xl">🎯</span>
            <h3 className="nmba-program-title">Targeted Interventions</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Women Focus/Women's SHG Mahila Udyam", value: "9,515" },
              {
                label:
                  "All Data Youth Adults People Identification: National/Condition",
                value: "10,885",
              },
              { label: "People in 11 Yr Age", value: "39,088" },
              { label: "Total", value: "2,974" },
              {
                label: "Identification Driven On Supply Of Substance",
                value: "1,840",
              },
            ].map((s) => (
              <div key={s.label}>
                <div className="nmba-program-stat-label">{s.label}</div>
                <div className="nmba-program-stat-value">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-wide">
          RECENT ACTIVITIES ACROSS INDIA
        </h2>
        <Link
          to="/activity-snapshot"
          className="text-xs sm:text-sm text-blue-700 font-semibold no-underline hover:text-blue-800"
        >
          View all Activities →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {recentActivities.map((a) => (
          <div key={a.id} className="nmba-activity-card">
            <div
              className="h-32 sm:h-40 flex items-center justify-center text-4xl sm:text-5xl relative"
              style={{ backgroundColor: a.bgColor }}
            >
              {a.category === "Awareness Rally" && "🏫"}
              {a.category === "School Programme" && "🏫"}
              {a.category === "Panchayat Rally" && "🏘️"}
              <span
                className="nmba-activity-badge"
                style={{
                  backgroundColor: a.categoryBg,
                  color: a.categoryColor,
                }}
              >
                {a.category}
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-bold text-gray-900 mb-2">
                {a.title}
              </h3>
              <div className="flex justify-between text-xs text-gray-500">
                <span>📍 {a.location}</span>
                <span>📅 {a.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Find Facilities Banner */}
      <div className="nmba-facility-banner flex flex-col lg:flex-row gap-6 items-center p-6 sm:p-6 md:p-8">
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-bold mb-2">
            Find De-addiction Facilities Near You
          </h3>
          <p className="text-xs sm:text-sm opacity-90 mb-4">
            Locate verified Integrated Rehabilitation Centres (IRCAs), Outreach
            Centres (ODICs), and Addiction Treatment Facilities (ATFs) in your
            district.
          </p>
          <Link to="/facilities">
            <button className="px-5 py-2.5 rounded-md border-none bg-red-600 hover:bg-red-700 text-white font-semibold text-xs sm:text-sm cursor-pointer transition-colors">
              📍 View Facility Map →
            </button>
          </Link>
        </div>
        {/* Mini map placeholder */}
        <div className="w-full lg:w-48 h-36 rounded-lg bg-white/10 flex items-center justify-center text-4xl">
          🗺️
        </div>
      </div>
    </div>
  );
};

export default NmbaPublicDashboard;
