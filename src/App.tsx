import React, { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import ErrorPage from './components/ErrorPage'

import Layout from './components/Layout/Layout'

const App = () => {
    const queryClient = new QueryClient()
    const onReset = () => {
        window.location.reload()
    }

    return (
        <QueryClientProvider client={queryClient}>
            <ErrorBoundary
                FallbackComponent={ErrorPage}
                onReset={onReset}
            >
                <BrowserRouter>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Layout />
                    </Suspense>
                </BrowserRouter>
            </ErrorBoundary>
        </QueryClientProvider>
    )
}

export default App
