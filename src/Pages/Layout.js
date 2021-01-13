// "homepage": "https://pandaaa-dev.github.io/alizebot/"

import Navbar from './GlobalComponents/Navbar'
import Home from './Home/Home'
import Commands from './Commands/Commands'
import Invite from './Invite/Invite'
import Contact from './Contact/Contact'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {Switch, 
       BrowserRouter as Router,
       Route} from 'react-router-dom'
const theme = createMuiTheme({
    palette: {
       primary: {
          light: '#fff',
          main: 'rgb(189,0,102)',
          dark:  "rgb(189,69,95)"
       },
       secondary: {
         main: '#f44336',
       },
    },
 });
const Layout = (props) => {
    return (
        <ThemeProvider theme = {theme}>
        <Router>
        <Navbar />
        <Switch>
        
        <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/commands">
            <Commands />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path='/invite'>
            <Invite />
            </Route>
        </Switch>
        </Router>
       </ ThemeProvider>  
    )
}

export default Layout