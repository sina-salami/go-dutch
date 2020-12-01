import React from 'react';
import {
    Main,
    Container,
    Leftbox,
    Rightbox,
    Signup,
    Signupinput,
    TextWrapper,
    Title,
    Signintxt,
    Line,
    Loginbutton,
    Signuptxt,
    Usernamelogo,
    Passwordlogo,
    Clearfix,
} from './Styled';
import TextInput from '../../components/TextInput';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Main>
            <Container>
                <Leftbox>
                    <TextWrapper>
                        <Line />
                        <Title>Login to </Title>
                        <Title colored> G</Title>
                        <Title>o</Title>
                        <Title colored> D</Title>
                        <Title>utch</Title>
                        <Line />
                    </TextWrapper>
                    <Signup>
                        <TextInput
                            type={'email'}
                            id={'email'}
                            name={'email'}
                            placeholder={'Email'}
                            icon={process.env.PUBLIC_URL + '/img/avatar.svg'}
                            style={Signupinput}
                        />
                        <TextInput
                            type={'password'}
                            id={'password'}
                            name={'password'}
                            placeholder={'Password'}
                            icon={process.env.PUBLIC_URL + '/img/padlock.svg'}
                            style={Signupinput}
                        />
                        <Signintxt>
                            Forgot your password? <Link to={'/forgot-password'}>Click here</Link>
                        </Signintxt>
                        <Loginbutton
                            type={'submit'}
                            id={'login-button'}
                            value={'Login'}
                        />
                        <Signintxt>
                            Not on Go Dutch yet? <Link to={'/register'}>Join us</Link>
                        </Signintxt>
                        <Clearfix />
                    </Signup>
                </Leftbox>
                <Rightbox />
            </Container>
        </Main>
    );
};

export default Login;
