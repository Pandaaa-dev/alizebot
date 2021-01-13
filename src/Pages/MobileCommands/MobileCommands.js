import {useEffect, useState} from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import axios from 'axios'

const MobileCommands = ({modules, setActiveModule}) => {
    const [mobileActiveModule, setMobileActiveModule] = useState('None')
    const [open, setOpen] = useState(false);
    const [presentCommands, setPresentCommands] = useState(null)
    const handleChange = (event) => {
      setActiveModule(event.target.value);
      setMobileActiveModule(event.target.value)
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };

    return (
        <div className="mobileCommandsContainer">
            <Box display={{ xs: 'block', md: 'none' }} className='modules'>
                <FormControl className = 'form' >
                    <InputLabel id="demo-controlled-open-select-label">Module</InputLabel>
                        <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={mobileActiveModule}
                        onChange={handleChange}
                        >
                        <MenuItem value=""><em>None</em></MenuItem>
                            {/* <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem> */}
                            {
                                modules != undefined && modules.length > 0? modules.map(module => {
                                    // console.log(module)
                                    return <MenuItem key={module.categoryName} value={module.categoryName}>{module.categoryName}</MenuItem>
                                }) : null
                            }
                        </Select>
                </FormControl>
            </Box>
        </div>
    )
}

export default MobileCommands