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
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'



function Header() {
    return (
        <>
            {/*  <Box sx={{ flexGrow: 1 }} >
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

                     


                        <Typography component="div" sx={{ mr: 4, fontSize: "12px", fontWeight: 'bold', marginTop: '10px',border:'1px solid white',padding:'10px',paddingX:'20px' }}>
                            ENQUIRY
                        </Typography>
                        <Typography component="div" sx={{ mr: 4, fontSize: "12px", fontWeight: 'bold', marginTop: '10px',border:'1px solid white',padding:'10px',paddingX:'20px',backgroundColor:'white',color:'black' }}>
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
            </Box> */}

            <Navbar expand="lg" className="bg-black py-3">
                <Container>
                    <img src="public/app.png" alt="app" width={'22px'} style={{ position: 'relative', marginLeft: '-30px' }} />
                    
                    <Navbar.Brand href="#home">
                        <img src="public/norton.png" alt="no image" width={'160px'} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className='text-white' style={{ fontWeight: 'bold', fontSize: '12px' }}> MODELS <FontAwesomeIcon icon={faChevronDown} />
                            </Nav.Link>
                            <Nav.Link href="#link" className='text-white ms-md-3' style={{ fontWeight: 'bold', fontSize: '12px' }}>CASUAL WEAR</Nav.Link>
                        </Nav>


                          <Nav.Link href="#link" className='text-white  border border-white ' style={{ fontWeight: 'bold', fontSize: '12px', padding: '10px 18px' }}>ENQUIRY</Nav.Link>

                            <Nav.Link href="#link" className='text-black ms-md-3 border border-white bg-white' style={{ fontWeight: 'bold', fontSize: '12px', padding: '10px 18px' }}>WAITLIST</Nav.Link>
                            <Nav.Link href="#link" >
                                <svg xmlns="http://w3.org" color='white'  className='ms-md-3'  width="60px" height="25px" fill="currentColor">
                                    <path d="M2.3999 2.24274C1.98569 2.24274 1.6499 2.57852 1.6499 2.99274C1.6499 3.40695 1.98569 3.74274 2.3999 3.74274V2.99274V2.24274ZM4.69244 2.99274L5.41636 2.79668C5.32782 2.46975 5.03114 2.24274 4.69244 2.24274V2.99274ZM8.41781 16.748L7.69389 16.944C7.79159 17.3048 8.13998 17.5385 8.51084 17.4922L8.41781 16.748ZM19.8805 15.3151L19.9735 16.0593C20.292 16.0195 20.5499 15.7814 20.6149 15.4671L19.8805 15.3151ZM21.5999 7.00468L22.3343 7.15663C22.38 6.93575 22.3239 6.70602 22.1815 6.53111C22.0391 6.3562 21.8255 6.25468 21.5999 6.25468V7.00468ZM5.77901 7.00468L5.05509 7.20074V7.20074L5.77901 7.00468ZM2.3999 2.99274V3.74274H4.69244V2.99274V2.24274H2.3999V2.99274ZM8.41781 16.748L8.51084 17.4922L19.9735 16.0593L19.8805 15.3151L19.7875 14.5709L8.32479 16.0038L8.41781 16.748ZM19.8805 15.3151L20.6149 15.4671L22.3343 7.15663L21.5999 7.00468L20.8655 6.85272L19.146 15.1632L19.8805 15.3151ZM4.69244 2.99274L3.96852 3.1888L5.05509 7.20074L5.77901 7.00468L6.50293 6.80862L5.41636 2.79668L4.69244 2.99274ZM5.77901 7.00468L5.05509 7.20074L7.69389 16.944L8.41781 16.748L9.14173 16.5519L6.50293 6.80862L5.77901 7.00468ZM21.5999 7.00468V6.25468H5.77901V7.00468V7.75468H21.5999V7.00468ZM11.9999 20.5H11.2499C11.2499 20.9142 10.9141 21.25 10.4999 21.25V22V22.75C11.7425 22.75 12.7499 21.7427 12.7499 20.5H11.9999ZM10.4999 22V21.25C10.0857 21.25 9.7499 20.9142 9.7499 20.5H8.9999H8.2499C8.2499 21.7427 9.25726 22.75 10.4999 22.75V22ZM8.9999 20.5H9.7499C9.7499 20.0858 10.0857 19.75 10.4999 19.75V19V18.25C9.25726 18.25 8.2499 19.2574 8.2499 20.5H8.9999ZM10.4999 19V19.75C10.9141 19.75 11.2499 20.0858 11.2499 20.5H11.9999H12.7499C12.7499 19.2574 11.7425 18.25 10.4999 18.25V19ZM19.9999 20.5H19.2499C19.2499 20.9142 18.9141 21.25 18.4999 21.25V22V22.75C19.7425 22.75 20.7499 21.7427 20.7499 20.5H19.9999ZM18.4999 22V21.25C18.0857 21.25 17.7499 20.9142 17.7499 20.5H16.9999H16.2499C16.2499 21.7427 17.2573 22.75 18.4999 22.75V22ZM16.9999 20.5H17.7499C17.7499 20.0858 18.0857 19.75 18.4999 19.75V19V18.25C17.2573 18.25 16.2499 19.2574 16.2499 20.5H16.9999ZM18.4999 19V19.75C18.9141 19.75 19.2499 20.0858 19.2499 20.5H19.9999H20.7499C20.7499 19.2574 19.7425 18.25 18.4999 18.25V19Z" />
                                </svg>
                            </Nav.Link>
                             <Nav.Link href="#link"  >
                             <svg class="support-icon"  className=' icn1'      width="70px"  height="25px" fill="none"   xmlns="http://www.w3.org/2000/svg"  ><path d="M4 15C4 14.4696 4.21071 13.9609 4.58579 13.5858C4.96086 13.2107 5.46957 13 6 13H7C7.53043 13 8.03914 13.2107 8.41421 13.5858C8.78929 13.9609 9 14.4696 9 15V18C9 18.5304 8.78929 19.0391 8.41421 19.4142C8.03914 19.7893 7.53043 20 7 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V15ZM15 15C15 14.4696 15.2107 13.9609 15.5858 13.5858C15.9609 13.2107 16.4696 13 17 13H18C18.5304 13 19.0391 13.2107 19.4142 13.5858C19.7893 13.9609 20 14.4696 20 15V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H17C16.4696 20 15.9609 19.7893 15.5858 19.4142C15.2107 19.0391 15 18.5304 15 18V15Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 15V12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12V15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                             </Nav.Link>
                              <Nav.Link href="#link" className='icn2'   >
                                <img src="public/in.png" alt="" /> <span className='text-white' style={{ fontWeight: 'bold', fontSize: '12px' }}>INDIA</span>
                              </Nav.Link>
                            
                        <Nav>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    )
}

export default Header