import { RouterProvider } from 'react-router-dom'
import { appRouter } from './AppRouter'
import './App.css'
import React from 'react'

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={appRouter} />
    </React.Suspense>
  )
}

export default App
