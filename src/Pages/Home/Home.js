import {useEffect, useState} from 'react'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import CountUp from 'react-countup';
import './home.css'

 

const Home = (props) => {
    const [invLink, setInvLink] = useState('')
    const [presentServerNum, setPresentServerNum] = useState(0);
    const [showServerNum, setShowServerNum] = useState(0);
    const [presentCMDNum, setPresentCMDNum] = useState(0)


    useEffect(() =>{
        fetch('http://51.210.181.245:10009/stats')
        .then(res => res.json())
        .then(res => {
            console.log(res)
            setInvLink(res.botInvite);
            setPresentServerNum(res.servers);
            setPresentCMDNum(res.commands)
            console.log(res.servers)
        })
       
    }, [])

    // useEffect(() => {
    //     if(presentServerNum > 0) {
    //         for(let i=0; i< presentServerNum; i++){
    //            setTimeout(()=> {
    //             setShowServerNum(i+1)
    //            }, 500)
    //         }
    //     }
    // }, [presentServerNum])

    return (
        <div className ="HomeContainer">
            <div className = "homeContainerBackdrop">
                <div className = 'homePfpIcon'>

                </div>
                <div className = 'homeTitle'>
                    A simple bot for all your needs!
                </div>
                <div className = 'homeDesc'>
                    All your bot needs within one bot. Invite it now!
                </div>
                <div className='presentTitles'> Presently in <CountUp end={presentServerNum} duration={1.5}  /> servers with <CountUp end={presentCMDNum} duration={1.5}  /> commands</div>
                <div className = 'homeButtons'>
                 <a className='link' href={invLink} target='_blank'>  <Button className ="btn InviteBtn" variant= "contained" color= "primary">Invite</Button> </a>
                <Link className='link' to='/commands'> <Button className ="btn CommandsBtn" variant= "outlined" color= "primary">Commands</Button> </Link>
                </div>
            </div>
        </div>
    )
}

export default Home