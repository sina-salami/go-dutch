import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex: 1;
    height: 100vh;
    width: 100vw;
    background: green;
    align-items: center;
    justify-content: center;
`;

export const Card = styled.div`
    display: flex;
    height: 60vh;
    width: 70vw;
    background: white;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1vh 0;
`;

export const LeftNav = styled.div`
    width: 20%;
    height: 100%;
    background: red;
`;

export const MainPart = styled.div`
    width: 58%;
    height: 100%;
    background: blue;
`;

export const RightNav = styled.div`
    width: 20%;
    height: 100%;
    background: red;
`;
