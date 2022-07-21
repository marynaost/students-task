import React, { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navigation from 'components/Navigation/Navigation'
import Loader from 'components/Loader/Loader'
import 'modern-normalize/modern-normalize.css'
import './App.css'
import './index.css'

const Archive = lazy(() =>
  import('pages/Archive' /* webpackChunkName: "archive-page" */),
)
const Analytics = lazy(() =>
  import('pages/Analytics' /* webpackChunkName: "analytics-page" */),
)
const Gradebooks = lazy(() =>
  import('pages/Gradebooks' /* webpackChunkName: "Gradebooks-page" */),
)
const Students = lazy(() =>
  import('pages/Students' /* webpackChunkName: "students-page" */),
)
const Teachers = lazy(() =>
  import('pages/Teachers' /* webpackChunkName: "teachers-page" */),
)
const Tests = lazy(() =>
  import('pages/Tests' /* webpackChunkName: "tests-page" */),
)

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
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
    </Suspense>
  )
}
