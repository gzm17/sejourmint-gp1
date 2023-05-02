import React, { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
// this package allows scrolling to anywhere in a page, see code below. Link is native to react-router, which doesnt do this
import { HashLink as Link1 } from 'react-router-hash-link';
import './Main.css'
import './Header.css'

const Header = (props) => {

    // BEGIN - This block of code changes the opacity of the top bar upon scrolling
    const [topbarIsOpague, setTopbarIsOpague] = useState(false);
    const changeTopbarColor = () => {
        if (window.scrollY >= 45 ) {
            setTopbarIsOpague(true);
            document.getElementById('hotelName').style.color = '#00709e';
        } else {
            setTopbarIsOpague(false);
            document.getElementById('hotelName').style.color = 'rgb(242, 180, 34)';
        }
    }

    window.addEventListener('scroll', changeTopbarColor);
    // END

    // set language icon and menu items based on the language state from props.language
    var langIcon = '', featureHeading = '', roomsHeading = '', foodHeading = '', actHeading = '', 
        galleryHeading = '', contactHeading = '', bookHeading = '', galleryHeading = '';
    // console.log('language seen in header = ', props.language)
    if (props.language === 'en') {
        langIcon = '/assets/images/icons/uk.svg';
        featureHeading = 'Convenience';
        roomsHeading = 'Rooms and Amenities';
        foodHeading = 'Food and Drink';
        actHeading = 'Activities';
        galleryHeading = 'Gallery';
        contactHeading = 'Contact Us';
        bookHeading = 'BOOK NOW';
    } else {
        langIcon = '/assets/images/icons/japan.svg';
        featureHeading = '便利性';
        roomsHeading = '部屋とアメニティー';
        foodHeading = '食べ物と飲み物';
        actHeading = 'アクテビティ';
        galleryHeading = 'ギャラリー';
        contactHeading = '問い合わせ';
        bookHeading = '予約';
    }
    

    return (
        <div className={ topbarIsOpague ? 'header header-bg' : 'header'} > {/* top bar defined in .header */}
            <div className='col-3 col-sm-top1 col-md-top1 headerLeft'> {/* left 25% container for dropdown menu */}
                <div className='menuBars'>          {/* .menuBars bar1-3 define shape/color of dropdown button */}
                    <div className='bar1'></div>    {/* from w3c How to section */}
                    <div className='bar2'></div>
                    <div className='bar3'></div>
                    <div className="menuDropdown">  {/* From here the dropdown menu content */}
                        <Link1 to="/#features">{featureHeading}</Link1>          {/* Link1 allows jumping to anywhere marked by id */}
                        <Link1 to="/#rooms">{roomsHeading}</Link1>
                        <Link1 to="/#foods">{foodHeading}</Link1>
                        <Link1 to="/#activities">{actHeading}</Link1>
                        <Link1 to='gallery'>{galleryHeading}</Link1>
                        <Link1 to="/#contactUs">{contactHeading}</Link1>

                        {/* <a href="#features">Convenience</a>
                        <a href="#rooms">Rooms and Amanities</a>
                        <a href="#foods">Food and Drink</a>
                        <a href="#activities">Actitivites</a>
                        <a href='#'>Gallery</a>
                        <a href="#contactUs">Contact Info</a> */}
                    </div>
                </div>
                <Outlet />
            </div>
            <div className='col-6 col-sm-top2 col-md-top2 headerCenter'>  {/* middle 50% container for hotel name */}
                <h2 id='hotelName'>Hotel Sejour Mint</h2>
            </div>
            <div className='col-3 headerRight'>             {/* right 25% container for booking button for big screen */}
                <button type='button' onClick={props.changeLanguage} className='langButton'>
                    <img src={langIcon} alt={'language icon: ' + props.language} id='langIcon' />
                </button> 
                <Link to='booking' className='booking'>{bookHeading}</Link>
            </div> 
        </div>
    )
}

export default Header;