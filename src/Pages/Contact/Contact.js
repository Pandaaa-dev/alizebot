import './contact.css'
import {useEffect, useState} from 'react'
import axios from 'axios'
import { Fade} from 'react-awesome-reveal'

const Contact = (props) => {

    const [supportServerLink, setSupportServerLink] = useState('')

    useEffect(() =>{
        axios.get('https://alizebot.moe/stats').then(res => {
         setSupportServerLink(res.data.supportServer)
        })
     }, [])





    return (
        <div className="contactContainer">
            <Fade cascade duration={500} direction='left' >
            <div className='botDev'>   
                Bot Developer: <br></br>
                Pitohui ピト#3790
            </div>
            <div className='contactSupportServer'>
            You can also contact me on my support server <a className='link support' href={supportServerLink} target='_blank'>here </a>
            </div>
            </Fade >
            <div className='webDev'>
            <Fade delay={1000} direction='up'>
                Web developer: Pandaa#0001
            </Fade>
            </div>
            
        </div>
    )
}

export default Contact