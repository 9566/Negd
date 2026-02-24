import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const PublicLayout = lazy(
  () => import("./components/PublicLayout/PublicLayout"),
);
const AdminLayout = lazy(() => import("./components/AdminLayout/AdminLayout"));
const ProtectedRoute = lazy(
  () => import("./components/ProtectedRoute/ProtectedRoute"),
);

// Auth

const Login = lazy(() => import("./components/Login/Login"));
const CentralLogin = lazy(
  () => import("./components/CentralLogin/CentralLogin"),
);
const StateLogin = lazy(() => import("./components/StateLogin/StateLogin"));
const DistrictLogin = lazy(
  () => import("./components/DistrictLogin/DistrictLogin"),
);

// Admin pages
const Dashboard = lazy(() => import("./components/Dashboard/Dashboard"));
const CreateActivity = lazy(
  () => import("./components/CreateActivity/CreateActivity"),
);
const Activities = lazy(() => import("./components/Activities/Activities"));
const Feedback = lazy(() => import("./components/Feedback/Feedback"));
const AllPledgeReport = lazy(
  () => import("./components/AllPledgeReport/AllPledgeReport"),
);
const BureauStatusReport = lazy(
  () => import("./components/BureauStatusReport/BureauStatusReport"),
);
const ActivityDetails = lazy(
  () => import("./components/ActivityDetails/ActivityDetails"),
);
const DnoListPage = lazy(() => import("./components/DnoListPage/DnoListPage"));
const ImportantDocuments = lazy(
  () => import("./components/ImportantDocuments/ImportantDocuments"),
);

// New pages
const UserManagement = lazy(
  () => import("./components/UserManagement/UserManagement"),
);
const AddUser = lazy(() => import("./components/AddUser/AddUser"));
const EditUser = lazy(() => import("./components/EditUser/EditUser"));
const Reports = lazy(() => import("./components/Reports/Reports"));
const DataEntryForm = lazy(
  () => import("./components/DataEntryForm/DataEntryForm"),
);
const Profile = lazy(() => import("./components/Profile/Profile"));
const ChangePassword = lazy(
  () => import("./components/ChangePassword/ChangePassword"),
);
const Notifications = lazy(
  () => import("./components/Notifications/Notifications"),
);
const Settings = lazy(() => import("./components/Settings/Settings"));

// Public pages
const NmbaPublicDashboard = lazy(
  () => import("./components/NmbaPublicDashboard/NmbaPublicDashboard"),
);
const Helpline = lazy(
  () => import("./components/PublicDashboard/PublicDashboard"),
);
const Pledge = lazy(() => import("./components/Pledge/Pledge"));
const Facilities = lazy(() => import("./components/Facilities/Facilities"));
const ActivitySnapshot = lazy(
  () => import("./components/ActivitySnapshot/ActivitySnapshot"),
);
const Help = lazy(() => import("./components/Help/Help"));

const Loading = () => (
  <div className="flex items-center justify-center h-screen bg-gray-50">
    <div className="text-center">
      <div className="text-5xl mb-4 animate-pulse">🏛️</div>
      <div className="text-base font-medium text-gray-700">Loading...</div>
      <div className="mt-4 flex justify-center gap-2">
        <span className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></span>
        <span className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-100"></span>
        <span className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-200"></span>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Public routes — with sidebar */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<NmbaPublicDashboard />} />
          <Route path="/dashboard-public" element={<NmbaPublicDashboard />} />
          <Route path="/helpline" element={<Helpline />} />
          <Route path="/pledge" element={<Pledge />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/activity-snapshot" element={<ActivitySnapshot />} />
          <Route path="/help" element={<Help />} />
        </Route>

        {/* Login */}
        <Route path="/login" element={<Login />} />
        <Route path="/login/central" element={<CentralLogin />} />
        <Route path="/login/state" element={<StateLogin />} />
        <Route path="/login/district" element={<DistrictLogin />} />

        {/* Protected admin routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<AdminLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/activity-details/:id" element={<ActivityDetails />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/all-pledge-report" element={<AllPledgeReport />} />
            <Route
              path="/bureau-status-report"
              element={<BureauStatusReport />}
            />
            <Route path="/dno-list" element={<DnoListPage />} />
            <Route
              path="/important-documents"
              element={<ImportantDocuments />}
            />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/edit-user/:id" element={<EditUser />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/data-entry" element={<DataEntryForm />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Route>

        {/* District-only route */}
        <Route element={<ProtectedRoute allowedRoles={["district"]} />}>
          <Route element={<AdminLayout />}>
            <Route path="/create-activity" element={<CreateActivity />} />
          </Route>
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default App;
