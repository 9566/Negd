import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";

// Pages
import Dashboard from "./pages/Dashboard";
import PublicDashboard from "./pages/PublicDashboard";
import Login from "./pages/Login";
import Activities from "./components/Activities/Activities";
import ActivitySnapshot from "./components/ActivitySnapshot/ActivitySnapshot";
import Pledge from "./pages/Pledge";
import Facilities from "./pages/Facilities";
import Helpline from "./pages/Helpline";
import DnoList from "./pages/DnoList";
import ImportantDocuments from "./pages/ImportantDocuments";
import Feedback from "./pages/Feedback";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import StateAdminDashboard from "./pages/StateAdminDashboard";
import DistrictAdminDashboard from "./pages/DistrictAdminDashboard";
import Unauthorized from "./pages/Unauthorized";
import Signup from "./pages/Signup";
import CreateActivity from "./pages/CreateActivity";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/public-dashboard" element={<PublicDashboard />} />
        <Route path="/pledge" element={<Pledge />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/helpline" element={<Helpline />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Home Redirect */}
        <Route path="/" element={<Navigate to="/public-dashboard" replace />} />

        {/* Authenticated Routes with Role Guards */}
        <Route element={<Layout />}>
          {/* Dashboard - Central Only */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute allowedRoles={["central"]}>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* District Overview - Central & State Only */}
          <Route
            path="/state-dashboard"
            element={
              <ProtectedRoute allowedRoles={["central", "state"]}>
                <StateAdminDashboard />
              </ProtectedRoute>
            }
          />

          {/* District Specific View - Central, State, District */}
          <Route
            path="/district-dashboard"
            element={
              <ProtectedRoute allowedRoles={["central", "state", "district"]}>
                <DistrictAdminDashboard />
              </ProtectedRoute>
            }
          />

          {/* Activities List - All Roles (View is scoped by auth context) */}
          <Route
            path="/activities"
            element={
              <ProtectedRoute allowedRoles={["central", "state", "district"]}>
                <Activities />
              </ProtectedRoute>
            }
          />

          {/* Create Activity - District Only */}
          <Route
            path="/activities/create"
            element={
              <ProtectedRoute allowedRoles={["district"]}>
                <CreateActivity />
              </ProtectedRoute>
            }
          />

          {/* Activity Gallery */}
          <Route path="/activity-snapshot" element={<ActivitySnapshot />} />

          {/* Admin Management */}
          <Route
            path="/dno-list"
            element={
              <ProtectedRoute allowedRoles={["central", "state"]}>
                <DnoList />
              </ProtectedRoute>
            }
          />

          {/* System Pages */}
          <Route path="/documents" element={<ImportantDocuments />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* Catch All */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
