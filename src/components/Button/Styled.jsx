import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    input,
    button {
        ${(props) => props.styled}
    }
`;
