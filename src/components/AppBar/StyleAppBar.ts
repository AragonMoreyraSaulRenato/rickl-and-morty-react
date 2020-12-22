import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {PRIMARY_COLOR} from '../../colors'

export const useStyleAppBar = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			zIndex: 1,
		},
		appBar: {
			backgroundColor: PRIMARY_COLOR
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		title: {
			flexGrow: 1,
		},
		imageContainer: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
		imageLogo : {
			maxHeight: 32
		}
	}),
);
