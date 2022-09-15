import {useContext} from 'react';
import FavoritesContext from '../store/favourites-context';
import MeetupList from '../components/meetups/MeetupList';
import classes from './Favourites.module.css';

function FavouritesPage () {
    const context = useContext(FavoritesContext);

    let content;

    if(context.totalFavorites ===0){
        content = <p>No favorites. Start adding some!</p>
    } else {
        content = <MeetupList meetups={context.favorites}/>
    }
    return <section>
        <h1 className={classes.head}>My Favorites</h1>
        {content}
    </section>;
}

export default FavouritesPage;