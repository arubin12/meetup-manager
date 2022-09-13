import React from 'react';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import {useContext} from 'react';
import FavoritesContext from '../../store/favourites-context';

function MeetupItem (props) {
    const context = useContext(FavoritesContext);
    const isFav = context.isFavorite(props.id);

    function toggleFavorite(meetup){
        if(isFav){
            context.removeFavorite(props.id);
        } else {
            context.addFavorite({
                id: props.id,
                title: props.title,
                image: props.image,
                address: props.address,
                description: props.description
            });
        }
    }

    return( 
    <Card>    
    <li className={classes.item}>
        <div className={classes.image}>
            <img src={props.image} alt={props.title}/>
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
            <button onClick={toggleFavorite}>{isFav? 'Remove From Favorites': 'To Favorites'}</button>
        </div>
    </li>
    </Card>
    );
}

export default MeetupItem;