import React from "react";
import './Footer.scss'
import {socialMediaIcons} from "../../constants";
import {scryRenderedComponentsWithType} from "react-dom/test-utils";


export const Footer = () => {
    return(
        <div className='may-footer'>
            <div className='may-footer-content'>
                <div>Some text about authors</div>
                <div className='may-footer-social-media-wrapper'>
                    <img src={socialMediaIcons[0].src} alt={socialMediaIcons[0].alt} className='may-footer-social-media-icon'/>
                    <img src={socialMediaIcons[1].src} alt={socialMediaIcons[1].alt} className='may-footer-social-media-icon'/>
                    <img src={socialMediaIcons[2].src} alt={socialMediaIcons[2].alt} className='may-footer-social-media-icon'/>
                </div>
            </div>
            <div>All rights reserved. may-app © 2020</div>

        </div>
    )
};
