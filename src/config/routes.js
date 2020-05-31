import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom';

import PrivateRoute from '../utils/privateRoute';
import Home from '../screens/home';
import Details from '../screens/details';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../utils/theme/global';
import { lightTheme, darkTheme } from '../utils/theme/theme';
import { useSelector } from 'react-redux';

const Routes = () => {
  const themeG = useSelector(state => state.themes.themeActuel);

  return (
    <ThemeProvider theme={`${themeG}` === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/details/:index :query' component={Details} />
          <Redirect to='/'></Redirect>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default Routes;
