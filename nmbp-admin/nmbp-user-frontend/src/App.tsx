import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const PublicLayout = lazy(() => import("./components/PublicLayout"));
const AdminLayout = lazy(() => import("./components/AdminLayout"));
const ProtectedRoute = lazy(() => import("./components/ProtectedRoute"));

// Auth
const Login = lazy(() => import("./pages/Login"));
const CentralLogin = lazy(() => import("./pages/CentralLogin"));
const StateLogin = lazy(() => import("./pages/StateLogin"));
const DistrictLogin = lazy(() => import("./pages/DistrictLogin"));

// Admin pages
const Dashboard = lazy(() => import("./pages/Dashboard"));
const CreateActivity = lazy(() => import("./pages/CreateActivity"));
const Activities = lazy(() => import("./pages/Activities"));
const Feedback = lazy(() => import("./pages/Feedback"));
const QrManagement = lazy(() => import("./pages/Admin/QrManagement/QrManagement"));
const AddQr = lazy(() => import("./pages/Admin/QrManagement/AddQr"));
const AllPledgeReport = lazy(() => import("./pages/Admin/AllPledgeReport"));
const BureauStatusReport = lazy(() => import("./pages/Admin/BureauStatusReport"));
const StateUtDistrictActivity = lazy(() => import("./pages/Admin/StateUtDistrictActivity"));
const ActivityDetails = lazy(() => import("./pages/ActivityDetails"));
const DnoListPage = lazy(() => import("./pages/DnoListPage"));
const ImportantDocuments = lazy(() => import("./pages/ImportantDocuments"));

// New pages
const UserManagement = lazy(() => import("./pages/UserManagement"));
const AddUser = lazy(() => import("./pages/AddUser"));
const EditUser = lazy(() => import("./pages/EditUser"));
const Reports = lazy(() => import("./pages/Reports"));
const DataEntryForm = lazy(() => import("./pages/DataEntryForm"));
const Profile = lazy(() => import("./pages/Profile"));
const ChangePassword = lazy(() => import("./pages/ChangePassword"));
const Notifications = lazy(() => import("./pages/Notifications"));
const Settings = lazy(() => import("./pages/Settings"));

// Public pages
const NmbaPublicDashboard = lazy(() => import("./pages/NmbaPublicDashboard"));
const Helpline = lazy(() => import("./pages/PublicDashboard"));
const Pledge = lazy(() => import("./pages/Pledge"));
const Facilities = lazy(() => import("./pages/Facilities"));
const ActivitySnapshot = lazy(() => import("./pages/ActivitySnapshot"));
const Help = lazy(() => import("./pages/Help"));

const Loading = () => (
  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", color: "#6B7280", fontFamily: "var(--font-family)" }}>
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "32px", marginBottom: "12px" }}>🏛️</div>
      <div>Loading...</div>
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
            <Route path="/qr-management" element={<QrManagement />} />
            <Route path="/add-qr" element={<AddQr />} />
            <Route path="/all-pledge-report" element={<AllPledgeReport />} />
            <Route path="/bureau-status-report" element={<BureauStatusReport />} />
            <Route path="/state-ut-district-activity" element={<StateUtDistrictActivity />} />
            <Route path="/dno-list" element={<DnoListPage />} />
            <Route path="/important-documents" element={<ImportantDocuments />} />
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
