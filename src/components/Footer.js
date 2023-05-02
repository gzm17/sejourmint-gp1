import React, { useState } from 'react'
import { FcUp } from "react-icons/fc";
import './Main.css'
import './Footer.css'

const Footer = (props) => {
    // BEGIN - This block of code changes the opacity of the bottom block indicator 
    // in the lower right upon scrolling
    const [bottomBarColor, setBottomBarColor] = useState(false);
    // if ( window.innerWidth <= 768 ) { // for small screen, set to true
    //     setBottomBarColor(true);
    // } 
    const changeBottomBarColor = () => {
        if ( window.innerWidth <= 768 ) { // for small screen, set to true
            setBottomBarColor(true);
        } else { // below block only for big screen
            if (window.scrollY >= 1500 ) {
                setBottomBarColor(true);
                document.getElementById('fcUp').style.opacity = 1.0;
            } else {
                setBottomBarColor(false);
                document.getElementById('fcUp').style.opacity = 0.0;
            }
        }
    }

    window.addEventListener('scroll', changeBottomBarColor);
    // END
    // console.log('window width = ', window.innerWidth);

    // set language icon based on the language state from props.language
    var langIcon = '', booking, gallery;
    // console.log('language seen in header = ', props.language)
    if (props.language === 'en') {
        langIcon = '/assets/images/icons/uk.svg';
        booking = 'Booking';
        gallery = 'Gallery';
    } else {
        langIcon = '/assets/images/icons/japan.svg';
        booking = 'ご予約';
        gallery = 'ガラりー';
    }
    
    // const removeArrow = () => {
    //     document.getElementById('fcUp').style.opacity = 0.0;
    // }

    return (

        <div className={ bottomBarColor ? 'footer footer-bg' : 'footer'} >
                {/* <a href='/' className='col-sm-bottom1 col-md-bottom1 bottomSmallScreen1'><span id='bottomSmScreenBox1'>B1<span/></span></a> */}
                <div className='bottomBigScreen'>
                <a href='/' className='bottomBigScreen'><FcUp id='fcUp'/></a>
                </div>

            {/* </div>  */}
            <div className='botthomMenuBar'>
                <div className='bottomSmallScreen1'>
                    <button type='button' onClick={props.changeLanguage} className='langButton'>
                        <img src={langIcon} alt={'language icon: ' + props.language} id='langIcon' />
                    </button> 
                </div>
                <a href='/gallery' className='bottomSmallScreen2'>{gallery}</a>
                <a className='bookingBottom' href='/booking' >{booking}</a>
            </div>

        </div>

    )
}

export default Footer;
