import React from 'react';
import { StyledContent, StyledWrap } from './StyledHome';
import homeBg from '../../../images/home-bg.jpg';
import { Navigation } from '../../components/navigation/Navigation';

export const Home = () => {

    return (
        <StyledContent bg={homeBg}>
            <StyledWrap>
                <Navigation isHome={true}/>
            </StyledWrap>
        </StyledContent>
    )
};
