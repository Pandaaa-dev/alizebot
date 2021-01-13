import {useEffect} from 'react'
import axios from 'axios'

const Invite = (props) => {
    useEffect(() =>{
        axios.get('https://alizebot.moe/stats').then(res => {
         window.location.replace(res.data.botInvite)
        })
     }, [])
     
    return (<div>You will be redirected right now!</div>)
}

export default Invite