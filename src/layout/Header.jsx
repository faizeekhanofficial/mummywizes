import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.png"

export const Header = () => {
    return (
        <div>
            <header>


                <Container>
                    <div className="top-header">
                        <select name="" id="">
                            <option value="">SELECT COUNTRY</option>
                            <option value="">SELECT STATE</option>
                            <option value="">SELECT CITY</option>
                        </select>
                        <div className="logo">
                            <figure><img src={logo} alt="" className='img-fluid' /></figure>

                        </div>
                        <div className="social-icon">
                            <i className="fa-regular fa-user"></i>
                            <i className="fa-solid fa-pencil mx-2"></i>
                            <i className="fa-solid fa-bell"></i>

                        </div>
                    </div>
                    <Navbar className='custom-navbar'>


                        <Nav className="me-auto custom-nav">
                            <Nav.Link as={Link} to={"/"}>BABIES <i className="fa-solid fa-caret-down"></i></Nav.Link>
                            <Nav.Link as={Link} to={"/toddlers"} >TODDLERS <i className="fa-solid fa-caret-down"></i></Nav.Link>
                            <Nav.Link as={Link} to={"/kids"} >KIDS <i className="fa-solid fa-caret-down"></i></Nav.Link>
                            <Nav.Link as={Link} to={"/momslife"} >MOMSLIFE <i className="fa-solid fa-caret-down"></i></Nav.Link>
                            <Nav.Link as={Link} to={"/things"} >THINGS TO DO <i className="fa-solid fa-caret-down"></i></Nav.Link>
                            <Nav.Link as={Link} to={"/mompreneurs"} >MOMPRENEURS <i className="fa-solid fa-caret-down"></i></Nav.Link>
                            <Nav.Link as={Link} to={"/events"} >EVENTS <i className="fa-solid fa-caret-down"></i></Nav.Link>
                        </Nav>

                    </Navbar>

                </Container>

            </header>
            <div className="home-banner">
                <div className="home-banner-content">
                    <Container>
                        <div className="item">
                            <h1>Search for Resources, Events & Experiences</h1>
                            <div className="input-container">
                                <button> <i className="fa-solid fa-magnifying-glass"></i></button>
                                <input type="text" placeholder='Search by Keyword' />

                            </div>
                            <div className="row  mb-5 input-li">
                                <div className="col-sm-2">
                                    <ul>
                                        <li><a href=""> Schools</a></li>
                                        <li><a href=""> Doctors</a></li>
                                        <li><a href="">Pathology labs</a></li>
                                    </ul>
                                </div>
                                <div className="col-sm-2">
                                    <ul>
                                        <li><a href="">Hospital / Nursing home</a></li>
                                        <li><a href="">Daycare</a></li>
                                        <li><a href="">Tutors</a></li>
                                    </ul>
                                </div>
                                <div className="col-sm-2">
                                    <ul>
                                        <li><a href="">Musical Training</a></li>
                                        <li><a href="">Workshops</a></li>
                                        <li><a href="">Sports Academy</a></li>
                                    </ul>

                                </div>
                                <div className="col-sm-3">
                                    <ul>
                                        <li><a href="">Sports Coaches</a></li>
                                        <li><a href="">Extracurricular Activities</a></li>
                                        <li><a href="">Where to Shop</a></li>
                                    </ul>
                                </div>
                                <div className="col-sm-3">
                                    <ul>
                                        <li><a href=""> Party Planners</a></li>
                                        <li><a href="">AfterSchool Enrichment Programs</a></li>
                                        <li><a href="">PlayZone/Activities for Kids</a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                    </Container>
                </div>
            </div>
        </div>
    )
}

// { phone && <li>Icon {phone}</li> }
// { date && <li>Icon {date}</li> }