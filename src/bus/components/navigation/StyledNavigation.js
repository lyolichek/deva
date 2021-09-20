import styled, { css } from 'styled-components';
import { device } from '../../../theme/device';

export const StyledHeaderNavigation = styled.header`
    background: ${props => props.isHome ? '' : 'hsl(100, 100%, 100%)'};
    border-bottom: ${props => props.isHome ? '' : '1px solid hsla(0, 0%, 0%, 0.6)'};
`;

export const StyledHeaderNavigationContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.6rem;
    
    @media ${device.large} {
        max-width: 127rem;
        margin: 0 auto;
        padding: 2.4rem 1.6rem;
    }
`;

export const StyledLogo = styled.div`
    a {
        display: inline-flex;
        flex-direction: column;
        font-size: 2.2rem;
        color: ${props => props.isHome ? 'hsla(100, 100%, 100%, 0.7)' : 'hsl(0, 0%, 0%)'};
        transition: 0.5s;
        font-style: italic;
        text-shadow: ${props => props.isHome ? '1px 1px 2px hsl(0, 0%, 0%)' : 'none'};
        
        &:hover {
            color: ${props => props.isHome ? 'hsla(100, 100%, 100%, 1)' : 'hsl(0, 0%, 0%)'};
        }
    }
    
    span {
        padding: 0.2rem 0 0;
        font-size: 1.6rem;
        font-style: italic;
    }
    
    ${props => props.isHome &&
        css`
        @media ${device.large} {
            padding: 8rem 0 0;
            
            a {
                font-size: 3rem;
            }
            
            span {
                padding: 0.4rem 0 0;
                font-size: 2rem;
            }
        }
    `};
`;

export const StyledNavigation = styled.nav`
    position: fixed;
    width: 100vw;
    height: calc(100vh - 78px);
    top: 7.8rem;
    left: 0;
    transform: translateX(-130%);
        background: hsla(0, 0%, 0%, 0.7);
    
    &.active {
        transform: translateX(0);
    }
    
    @media ${device.medium} {
        display: flex;
        justify-content: center;
    }
    
    @media ${device.large} {
        height: auto;
        transform: none;
        width: auto;
        background: none;
        position: static;
    }
    
    ${props => props.isHome &&
    css`
        @media ${device.large} {
            position: absolute;
            right: 0;
            left: auto;
            top: 2rem;
        }
    `};
`;

export const StyledNavigationButton = styled.button`
    display: block;
    width: 5rem;
    height: 4rem;
    padding: 1rem;
    cursor: pointer;
    border: none;
    background: none;
    
    @media ${device.large}{
        display: none;
    }

    span {
        display: block;
        height: 0.2rem;
        background: ${props => props.isHome ? 'hsl(100, 100%, 100%)' : 'hsl(0, 0%, 0%)'};
        position: relative;
        
        &::after, &::before {
            display: block;
            position: absolute;
            left: 0;
            width: 100%;
            height: 0.2rem;
            background: ${props => props.isHome ? 'hsl(100, 100%, 100%)' : 'hsl(0, 0%, 0%)'};
            content: '';
            transition: 0.3s;
        }
        
        &::after {
            bottom: 1rem;
        }
        
        &::before{
            top: 1rem;
        }
    }
    
    &.close {
        span {
            background: transparent;
            
            &::after {
                bottom: 0;
                transform: rotate(45deg);
            }
            
            &::before{
                top: 0;
                transform: rotate(-45deg);
            }
        }
    }
`;

export const StyledNavigationMenu = styled.ul`
    position: relative;
    height: 100%;
    padding: 4rem;
    
    li {
        padding: 1rem 0;
    }
    
    a {
        color: hsl(100, 100%, 100%);
        font-size: 2.2rem;
    }
    
    @media ${device.medium}{
        padding: 8rem 4rem 4rem;
    
        li {
            text-align: center;
        }
        
        a {
            font-size: 2.6rem;
        }
    }
    
    @media ${device.large} {
        padding: 0;
        display: flex;
        
        li {
            margin: 0 1rem;
        }
        
        a {
            color: hsla(0, 0%, 0%, 0.6);
            position: relative;
            transition: 0.5s;
            font-size: 1.6rem;
            padding: 0 0.4rem 0.4rem;
    
            &::before {
                content: "";
                bottom: 0;
                left: 0;
                position: absolute;
                width: 0;
                height: 0.1rem;
                background-color: hsl(0, 0%, 0%);
                transition: 0.5s;
            }
    
            &:hover {
                color: hsla(0, 0%, 0%, 1);
    
                &::before {
                    width: 100%;
                }
            }
        }
    }
    
    ${props => props.isHome &&
    css`
        @media ${device.large} {
            padding: 8rem 4rem 4rem;
            flex-direction: column;
        
            a {
                color: hsla(100, 100%, 100%, 0.6);
                margin: 0 0 0.4rem;
                padding: 0.8rem 0.4rem 0.4rem;
                font-size: 2rem;
        
                &::before {
                    background-color: hsl(100, 100%, 100%);
                }
        
                &:hover {
                    color: hsla(100, 100%, 100%, 1);
                }
            }
        }
    `};
`;
