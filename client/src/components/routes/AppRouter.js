import React from 'react';
import { BrowserRouter, Route ,Switch} from 'react-router-dom';
import Dashboard from '../Pages/Dashboard'
import UserPage from '../Pages/UserPage'
import LandingPage from '../Pages/LandingPage';
import AddBentoPage from '../Pages/AddBentoPage';
import EditBentoPage from '../Pages/EditBentoPage';
import NotFoundPage from '../Pages/NotFoundPage';
import LogInPage from '../Pages/LogInPage';

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Switch>
            <Route path='/' component={LandingPage} exact={true}/>
            <Route path='/home' component={UserPage}/>
            <Route path='/market' component={Dashboard}/>
            <Route path='/market/:variable' component={Dashboard}/>
            <Route path='/create' component={AddBentoPage} />
            <Route path='/edit/:id' component={EditBentoPage} />
            <Route path='/SignUp' component={NotFoundPage} />
            <Route path='/LogIn' component={LogInPage} />
            <Route component={NotFoundPage}/>
        </Switch>
    </div>
    </BrowserRouter>
)

export default AppRouter;
