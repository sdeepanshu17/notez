import React from "react";
import "./Footer.css";

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return(
        <footer>
            ┬ęCopyright {year} DS
        </footer>
    )
}

export default Footer;