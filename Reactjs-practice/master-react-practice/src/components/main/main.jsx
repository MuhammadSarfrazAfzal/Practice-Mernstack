import React from 'react'
import { Grid } from '@mui/material'
import Left from './left'
import Right from './right'
import Display from './display'
const Main = () => {
  return (
    <div>
        <Grid container>
            <Grid item xs={3}><Left></Left></Grid>
            <Grid item xs={6}><Display></Display></Grid>
            <Grid item xs={3}><Right></Right></Grid>
        </Grid>
    </div>
  )
}

export default Main
