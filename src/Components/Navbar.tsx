import React from 'react'

const Navbar:React.FunctionComponent = () => {
  return (
    <nav>
    <div className="container nav-wrapper">
      <a href="#" className="brand-logo">TypeScript Project</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar