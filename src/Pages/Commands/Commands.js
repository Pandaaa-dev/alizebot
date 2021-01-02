import { useEffect, useState } from 'react'
import './commands.css'
import Loader from 'react-loader-spinner'


const Command = (props) => {
    const [modules, setModules] = useState([])
    const [activeModule, setActiveModule] = useState()
    const [presentCommands , setPresentCommands] = useState({
        commands: []
    })
    const setNewActiveModule = (categoryName) => {
        setActiveModule(categoryName)
        // console.log(modules.find)
        const presentCommands  = modules.find(moduleSing => moduleSing.categoryName == activeModule )
       console.log(presentCommands)
    }
    useEffect(()=> {
        console.log(modules.length)
        fetch('/category')
        .then(res => res.json())
        .then(res => {
            setModules(res)
            console.log(res)
            const commands = modules.find(moduleSing => moduleSing.categoryName == activeModule)
            setPresentCommands(commands)
        })
        .catch(err => console.log(err))

    }, [])

    useEffect(()=> {
        
        const commands = modules.find(moduleSing => moduleSing.categoryName == activeModule)
        setPresentCommands(commands)
        const presentActiveEl = document.getElementsByClassName('active')
        if(presentActiveEl.length){
            presentActiveEl[0].classList.remove('active')
        }
       const activeElement =  document.getElementsByClassName(activeModule);
        console.log(activeElement[0])   
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
                <div className = "modules">
                    <ul className ='moduleList'>
                        {modules.map(category => {
                            return(

                            <li onClick={() => setNewActiveModule(category.categoryName)} className= "moduleListItem" key= {category.categoryName  }>
                                <div className={'moduleWrapper' + ` ${category.categoryName}` }  >
                                     {category.categoryName}
                                 </div>
                            </li>
                            )
                        })}
                    </ul>
                </div>
                   {presentCommands &&(
                   <div className ="commands">
                        <ul className = 'commandList'>
                            {presentCommands.commands.map(command => {
                                console.log(command)
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
                                                        <div>{line}</div>
                                                    )
                                                    })}
                                              </div> 
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                     </div>)}
             </div>}
        </div>
    )
}

export default Command