import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Profile from "./components/Profile";
import "./firebase/init.ts";

// routes
import HomePage from "./routes/HomePage";
import CreationPage from "./routes/CreationPage";

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreationPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:uid" element={<Profile />} />
      </Routes>
    </Layout>
  );
};

export default App;
