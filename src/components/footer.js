import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

export const Footer = () => (
  <footer id="Footer" className="footer-2">
    <div className="frame-13896">
      <div className="frame-13895">
        <div className="logo-2">TeamSync</div>
        <div className="frame-13897">
          <StaticImage
            src="../images/instagram.svg"
            loading="lazy"
            width="29.01435661315918"
            height="29.01435661315918"
            alt="Instagram logo"
            className="vectors-wrapper-10"
          />
          <StaticImage
            src="../images/whatsapp.svg"
            loading="lazy"
            width="29.01435661315918"
            height="29.01435661315918"
            alt="Whatsapp logo"
            className="vectors-wrapper-10"
          />
          <StaticImage
            src="../images/twitter.svg"
            loading="lazy"
            width="29.01435661315918"
            height="29.01435661315918"
            alt="Twitter logo"
            className="vectors-wrapper-10"
          />
          <StaticImage
            src="../images/facebook.svg"
            loading="lazy"
            width="29.01435661315918"
            height="29.01435661315918"
            alt="Facebook logo"
            className="vectors-wrapper-10"
          />
        </div>
      </div>
      <div className="frame-13898">
        <a href="#" className="link-6">
          Features
        </a>
        <a href="#" className="link-7">
          Resources
        </a>
        <a href="#" className="link-7">
          Articles
        </a>
      </div>
      <div className="frame-13898">
        <a href="#" className="link-7">
          FAQs
        </a>
        <a href="#" className="link-7">
          Blogs
        </a>
        <a href="#" className="link-7">
          Support
        </a>
      </div>
      <div className="frame-13899">
        <a href="#" className="link-8">
          Careers
        </a>
        <a href="#" className="link-8">
          Terms of Service
        </a>
        <a href="#" className="link-8">
          Privacy Policy
        </a>
      </div>
    </div>
  </footer>
)
