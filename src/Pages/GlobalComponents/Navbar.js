
import { NavLink, 
        useHistory} from 'react-router-dom'

import {useRef} from 'react'
import './Navbar.css'


const Navbar = (props) => {
    const history = useHistory();

    const backdropRef = useRef()
    const mobileRoutesRef = useRef()
    const burger2Ref = useRef()
    const burger1Ref = useRef()
    const burger3Ref = useRef()

    const goToContact = () => {
        history.push('/contact');
    }

    const showMenu = () => {
        mobileRoutesRef.current.classList.add('bruh')
        backdropRef.current.classList.add('yesDisplay')
        burger1Ref.current.classList.add('pressed1')
        burger3Ref.current.classList.add('pressed3')
        burger2Ref.current.classList.add('pressed2')
    }

    const removeMenu = ()=> {
        mobileRoutesRef.current.classList.remove('bruh')
        backdropRef.current.classList.remove('yesDisplay')
        burger1Ref.current.classList.remove('pressed1')
        burger3Ref.current.classList.remove('pressed3')
        burger2Ref.current.classList.remove('pressed2')
    }

    return (
        <>
        <div  className = "navContainer"> 
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
        <div className='navContainerMobile'>
            <div onClick={showMenu} className='burger'>
                <div ref={burger1Ref} className='burger1'></div>
                <div ref={burger2Ref} className='burger2'></div>
                <div ref={burger3Ref} className='burger3'></div>
            </div>
            <div ref={mobileRoutesRef} className='navRoutesMobile'>
            <div onClick={removeMenu} className='routerItemMobile'>
                 <NavLink activeClassName="navActiveMobile" className = "navMoblie" exact to="/">
                    Home
                    </NavLink> 
                </div>
                <div onClick={removeMenu} className='routerItemMobile'>
                 <NavLink activeClassName="navActiveMobile" className = "navMoblie" exact to="/commands">
                    Commands
                    </NavLink> 
                </div>
                <div onClick={removeMenu}  className = "routerItemMobile"> 
                    <NavLink activeClassName="navActiveMobile" className = "navMoblie" exact to="/contact">
                    Contact
                    </NavLink> 
                </div>      
            </div>
        </div>
        <div ref={backdropRef} onClick={removeMenu}  className='backdropNav'></div>        
        </ >
    )
}

export default Navbar