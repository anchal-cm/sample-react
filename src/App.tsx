import { RouterProvider } from 'react-router-dom'
import { appRouter } from './AppRouter'
import './App.css'
import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: { queries: { suspense: true } },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <React.Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={appRouter} />
      </React.Suspense>
    </QueryClientProvider>
  )
}

export default App
