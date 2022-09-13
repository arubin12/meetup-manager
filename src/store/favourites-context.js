import { createContext } from "react";
import { useState } from "react";

const FavoritesContext = createContext(
    {
        favorites: [],
        totalFavorites: 0,
        addFavorite: (favoriteMeetup) => {},
        removeFavorite: (meetupId) => {},
        isFavorite: (meetupId) => {}
    }
);

export function FavoritesContextProvider(props){
    const [userFavorites, setUserFavorites] = useState([]);

    function addfavoriteHandler(favoriteMeetup) {
        setUserFavorites((prev) => {
            return prev.concat(favoriteMeetup);
        });
    }

    function removeFavoriteHandler(meetupId){
        setUserFavorites(prev => {
            return prev.filter(meetup => meetupId !== meetup.id)
        });
    }
    function itemIsFavorite(meetupId){
        return userFavorites.some(meetup => meetup.id === meetupId)
    }
    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addfavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        isFavorite: itemIsFavorite
    };


    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;