import { createRoot } from "react-dom/client";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <MantineProvider>
    <Notifications position="top-right" />
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  </MantineProvider>,
);
