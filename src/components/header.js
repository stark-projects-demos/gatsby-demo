import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"

export const Header = () => (
  <header id="Top-Navigation" className="top-navigation">
    <div className="logo">
      <StaticImage
        src="../images/Vectors-Wrapper.svg"
        loading="lazy"
        width="51.41145324707031"
        height="37"
        alt=""
        className="vectors-wrapper"
      />
      <div className="text">TeamSync</div>
    </div>
    <div className="menu-items">
      <a href="#" className="link-2">
        Resources
      </a>
      <a href="#" className="link-2">
        Enterprise
      </a>
      <a href="#" className="link-2">
        Features
      </a>
      <a href="#" className="link-2">
        Articles
      </a>
    </div>
    <div className="actions">
      <a href="#" className="link">
        Log in
      </a>
      <a href="#" className="button w-button">
        Request a demo
      </a>
    </div>
  </header>
)
