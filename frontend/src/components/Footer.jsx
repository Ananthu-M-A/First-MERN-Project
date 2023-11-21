import React from 'react';
import '../index.css';
import { Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    return (
        <>
            <Card className='footer bg-dark text-center text-light rounded-0'>
                <Card.Body>
                <img onClick={()=>{navigate('/')}} className='FooterLogo' src="https://www.smartdepot.co.in/images/smart-depot1.png" alt="" />
                </Card.Body>
                <Card.Header as="p">© All Rights are Reserved... Designed by <Link to={'/'}>Ananthu M A</Link> .... Distributed By Smart-Depot....</Card.Header>
            </Card>
        </>
    )
}

export default Footer;