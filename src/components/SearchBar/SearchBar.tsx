import React from 'react';
import { Grid } from '@material-ui/core'
//import MainLogo from '../../assets/img/mainlogo.png'
import { useStyleSearchBar } from './StyleSearchBar';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

function SearchBar() {
   const classes = useStyleSearchBar()
   return (
      <Grid container
         direction="column"
         justify="center"
         alignItems="center" >
         <Paper className={classes.root}>
            <InputBase
               className={classes.input}
               placeholder="Search Character"
               inputProps={{ 'aria-label': 'search rick and morty api' }}
            />
            <Divider className={classes.divider} orientation="vertical" />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
               <SearchIcon />
            </IconButton>
         </Paper>
      </Grid>
   )
}

export default SearchBar;
