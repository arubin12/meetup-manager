import {Route, Switch} from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupsPage from './pages/NewMeetups';
import FavouritesPage from './pages/Favourites';
import Layout from './components/layout/Layout';

function App() {
  return (
  <Layout>
    <Switch> 
      <Route path='/new-meetups'>
        <NewMeetupsPage/>
      </Route>
      <Route path='/favourites'>
        <FavouritesPage/>
      </Route>
      <Route path='/'>
        <AllMeetupsPage/>
      </Route>
    </Switch>
  </Layout>
  );
}

export default App;
