import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { faCartShopping, faChevronDown, faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Header() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }} >
                <AppBar position="static" sx={{ backgroundColor: "black" }} style={{ height: '70px' }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <img src="public/norton.png" alt="norton image" width={"160px"} style={{ position: "relative", top: "5px" }} />
                        <Typography component="div" sx={{ mr: 4, fontSize: "12px", fontWeight: 'bold', marginTop: '10px' }}>

                            MODELS <FontAwesomeIcon
                                icon={faChevronDown}
                                style={{
                                    fontSize: "8px",
                                    marginLeft: "5px",
                                    position: "relative",
                                    top: "-2px"
                                }}
                            />

                        </Typography>
                        <Typography component="div" sx={{ mr: 4, fontSize: "12px", fontWeight: 'bold', marginTop: '10px' }}>
                            CASUAL WEAR
                        </Typography>

                        <Box sx={{ flexGrow: 1 }} />

                     


                        <Typography component="div" sx={{ mr: 4, fontSize: "12px", fontWeight: 'bold', marginTop: '10px' }}>
                            ENQUIRY
                        </Typography>
                        <Typography component="div" sx={{ mr: 4, fontSize: "12px", fontWeight: 'bold', marginTop: '10px' }}>
                            WAITLIST
                        </Typography>
                           <Typography component="div" sx={{ mr: 4, fontSize: "12px", fontWeight: 'bold', marginTop: '10px' }}>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </Typography>
                           <Typography component="div" sx={{ mr: 4, fontSize: "12px", fontWeight: 'bold', marginTop: '10px' }}>
                             <FontAwesomeIcon icon={faHeadphones} />
                        </Typography>
                         <Typography component="div" sx={{ mr: 4, fontSize: "12px", fontWeight: 'bold', marginTop: '10px' }}>
                                India
                        </Typography>
                        
                    </Toolbar>
                </AppBar>
            </Box>


        </>
    )
}

export default Header