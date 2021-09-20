import styled from 'styled-components';
import { device } from '../../../theme/device';

const StyledAboutArticle = styled.article`
    @media ${device.large} {
        display: grid;
        column-gap: 2.4rem;
        row-gap: 1.6rem;
        grid-template-columns: repeat(10, 1fr);
        grid-auto-flow: dense;
        
        header {
            grid-column: 1 / 6;
            grid-row: 1 / 2;
            text-align: center;
        }
        
        .block-1 {
            grid-column: 1 / 6;
            grid-row: 2 / 5;
        }
        
        .block-1__img-1 {
            width: 24rem;
            height: 30rem;
            background: #000;
            float: left;
            margin: 0 2.4rem 1.6rem 0;
        }
        
        .img-1 {
            grid-column: 6 / 9;
            grid-row: 1 / 3;
            background: #000;
            height: 38rem;
            z-index: 1;
        }
        
        .blockquote {
            grid-row: 3 / 4;
            grid-column: 6 / 8;
        }
        
        .img-2 {
            grid-column: -4 / -1;
            grid-row: 1 / 4;
            background: red;
            height: 41rem;
            margin: 6.4rem 0 0;
        }
        
        .text-1 {
            grid-column: 6 / -1;
        }
        
        .text-2 {
            grid-column: 1 / 5;
        }
        
        .text-3 {
            grid-column: 1 / 5;
        }
        
        .img-3 {
            grid-column: 5 / 8;
            grid-row: 5 / 8;
            background: red;
            height: 36rem;
        }
        
        .img-4 {
            grid-column: -4 / -1;
            grid-row: 5 / 8;
            background: red;
            height: 31rem;
            margin: 1.6rem 0 0;
        }
        
        .blockquote-2 {
           grid-column: -4 / -1;
           grid-row: 8 / 9;
        }
    }
`;

export {StyledAboutArticle };
