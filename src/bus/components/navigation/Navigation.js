import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { book } from './book';
import {
    StyledHeaderNavigation,
    StyledHeaderNavigationContainer,
    StyledLogo,
    StyledNavigation,
    StyledNavigationMenu,
    StyledNavigationButton
} from './StyledNavigation';

export const Navigation = (isHome = false) => {
    const [menuActive, setMenuActive] = useState(false);

    return (
        <StyledHeaderNavigation isHome={isHome.isHome}>
            <StyledHeaderNavigationContainer>
                <StyledLogo isHome={isHome.isHome}>
                    <Link to={'/'}>
                        Cветлана Ланская
                        <span>таропсихолог</span>
                    </Link>
                </StyledLogo>
                <StyledNavigation className={menuActive ? 'active' : ''} isHome={isHome.isHome}>
                    <StyledNavigationMenu isHome={isHome.isHome}>
                        {book.map((item, index) => {
                            const {path, caption} = item;

                            return (
                                <li>
                                    <Link key={index} to={`${path}`}>
                                        <span>{caption}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </StyledNavigationMenu>
                </StyledNavigation>
                <StyledNavigationButton isHome={isHome.isHome} className={menuActive ? 'close' : ''} onClick={() => setMenuActive(!menuActive)}>
                    <span/>
                </StyledNavigationButton>
            </StyledHeaderNavigationContainer>
        </StyledHeaderNavigation>
    )
};
