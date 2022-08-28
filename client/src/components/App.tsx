import * as React from 'react'
import { Box, IconButton, Stack, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

import './App.css'

export const App = () => (
    <Stack spacing={2}>
        <Typography variant="h1" gutterBottom align="center">
            TMDB Query App
        </Typography>
        <Box width="100%" padding="0 5vw">
            <Stack direction="row" width="100%">
                <TextField label="Search..." variant="outlined" fullWidth />
                <IconButton aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Stack>
        </Box>
    </Stack>
)
