import React, { Component } from 'react';
import Sd from './Sitemap.svg';
import './Sidemap.css';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
class Sidemap extends Component {
    render() {
        return (
            <>
            <Navbar/>
            <div className='sitemap-full'>
                <div className='sitemap-in'>
                    <h1>Lokarpan Sitemap</h1>
                    <hr/>

                    <div className='sitemap-content'>
                        <div>
                            <h1>About</h1>
                            <ul>
                                <li><Link to={"/about"}>Our Role</Link></li> 
                                <li><Link to={"/history"}>History</Link></li> 
                                <li><Link to={"/mission"}>Mission</Link></li> 
                                <li><Link to={"/leadership"}>Leadership</Link></li> 
                                <li><Link to={"/career"}>Careers</Link></li> 
                                <li><Link to={"/financials"}>Financials</Link></li> 
                                <li><Link to={"/alumni"}>Alumni</Link></li> 
                                <li><Link to={"/contact-us"}>Contact</Link></li> 
                                <li><Link to={"/"}>Blog</Link></li> 
                                <li><Link to={"/"}>Subscribe</Link></li> 
                            </ul> 
                        </div>
                        
                        <div>
                            <h1>Education</h1>
                            <ul>
                                <li><Link to={"/approach"}>Approach</Link></li> 
                                <li><Link to={"/digital-tool"}>Digital Tools</Link></li> 
                                <li><Link to={"/application"}>Application</Link></li> 
                                <li><Link to={"/podcasts"}>Podcast</Link></li> 
                                <li><Link to={"/impact"}>Impact</Link></li> 
                                <li><Link to={"/moonshots"}>Moonshots</Link></li> 
                                <li><Link to={"/being-a-volunteer"}>Volunteer</Link></li> 
                            </ul> 
                        </div>
                        
                        <div>
                            <h1>Kith</h1>
                            <ul>
                                <li><Link to={"/approach"}>Approach</Link></li> 
                                <li><Link to={"/digital-tool"}>Digital Tools</Link></li> 
                                <li><Link to={"/application"}>Application</Link></li> 
                                <li><Link to={"/podcasts"}>Podcast</Link></li> 
                                <li><Link to={"/impact"}>Impact</Link></li> 
                                <li><Link to={"/moonshots"}>Moonshots</Link></li> 
                                <li><Link to={"/being-a-volunteer"}>Volunteer</Link></li> 
                            </ul> 
                        </div>
                        
                        <div>
                            <h1>Design</h1>
                            <ul>
                                <li><Link to={"/designlist"}>Projects</Link></li> 
                                <li><Link to={"/guideline"}>Design Guidelines</Link></li> 
                                <li><Link to={"/"}>Resources</Link></li> 
                                <li><Link to={"/podcasts"}>Podcast</Link></li> 
                                <li><Link to={"/impact"}>Impact</Link></li> 
                                <li><Link to={"/moonshots"}>Moonshots</Link></li> 
                                <li><Link to={"/being-a-volunteer"}>Volunteer</Link></li> 
                            </ul> 
                        </div>
                        
                        <div>
                            <h1>Support</h1>
                            <ul>
                                <li><Link to={"/ways-to-give"}>Ways to Give</Link></li> 
                                <li><Link to={"/being-a-volunteer"}>Being a Volunteer</Link></li> 
                                <li><Link to={"/our-supporter"}>Our Supporters</Link></li> 
                                <li><Link to={"/why-donate"}>Why Donate</Link></li> 
                                <li><Link to={"/donate"}>Donate Now</Link></li> 
                            </ul> 
                        </div>
                        
                        <div>
                        <h1><Link to={"/fellowship"}>Fellowship</Link></h1>
                        </div>
                        
                        <div>
                        <h1><Link to={"/health"}>Health</Link></h1>
                        </div>
                        
                        <div>
                        <h1><Link to={"/environment"}>Environment</Link></h1>
                        </div>
                        
                        <div>
                        <h1><Link to={"/livelihood"}>Livelihood</Link></h1>
                        </div>
                    </div>
        
                </div>
            </div>

            <Footer/>
            </>
        );
    }
}

export default Sidemap;
