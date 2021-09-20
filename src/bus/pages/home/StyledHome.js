import styled from 'styled-components';

const StyledContent = styled.div`
    background: url(${(props) => props.bg}) 50% 0 no-repeat;
    background-size: cover;
    height: 100vh;
    position: relative;
   
    &::before {
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: absolute;
        background: hsla(0, 0%, 0%, 0.6);
    }
`;

const StyledWrap = styled.div`
    position: relative;
`;

export { StyledContent, StyledWrap };
