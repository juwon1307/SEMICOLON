import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
} from './Navbar.elements';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <img
                src="https://scopo-media.s3.us-west-1.amazonaws.com/s3fs-public/2021-04/semicolon.png?auto=compress&cs=tinysrgb&h=10&w=10"
                alt="new"
                height="34"
              />
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>

            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">Who We Are</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="/
                What We Do"
                >
                  What We Do
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="/
                Event"
                >
                  Event
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="/
                Blog"
                >
                  Blog
                </NavLinks>
              </NavItem>

              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/partner with us">
                    <buton primary>Partner With Us</buton>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/partner with us">
                    <Button fontBig primary>
                      Partner With Us
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
