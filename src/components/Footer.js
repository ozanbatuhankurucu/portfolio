import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <h4>Ozan Batuhan Kurucu all rights reserved</h4>
        <h4>&copy;2021-present. </h4>
      </div>
    </footer>
  )
}

export default Footer
