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
    Line,
    Loginbutton,
    Signuptxt,
} from '../Login/Styled';
import TextInput from '../../components/TextInput';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const Register = (props) => {
    return (
        <Main>
            <Container>
                <Leftbox>
                    <TextWrapper>
                        <Line />
                        <Title>Sign up to </Title>
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
                        <TextInput
                            type={'password'}
                            id={'confirm'}
                            name={'confirm'}
                            placeholder={'Confirm password'}
                            icon={process.env.PUBLIC_URL + '/img/padlock.svg'}
                            style={Signupinput}
                        />
                        <Button
                            type={'submit'}
                            title={'Sign up'}
                            style={Loginbutton}
                        />
                        <Signuptxt>
                            Already on Go Dutch?{' '}
                            <Link to={'/login'}>Sign in</Link>
                        </Signuptxt>
                    </Form>
                </Leftbox>
                <Rightbox />
            </Container>
        </Main>
    );
};

export default Register;
