import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navigation from 'components/Navigation/Navigation'
import Analytics from 'pages/Analytics'
import Archive from 'pages/Archive'
import Gradebooks from 'pages/Gradebooks'
import Students from 'pages/Students'
import Teachers from 'pages/Teachers'
import Tests from 'pages/Tests'
import 'modern-normalize/modern-normalize.css'
import './App.css'

export default function App() {
  return (
    // <div
    //   style={{
    //     maxWidth: '1440px',
    //     marginLeft: 'auto',
    //     marginRight: 'auto',
    //     paddingLeft: '40px',
    //     paddingRight: '40px',
    //   }}
    // >
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Navigate to="/students" />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="gradebooks" element={<Gradebooks />} />
        <Route path="tests" element={<Tests />} />
        <Route path="students" element={<Students />} />
        <Route path="teachers" element={<Teachers />} />
        <Route path="archive" element={<Archive />} />
      </Route>
    </Routes>
    // </div>
  )
}
