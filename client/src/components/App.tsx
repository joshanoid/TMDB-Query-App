import * as React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { TMDB } from './TMDB'

const queryClient = new QueryClient()

export const App = () => (
    <QueryClientProvider client={queryClient}>
        <TMDB />
    </QueryClientProvider>
)
