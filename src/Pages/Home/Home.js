import {useEffect, useState} from 'react'
import Button from '@material-ui/core/Button';
import axios from 'axios'
import CountUp from 'react-countup';
import './home.css'
import {JackInTheBox, Fade} from 'react-awesome-reveal'
 

const Home = (props) => {
    const [invLink, setInvLink] = useState('')
    const [supportServerLink, setSupportServerLink] = useState('')
    const [presentServerNum, setPresentServerNum] = useState(0);
    // const [showServerNum, setShowServerNum] = useState(0);
    const [presentCMDNum, setPresentCMDNum] = useState(0)


    useEffect(() =>{
       axios.get('https://alizebot.moe/stats').then(res => {
        setInvLink(res.data.botInvite);
        setPresentServerNum(res.data.servers);
        setPresentCMDNum(res.data.commands)
        setSupportServerLink(res.data.supportServer)
       })
    }, [])


    return (
        <div className ="HomeContainer">
            <div className = "homeContainerBackdrop">
               <JackInTheBox triggerOnce>
                   <div className = 'homePfpIcon animate__animated animate__bounce'>
                     </div>
                   </JackInTheBox> 
               <Fade cascade direction='up' triggerOnce>
                <div className = 'homeTitle'>
                    A simple bot for all your needs!
                </div>
                
                <div className = 'homeDesc animate__animated animate__bounce'>
                    All your bot needs within one bot. Invite it now!
                </div>
                <div className='presentTitles'> Presently in <CountUp end={presentServerNum} duration={1.5}  /> servers with <CountUp end={presentCMDNum} duration={1.5}  /> commands</div>
                <div className = 'homeButtons'>
                 <a className='link' href={invLink} target='_blank'>  <Button className ="btn InviteBtn" variant= "contained" color= "primary">Invite</Button> </a>
                 <a className='link' href={supportServerLink} target='_blank'>  <Button className ="btn supportBtn" variant= "outlined" color= "primary">Support</Button> </a>
                {/* <Link className='link' to='/alizebot/commands'> <Button className ="btn CommandsBtn" variant= "outlined" color= "primary">Commands</Button> </Link> */}
                </div>
                </Fade>
            </div>
        </div>
    )
}

export default Home