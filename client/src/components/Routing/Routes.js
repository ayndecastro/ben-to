import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../Auth/Register';
import Login from '../Auth/Login';
import Dashboard from '../Dashboard/Dashboard';
import PrivateRoute from './PrivateRoutes';
import Bentos from '../Bentos/Bentos';
import Profiles from '../Profiles/Profiles';
import AddBento from '../Bento-Form/addBento';
import EditBento from '../Bento-Form/editBento';
import Profile from '../Profile/profile';
import EditProfile from '../Profile-Form/editProfile';
import CreateProfile from '../Profile-Form/createProfile';

const Routes = () => {
  return (
    <section>
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/bentos' component={Bentos} />
        <Route exact path='/profiles' component={Profiles} />
        <Route exact path='/profile/:id' component={Profile} />
        <PrivateRoute exact path='/edit-profile' component={EditProfile} />
        <PrivateRoute exact path='/create-profile' component={CreateProfile} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/add-bento' component={AddBento} />
        <PrivateRoute
          exact
          path='/bento/edit-bento/:id'
          component={EditBento}
        />
      </Switch>
    </section>
  );
};

export default Routes;
