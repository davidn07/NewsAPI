import React from 'react'
import { faNewspaper, faGenderless, faFileMedicalAlt, faBusinessTime,faCompactDisc, faFlask } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-light bg-light mb-4'>
        <Link className='navbar-brand' to='/'>
        <FontAwesomeIcon icon={faNewspaper} />
          NewsApp
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
          <li>
          <Link className='nav-link' to='/General'>
          <FontAwesomeIcon icon={faGenderless} />{" "}
                General
              </Link>
          </li>  
          <li>
          <Link className='nav-link' to='/Health'>
          <FontAwesomeIcon icon={faFileMedicalAlt} />{" "}

                Health
              </Link>
          </li>
          <li>
          <Link className='nav-link' to='/Business'>
          <FontAwesomeIcon icon={faBusinessTime} />{" "}

                Business
              </Link>
          </li>
          <li>
          <Link className='nav-link' to='/Entertainment'>
          <FontAwesomeIcon icon={faCompactDisc} />{" "}

                Entertainment
              </Link>
          </li>
          <li>
          <Link className='nav-link' to='/Science'>
          <FontAwesomeIcon icon={faFlask} />{" "}

                Science
              </Link>
          </li>
          </ul>
        </div>
      </nav>
        </div>
    )
}

export default NavBar
