import React from 'react'
import '../styles/Footer.css'
import LocalMallRoundedIcon from '@material-ui/icons/LocalMallRounded';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
function Footer() {
    return (
        <div className="footer">
            <div className="footer__logo">
                <p className="logo">fakeStore</p> <LocalMallRoundedIcon  className="logo__icon"/>
                <br />
            </div>
            <div className="footer__middle">
                <p>Developed by Sourav Baghel</p>
                <div className="socials">
                    <FacebookIcon  className="logo"/>
                    <InstagramIcon  className="logo"/>
                    <GitHubIcon className="logo"/>
                    <LinkedInIcon className="logo"/>

                </div>
            </div>

        </div>
    )
}

export default Footer;