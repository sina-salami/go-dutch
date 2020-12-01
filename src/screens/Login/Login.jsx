import React from 'react';
import {
    Main,
    Container,
    Leftbox,
    Rightbox,
    Form,
    Signupinput,
    TextWrapper,
    Title,
    Signintxt,
    Line,
    Loginbutton,
    Signuptxt,
} from './Styled';
import TextInput from '../../components/TextInput';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const Login = () => {
    return (
        <Main>
            <Container>
                <Leftbox>
                    <TextWrapper>
                        <Line />
                        <Title>Sign in to </Title>
                        <Title colored> G</Title>
                        <Title>o</Title>
                        <Title colored> D</Title>
                        <Title>utch</Title>
                        <Line />
                    </TextWrapper>
                    <Form>
                        <TextInput
                            type={'phone'}
                            id={'phone'}
                            name={'phone'}
                            placeholder={'Phone number'}
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
                            Forgot your password?{' '}
                            <Link to={'/forgot-password'}>Click here</Link>
                        </Signintxt>
                        <Button
                            type={'submit'}
                            title={'Sign in'}
                            style={Loginbutton}
                        />
                        <Signuptxt>
                            Not on Go Dutch yet?{' '}
                            <Link to={'/register'}>Join us</Link>
                        </Signuptxt>
                    </Form>
                </Leftbox>
                <Rightbox />
            </Container>
        </Main>
    );
};

export default Login;
