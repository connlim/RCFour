import React from "react"
import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import "./firebase/init.ts"
import CreationPage from "./routes/CreationPage"

// routes
import HomePage from "./routes/HomePage"

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
