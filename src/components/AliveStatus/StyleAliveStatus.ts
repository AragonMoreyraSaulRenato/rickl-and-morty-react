import { red, green } from '@material-ui/core/colors';
import { makeStyles, createStyles } from '@material-ui/core/styles';


export const useStylesAliveStatus = makeStyles(() => createStyles({
   dot: {
      marginRight: 5,
      height: 10,
      width: 10,
      borderRadius: '50%',
      display: 'inline-block',
   },
   dotRed: {
      background: red[500]
   },
   dotGreen: {
      background: green[500]
   },
   dotWhite: {
      background: 'white'
   },
}));