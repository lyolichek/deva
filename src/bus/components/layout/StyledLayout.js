import styled from 'styled-components';
import { device } from '../../../theme/device';

const StyledLayout = styled.div`
    background: hsl(100, 100%, 100%);
    margin: 0 auto;
    padding: 2.4rem 1.6rem;
    
    @media ${device.medium} {
        max-width: 76.8rem;
        margin: 3.2rem auto;
        padding: 5.4rem 3.2rem;
    }
    
    @media ${device.large} {
        max-width: 117rem;
        margin: 4.8rem auto;
        padding: 8rem 6.4rem;
    }
`;

export { StyledLayout };
