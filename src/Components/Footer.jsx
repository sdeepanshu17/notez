import React from "react";
import "./Footer.css";

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return(
        <footer>
            ©Copyright {year} DS
        </footer>
    )
}

export default Footer;