import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../css/footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-links">
                <Link to="">
                    <FaGithub className="icon-links"/>
                </Link>
                <Link className="icon-links" to="">
                    <FaLinkedin className="icon-links"/>
                </Link>
            </div>
            <div>
                <p>&copy; 2025 - Pablo Domínguez</p>
            </div>
        </div>
    );
};

export default Footer;
