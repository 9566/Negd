import React from "react";
import { Badge, Button } from "@mantine/core";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import PageHeader from "../common/PageHeader/PageHeader";

const activityData: Record<
  string,
  {
    title: string;
    description: string;
    date: string;
    location: string;
    district: string;
    state: string;
    participants: number;
    male: number;
    female: number;
    status: string;
    organizer: string;
    photos: string[];
    videos: string[];
  }
> = {
  "1": {
    title: "Drawing Competition",
    description:
      "A drawing competition was organized to raise awareness about the ill effects of drug abuse among youth. Students from various schools participated enthusiastically and created beautiful artwork depicting a drug-free society.",
    date: "11/02/2026",
    location: "Community Hall, Amroha",
    district: "Amroha",
    state: "Uttar Pradesh",
    participants: 80,
    male: 40,
    female: 40,
    status: "Completed",
    organizer: "Ashok Kumar",
    photos: [],
    videos: [],
  },
  "2": {
    title: "Slogan Writing Competition",
    description:
      "A slogan writing competition to encourage creative expression against drug abuse. Participants wrote powerful slogans in Hindi and English, promoting awareness in the community.",
    date: "09/12/2025",
    location: "Town Hall, Ayodhya",
    district: "Ayodhya",
    state: "Uttar Pradesh",
    participants: 532,
    male: 232,
    female: 300,
    status: "Completed",
    organizer: "Rajesh Singh",
    photos: [],
    videos: [],
  },
  "3": {
    title: "Rangoli Making Competition",
    description:
      "Rangoli making competition organized on Republic Day to promote drug-free India message through art. Participants used vibrant colors to depict anti-drug themes.",
    date: "26/01/2026",
    location: "School Ground, Bhopal",
    district: "Bhopal",
    state: "Madhya Pradesh",
    participants: 150,
    male: 100,
    female: 50,
    status: "Completed",
    organizer: "Priya Sharma",
    photos: [],
    videos: [],
  },
};

const ActivityDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const role = user?.role || "district";

  const activity = activityData[id || "1"] || activityData["1"];

  return (
    <div>
      <PageHeader
        title="Activity Details"
        breadcrumbs={[
          { label: "Home", path: "/dashboard" },
          {
            label: role === "district" ? "My Activities" : "Activities",
            path: "/activities",
          },
          { label: activity.title },
        ]}
      />

      <div className="bg-white rounded-lg border border-gray-200 p-7">
        {/* Title & Status */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              {activity.title}
            </h2>
            <Badge
              color={
                activity.status === "Completed"
                  ? "green"
                  : activity.status === "In Progress"
                    ? "blue"
                    : "orange"
              }
              variant="light"
              size="md"
            >
              {activity.status}
            </Badge>
          </div>
          <div className="flex gap-2">
            {role === "district" && (
              <>
                <Button variant="outline" color="#1A56DB" size="sm">
                  ✏️ Edit
                </Button>
                <Button variant="outline" color="red" size="sm">
                  🗑 Delete
                </Button>
              </>
            )}
            {role === "state" && (
              <>
                <Button color="#057A55" size="sm">
                  ✅ Approve
                </Button>
                <Button variant="outline" color="red" size="sm">
                  ❌ Reject
                </Button>
              </>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-500 mb-2 uppercase">
            Description
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            {activity.description}
          </p>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-3 gap-5 mb-6">
          {[
            { label: "Event Date", value: activity.date, icon: "📅" },
            { label: "Location", value: activity.location, icon: "📍" },
            { label: "District", value: activity.district, icon: "🏘️" },
            { label: "State", value: activity.state, icon: "🗺️" },
            { label: "Organizer", value: activity.organizer, icon: "👤" },
            { label: "Status", value: activity.status, icon: "📋" },
          ].map((d) => (
            <div key={d.label} className="bg-gray-100 rounded-lg p-4">
              <div className="text-xs text-gray-500 mb-1">
                {d.icon} {d.label}
              </div>
              <div className="text-sm font-semibold text-gray-900">
                {d.value}
              </div>
            </div>
          ))}
        </div>

        {/* Participant Stats */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-500 mb-3 uppercase">
            Participants
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-blue-600">
                {activity.participants}
              </div>
              <div className="text-xs text-gray-500">Total Participants</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-green-700">
                {activity.male}
              </div>
              <div className="text-xs text-gray-500">Male</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-purple-600">
                {activity.female}
              </div>
              <div className="text-xs text-gray-500">Female</div>
            </div>
          </div>
        </div>

        {/* Photos Section */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-500 mb-3 uppercase">
            Photos
          </h3>
          {activity.photos.length > 0 ? (
            <div className="grid grid-cols-4 gap-3">
              {activity.photos.map((p, i) => (
                <div
                  key={i}
                  className="rounded-lg overflow-hidden aspect-video bg-gray-100"
                >
                  <img
                    src={p}
                    alt={`Photo ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-8 text-center text-gray-400 text-sm">
              📸 No photos uploaded
            </div>
          )}
        </div>

        {/* Videos Section */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-500 mb-3 uppercase">
            Videos
          </h3>
          {activity.videos.length > 0 ? (
            <div className="grid grid-cols-3 gap-3">
              {activity.videos.map((v, i) => (
                <video key={i} src={v} controls className="w-full rounded-lg" />
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-8 text-center text-gray-400 text-sm">
              🎬 No videos uploaded
            </div>
          )}
        </div>

        {/* Back Button */}
        <Button
          variant="outline"
          color="#1A56DB"
          onClick={() => navigate("/activities")}
        >
          ← Back to Activities
        </Button>
      </div>
    </div>
  );
};

export default ActivityDetails;
