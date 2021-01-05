import React from 'react'
import { Typography } from '@material-ui/core';
import { useStyleNoResults } from './StylesNoResults';
import ImageNoResults from '../../assets/img/noresults.png';
import { Grid } from '@material-ui/core'

interface INoResults {
   search: string
}

export default function NoResults(props: INoResults) {
   const classes = useStyleNoResults();

   return (
      <Grid container
         direction="column"
         justify="center"
         alignItems="center"
      >
         <Typography variant="h3" gutterBottom>
            {`No character results for "${props.search}"`}
         </Typography>
         <div className={classes.root}>
            <img className={classes.image} alt="No Results" src={ImageNoResults} />
         </div>
      </Grid>
   )
}
