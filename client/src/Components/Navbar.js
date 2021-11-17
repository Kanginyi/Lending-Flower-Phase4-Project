import React from 'react';

function Navbar() {
    return(
        <>
        <nav className="navbar">
        <ul className="navbar-nav">
            <li className="navbar-logo">
            <a href="/" className="nav-link">
                <span className="link-text logo-text">Lending</span>
                <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="angle-double-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
                >
                <g className="fa-group">
                    <path
                    fill="currentColor"
                    d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                    className="fa-secondary"
                    ></path>
                    <path
                    fill="currentColor"
                    d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                    className="fa-primary"
                    ></path>
                </g>
                </svg>
            </a>
            </li>
    
            <li className="nav-item">
            <a href="/" className="nav-link">
                <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="door-open"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="svg-inline--fa fa-door-open fa-w-20"
                >
                <g className="fa-group">
                <path
                fill="currentColor"
                d="M624 448h-80V113.45C544 86.19 522.47 64 496 64H384v64h96v384h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM312.24 1.01l-192 49.74C105.99 54.44 96 67.7 96 82.92V448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h336V33.18c0-21.58-19.56-37.41-39.76-32.17zM264 288c-13.25 0-24-14.33-24-32s10.75-32 24-32 24 14.33 24 32-10.75 32-24 32z"
                className="fa-secondary"
                ></path>
                <path
                    fill="currentColor"
                    d="M376 144a16 16 0 1 0 16 16 16 16 0 0 0-16-16zm80 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16zM131.06 273.53L192 304l-23.52-70.56a192.06 192.06 0 0 0-37.42 40.09zM256 272v-77.11a198.62 198.62 0 0 0-43.15 12.38z"
                    className="fa-primary"
                ></path>
                </g>
                </svg>
                <span className="link-text">Login</span>
            </a>
            </li>
    
            <li className="nav-item">
            <a href="/" className="nav-link">
                <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="hand-holding-usd"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="svg-inline--fa fa-hand-holding-usd fa-w-18">
                <g className="fa-group">
                <path
                fill="currentColor"
                d="M271.06,144.3l54.27,14.3a8.59,8.59,0,0,1,6.63,8.1c0,4.6-4.09,8.4-9.12,8.4h-35.6a30,30,0,0,1-11.19-2.2c-5.24-2.2-11.28-1.7-15.3,2l-19,17.5a11.68,11.68,0,0,0-2.25,2.66,11.42,11.42,0,0,0,3.88,15.74,83.77,83.77,0,0,0,34.51,11.5V240c0,8.8,7.83,16,17.37,16h17.37c9.55,0,17.38-7.2,17.38-16V222.4c32.93-3.6,57.84-31,53.5-63-3.15-23-22.46-41.3-46.56-47.7L282.68,97.4a8.59,8.59,0,0,1-6.63-8.1c0-4.6,4.09-8.4,9.12-8.4h35.6A30,30,0,0,1,332,83.1c5.23,2.2,11.28,1.7,15.3-2l19-17.5A11.31,11.31,0,0,0,368.47,61a11.43,11.43,0,0,0-3.84-15.78,83.82,83.82,0,0,0-34.52-11.5V16c0-8.8-7.82-16-17.37-16H295.37C285.82,0,278,7.2,278,16V33.6c-32.89,3.6-57.85,31-53.51,63C227.63,119.6,247,137.9,271.06,144.3ZM565.27,328.1c-11.8-10.7-30.2-10-42.6,0L430.27,402a63.64,63.64,0,0,1-40,14H272a16,16,0,0,1,0-32h78.29c15.9,0,30.71-10.9,33.25-26.6a31.2,31.2,0,0,0,.46-5.46A32,32,0,0,0,352,320H192a117.66,117.66,0,0,0-74.1,26.29L71.4,384H16A16,16,0,0,0,0,400v96a16,16,0,0,0,16,16H372.77a64,64,0,0,0,40-14L564,377a32,32,0,0,0,1.28-48.9Z"
                className="fa-secondary"></path>
                    <path
                    fill="currentColor"
                    d="M160,320h64V224H160Zm192-96v96h64V224Z"
                    className="fa-primary"
                    ></path>  
                </g>
                </svg>
                <span className="link-text">New Loan</span>
            </a>
            </li>
 
    
            <li className="nav-item">
            <a href="/" className="nav-link">
                <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="university"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="svg-inline--fa fa-university fa-w-16">
                <g className="fa-group">
                <path
                fill="currentColor"
                d="M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a7.996 7.996 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128zm-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zM96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192H96z"
                className="fa-secondary"
                ></path>
                <path
                    fill="currentColor"
                    d="M256,320c-90.52344,0-174.80469-13.23047-246.27344-35.73438a246.11376,246.11376,0,0,0,6.98438,35.998C87.28906,340.53906,168.65625,352,256,352s168.71094-11.46094,239.28906-31.73633a246.11376,246.11376,0,0,0,6.98438-35.998C430.80469,306.76953,346.52344,320,256,320Zm-64-80a80,80,0,1,0-80-80A80.00021,80.00021,0,0,0,192,240Zm0-104a24,24,0,1,1-24,24A23.99993,23.99993,0,0,1,192,136Z"
                    className="fa-primary"
                ></path>


                </g>
                </svg>
                <span className="link-text">Lenders</span>
            </a>
            </li>
    
            <li className="nav-item">
            <a href="/" className="nav-link">
                <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="space-shuttle"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="svg-inline--fa fa-space-shuttle fa-w-20 fa-5x"
                >
                <g className="fa-group">
                    <path
                    fill="currentColor"
                    d="M32 416c0 35.35 21.49 64 48 64h16V352H32zm154.54-232h280.13L376 168C243 140.59 222.45 51.22 128 34.65V160h18.34a45.62 45.62 0 0 1 40.2 24zM32 96v64h64V32H80c-26.51 0-48 28.65-48 64zm114.34 256H128v125.35C222.45 460.78 243 371.41 376 344l90.67-16H186.54a45.62 45.62 0 0 1-40.2 24z"
                    className="fa-secondary"
                    ></path>
                    <path
                    fill="currentColor"
                    d="M592.6 208.24C559.73 192.84 515.78 184 472 184H186.54a45.62 45.62 0 0 0-40.2-24H32c-23.2 0-32 10-32 24v144c0 14 8.82 24 32 24h114.34a45.62 45.62 0 0 0 40.2-24H472c43.78 0 87.73-8.84 120.6-24.24C622.28 289.84 640 272 640 256s-17.72-33.84-47.4-47.76zM488 296a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8c31.91 0 31.94 80 0 80z"
                    className="fa-primary"
                    ></path>
                </g>
                </svg>
                <span className="link-text">What the FUCK</span>
            </a>
            </li>
   
            <li className="nav-item" id="themeButton">
            <a href="/" className="nav-link">
                <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="phone-alt"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="svg-inline--fa fa-phone-alt fa-w-16"
                >
                <g className="fa-group">
                <path
                fill="currentColor"
                d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
                className="fa-secondary"
                ></path>
                </g>
                </svg>
                <span className="link-text">Contact Us</span>
            </a>
            </li>
        </ul>
        </nav>
        </>
    );
}




export default Navbar;

// This is the code for a Moon icon
                {/* <svg
                className="theme-icon"
                id="lightIcon"
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="moon-stars"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="svg-inline--fa fa-moon-stars fa-w-16 fa-7x"
                >
                <g className="fa-group">
                    <path
                    fill="currentColor"
                    d="M320 32L304 0l-16 32-32 16 32 16 16 32 16-32 32-16zm138.7 149.3L432 128l-26.7 53.3L352 208l53.3 26.7L432 288l26.7-53.3L512 208z"
                    className="fa-secondary"
                    ></path>
                    <path
                    fill="currentColor"
                    d="M332.2 426.4c8.1-1.6 13.9 8 8.6 14.5a191.18 191.18 0 0 1-149 71.1C85.8 512 0 426 0 320c0-120 108.7-210.6 227-188.8 8.2 1.6 10.1 12.6 2.8 16.7a150.3 150.3 0 0 0-76.1 130.8c0 94 85.4 165.4 178.5 147.7z"
                    className="fa-primary"
                    ></path>
                </g>
                </svg> */}