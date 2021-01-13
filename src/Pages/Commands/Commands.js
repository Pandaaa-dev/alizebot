import { useEffect, useState } from 'react'
import './commands.css'
import Loader from 'react-loader-spinner'
import Box from '@material-ui/core/Box';
import MobileCommands from '../MobileCommands/MobileCommands'
import axios from 'axios'
import {Fade} from 'react-awesome-reveal'


const Command = (props) => {
    const [modules, setModules] = useState([])
    const [activeModule, setActiveModule] = useState()
    const [presentCommands , setPresentCommands] = useState({
        commands: []
    })
    const setNewActiveModule = (categoryName) => {
        setActiveModule(categoryName)
    }
    useEffect(()=> {
        axios.get('https://alizebot.moe/category').then(res => {
            // res = res.data
            setModules( res.data)
            const commands = modules.find(moduleSing => moduleSing.categoryName == activeModule)
            setPresentCommands(commands)
        })
    }, [])

    useEffect(()=> {
        const commands = modules.find(moduleSing => moduleSing.categoryName == activeModule)
        setPresentCommands(commands)
        const presentActiveEl = document.getElementsByClassName('active')
        if(presentActiveEl.length){
            presentActiveEl[0].classList.remove('active')
        }
       const activeElement =  document.getElementsByClassName(activeModule);
        if(activeElement.length < 1) return
        activeElement[0].classList.add('active')
    }, [activeModule])



    return (
        <div className="commandsContainer">
          {modules.length == 0 &&  <Loader  type="Bars"
                                    color="#7e7e7e"
                                    height={100}
                                    width={100}
                                    className='loader'
                                    timeout={3000} />}  
          {modules.length > 0 &&  
           <div className = "commandsMainContainer">
                <Box display={{ xs: 'none', md: 'block' }} className = "modules">
                    <ul className ='moduleList'>
                        <Fade duration={500} triggerOnce cascade direction='up'>
                        {modules.map(category => {
                            return(
                            <li onClick={() => setNewActiveModule(category.categoryName)} className= "moduleListItem" key= {category.categoryName  }>
                                <div className={'moduleWrapper' + ` ${category.categoryName}` }  >
                                     {category.categoryName}
                                 </div>
                            </li>
                            )
                        })}
                        </Fade>
                    </ul>
                </Box>
                <MobileCommands id='cmd' modules = {modules} setActiveModule = {setActiveModule} />
                   {presentCommands &&(
                   <div className ="commands">
                        <ul className = 'commandList'>
                        <Fade duration={500} triggerOnce cascade direction='up'>
                            {presentCommands.commands.map(command => {
                                    return(
                                        <li key = {command.commandName} className ="commandListItem">
                                            <div className="commandWrapper">
                                                <div className='commandTitle'>
                                                    {command.commandName} 
                                                </div>
                                                {command.subCommands.length > 0 && (
                                                    <div className="subcmd">
                                                      Sub Commands:  {command.subCommands.filter(cmd => cmd.length).join(' ')}
                                                    </div>
                                                )}
                                                <div className="helpText">
                                                    {command.helpText.split("<br>").filter(line => line.length).map(line => {
                                                    return(
                                                        <div key = {line}>{line}</div>
                                                    )
                                                    })}
                                              </div> 
                                            </div>
                                        </li>
                                    )
                                })
                            }
                            </Fade>
                        </ul>
                     </div>
                     )}
             </div>}
        </div>
    )
}

export default Command