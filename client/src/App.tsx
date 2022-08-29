import * as React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { Main } from 'pages/Main'

const queryClient = new QueryClient()

export const App = () => (
    <QueryClientProvider client={queryClient}>
        <Main />
    </QueryClientProvider>
)
