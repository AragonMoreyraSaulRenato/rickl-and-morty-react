import { makeStyles, createStyles } from '@material-ui/core/styles';
import Color from 'color';
import { BACKGROUND_COLOR } from '../../colors';


export const useStylesCharacterCard = makeStyles(() => createStyles({
   actionArea: {
      maxWidth: 256,
      borderRadius: 16,
      transition: '0.2s',
      '&:hover': {
         transform: 'scale(1.1)',
      },
   },
   card: {
      background: BACKGROUND_COLOR,
      borderRadius: 16,
      boxShadow: 'none',
      '&:hover': {
         boxShadow: `0 6px 12px 0 ${Color('#FFFFFF').rgb()
            .rotate(-12)
            .darken(0.2)
            .fade(0.5)}`,
      }
   },
   content: {
      padding: '1rem 1.5rem 1.5rem',
   },
   media: {
      height: 256,
   },
}));