import * as React from 'react'
import { useQuery } from '@tanstack/react-query'
import {
    Box,
    CircularProgress,
    Paper,
    TableContainer,
    Table,
    TableBody,
    TableRow,
    TableCell,
    TablePagination,
    TableHead,
} from '@mui/material'

import { fetchMovies } from 'utils/api'
import { Genre } from 'utils/types'

type Props = {
    searchTerm: string
    genres: ReadonlyArray<Genre>
}

export const Movies = ({ searchTerm, genres }: Props) => {
    const [page, setPage] = React.useState(1)
    const { data } = useQuery(['movies', searchTerm, page], () => fetchMovies(searchTerm, page), {
        enabled: !!searchTerm,
    })

    const genresObject: Record<number, string> = genres.reduce(
        (previous, genre) => ({ ...previous, [genre.id]: genre.name }),
        {},
    )

    return (
        <Paper sx={{ width: '100%', mb: 2 }}>
            {data ? (
                <Box>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="right">Genres</TableCell>
                                    <TableCell align="right">Release Date</TableCell>
                                    <TableCell align="right">Votes</TableCell>
                                    <TableCell align="right">Popularity</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.results.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell component="th" scope="row">
                                            {row.title}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.genre_ids.map((id) => genresObject[id]).join(',')}
                                        </TableCell>
                                        <TableCell align="right">{row.release_date}</TableCell>
                                        <TableCell align="right">{row.vote_count}</TableCell>
                                        <TableCell align="right">{row.popularity}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[]}
                        component="div"
                        count={data.total_results}
                        rowsPerPage={20}
                        page={page}
                        onPageChange={(_event, selectedPage) => setPage(selectedPage)}
                    />
                </Box>
            ) : (
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress /> Loading
                </Box>
            )}
        </Paper>
    )
}
