import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    box-sizing: border-box;
    width: 100%;
    input {
        ${(props) => props.inputStyle};
        box-sizing: border-box;
    }

    img {
        width: 27px;
        position: absolute;
        top: 8px;
        left: 5px;
    }
`;
