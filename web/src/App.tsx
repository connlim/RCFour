import React from "react"
import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import "./firebase/init.ts"

// routes
import HomePage from "./routes/HomePage"
import CreationPage from "./routes/CreationPage"

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path = "/" element = {<HomePage />} />
        <Route path = "/create" element = {<CreationPage />} />
      </Routes>
    </Layout>
  )

}

export default App;
