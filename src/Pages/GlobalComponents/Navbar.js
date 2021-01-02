
import { NavLink, 
        BrowserRouter as Router, 
        useHistory} from 'react-router-dom'
import './Navbar.css'


const Navbar = (props) => {
    const history = useHistory();

    const goToContact = () => {
        history.push('/contact');
    }

    return (
        <div className = "navContainer"> 
            <div className = "navHero">
            <NavLink activeClassName="navActive" className = "navHeroo" exact to="/">
                    AlizeBot
                    </NavLink>  
                 </div>
            <div className = "navRoutes">
                <div className = "routerItem"> 
                    <NavLink activeClassName="navActive" className = "nav"exact to="/commands">
                    Commands
                    </NavLink> 
                </div>   
                <div  className = "routerItem"> 
                    <NavLink activeClassName="navActive" className = "nav"exact to="/contact">
                    Contact
                    </NavLink> 
                </div>      
            </div>
    
        </div>
    )
}

export default Navbar