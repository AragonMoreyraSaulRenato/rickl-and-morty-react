import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { useStylesCharacterCard } from './StyleCharacterCard';
import { Character } from '../../classes';

import { average } from 'color.js'
import Color from 'color';
import { TEXT_WHITE_COLOR } from '../../colors';
import AliveStatus from '../AliveStatus/AliveStatus';

interface ICharacterCard {
   data?: Character,
   loading?: boolean
}


export default function CharacterCard(props: ICharacterCard): JSX.Element {
   const [color, setColor] = useState(TEXT_WHITE_COLOR);
   const classes = useStylesCharacterCard();
   const { data } = props;


   useEffect(() => {
      average(`${data?.image}`).then((colorDominat) => {
         const cardColor: string = Color(colorDominat).hex()
         setColor(cardColor);
      })
   }, [data?.image])


   return (
      <CardActionArea className={classes.actionArea} component={"section"}>
         <Card className={classes.card}>
            <CardMedia
               component="img"
               alt={data?.name}
               className={classes.media}
               image={data?.image}
               title={data?.name}
            />
            <CardContent
               className={classes.content}
               style={{ background: color || TEXT_WHITE_COLOR }}>
               <Typography variant="h6" component="p" className={classes.characterName}>
                  {data?.name}
               </Typography>
               <Typography variant="body2" component="p" className={classes.characterDetails} >
                  <AliveStatus status={data?.status} />
                  {data?.status} - {data?.species}
               </Typography>
            </CardContent>
         </Card>
      </CardActionArea>
   );
}
