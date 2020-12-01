import styled, {css} from 'styled-components';

export const Main = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 970px;
    height: 500px;
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    overflow: hidden;
    background: #fff;
`;

export const Leftbox = styled.div`
    background-color: rgb(255, 255, 255, 0.2);
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Rightbox = styled.div`
    background-image: url(/img/pattern.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    width: 30%;
    height: 100%;
    filter: blur(0.5px);
`;

export const Signup = styled.form`
    width: 50%;
    height: 300px;
    margin-top: 0px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Signupinput = css`
    width: 100%;
    display: block;
    background-color: #d5d5d58a;
    border: none;
    outline: none;
    height: 43px;
    border-radius: 15px;
    padding-left: 40px;
    margin-bottom: 20px;
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 80px;
`;


export const Title = styled.span`
    font-family: Lemon;
    font-size: 26px;
    color: ${(props) => (props.colored ? '#F9BCD2' : '#37408C')};
    ${(props) => props.colored && 'margin-left: 5px'};
`;

export const Signintxt = styled.p`
    font-family: Cambria math;
`;

export const Line = styled.div`
    width: 101px;
    border-bottom: 1px solid #37408c;
    margin-bottom: 15px;
    margin: 15px 20px;
`;

export const Loginbutton = styled.input`
    background-color: #37408c;
    color: #fff;
    font-family: Comic Sans MS;
    font-size: 20px;
    width: 100%;
    border-radius: 15px;
    border: none;
    height: 45px;
`;

export const Signuptxt = styled.p`
    font-family: Cambria math;
    font-size: 19px;
`;

export const Clearfix = styled.div`
    clear: both;
    width: 100px;
`;
