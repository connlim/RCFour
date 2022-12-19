import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Profile from "./components/Profile";
import "./firebase/init.ts";
import CreationPage from "./routes/CreationPage";

// routes
import HomePage from "./routes/HomePage";

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
