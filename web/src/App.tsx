import React from "react"
import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import "../firebase/init.js"

// routes
import HomePage from "./routes/HomePage"

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path = "/" element = {<HomePage />} />
      </Routes>
    </Layout>
  )

}

export default App;
