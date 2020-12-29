
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { TEXT_WHITE_COLOR, PRIMARY_COLOR, SECONDARY_COLOR } from '../../colors';

export const useStylesCharacters = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         "& .MuiPaginationItem-root": {
            color: TEXT_WHITE_COLOR
         },
         "& .Mui-selected": {
            background: PRIMARY_COLOR,
            '&:hover': {
               background: SECONDARY_COLOR,
            },
         }
      },
   }),
);