import { RouterProvider } from 'react-router-dom'
import { appRouter } from './AppRouter'
import './App.css'
import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RecoilRoot } from 'recoil'

const queryClient = new QueryClient({
  defaultOptions: { queries: { suspense: true } },
})

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <React.Suspense fallback={<div>Global Loading...</div>}>
          <RouterProvider router={appRouter} />
        </React.Suspense>
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default App
