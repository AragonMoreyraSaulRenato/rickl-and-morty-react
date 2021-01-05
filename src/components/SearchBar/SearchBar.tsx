import React, { useState } from 'react';
import { Grid } from '@material-ui/core'
//import MainLogo from '../../assets/img/mainlogo.png'
import { useStyleSearchBar } from './StyleSearchBar';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

interface ISearchBar {
   onSearch: (search: string) => void,
}

function SearchBar(props: ISearchBar) {
   const classes = useStyleSearchBar();
   const [search, setSearch] = useState("");

   const handleSearch = (event: React.ChangeEvent<unknown>) => {
      event.preventDefault();
      props.onSearch(search);
   }

   return (
      <Grid container
         direction="column"
         justify="center"
         alignItems="center" >
         <form>
            <Paper className={classes.root}>
               <InputBase
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className={classes.input}
                  placeholder="Search Character..."
                  inputProps={{ 'aria-label': 'search rick and morty api' }}
               />
               <Divider className={classes.divider} orientation="vertical" />
               <IconButton
                  type="submit"
                  className={classes.iconButton}
                  aria-label="search"
                  onClick={handleSearch}>
                  <SearchIcon />
               </IconButton>
            </Paper>
         </form>
      </Grid>
   )
}

export default SearchBar;
