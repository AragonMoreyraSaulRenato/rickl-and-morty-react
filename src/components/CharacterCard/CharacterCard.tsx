import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useStylesCharacterCard } from './StyleCharacterCard';
import { Character } from '../../classes';
import { average } from 'color.js'
import Color from 'color';

interface ICharacterCard {
   data?: Character,
}


export default function CharacterCard(props: ICharacterCard): JSX.Element {
   const [color, setColor] = useState('');
   const classes = useStylesCharacterCard();
   const { data } = props;


   average(`${data?.image}`).then((colorDominat) => {
      const cardColor: string = Color(colorDominat).hex()
      setColor(cardColor);
   })

   return (
      <CardActionArea className={classes.actionArea}>
         <Card className={classes.card}>
            <CardMedia
               component="img"
               alt="Contemplative Reptile"
               className={classes.media}
               image={data?.image}
               title="Contemplative Reptile"
            />
            <CardContent
               className={classes.content}
               style={{ background: color }}>
               <Typography gutterBottom variant="h5" component="h2">
                  Lizard
          </Typography>
               <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread
          </Typography>
            </CardContent>
         </Card>
      </CardActionArea>
   );
}
