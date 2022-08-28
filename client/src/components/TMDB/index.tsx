import * as React from 'react'
import { Box, IconButton, Stack, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

import './index.css'

export const TMDB = () => {
    const [searchTerm, setSearchTerm] = React.useState('')
    const searchFieldRef = React.useRef<HTMLInputElement>(null)

    return (
        <Stack spacing={2}>
            <Typography variant="h1" gutterBottom align="center">
                TMDB Query App
            </Typography>
            <Box width="100%" padding="0 5vw">
                <Stack direction="row" width="100%">
                    <TextField label="Search..." variant="outlined" fullWidth inputRef={searchFieldRef} />
                    <IconButton aria-label="search" onClick={() => setSearchTerm(searchFieldRef.current?.value ?? '')}>
                        <SearchIcon />
                    </IconButton>
                </Stack>
                {searchTerm}
            </Box>
        </Stack>
    )
}
