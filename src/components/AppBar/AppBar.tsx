import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { useStyleAppBar } from './StyleAppBar';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
export default function ButtonAppBar() {
	const classes = useStyleAppBar();

	return (
		<div className={classes.root}>
			<AppBar position="static" className={classes.appBar}>
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
					>
						<Link to="/" className={classes.imageContainer}>
							<img src={Logo} alt="Logo" className={classes.imageLogo} />
						</Link>
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						Rick and Morty App
          		</Typography>
					<Button to="/characters" color="inherit" component={Link}>Characters</Button>
					<Button to="/episodies" color="inherit" component={Link}>Episodies</Button>
					<Button to="/locations" color="inherit" component={Link}>Locations</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}