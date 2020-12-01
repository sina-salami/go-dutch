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
    Signuptxt,
    Signintxt,
} from '../Login/Styled';
import { VerifyButton } from '../Verify/Styled';
import TextInput from '../../components/TextInput';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const ForgetPassword = () => {
    return (
        <Main>
            <Container>
                <Leftbox>
                    <TextWrapper>
                        <Line />
                        <Title>Forgot Password</Title>
                        <Line />
                    </TextWrapper>
                    <Form>
                        <Signintxt>
                            Enter the your account phone number and we will send
                            you code via SMS
                        </Signintxt>
                        <TextInput
                            type={'phone'}
                            id={'phone'}
                            name={'phone'}
                            placeholder={'Phone number'}
                            icon={process.env.PUBLIC_URL + '/img/avatar.svg'}
                            style={Signupinput}
                        />
                        <Button
                            type={'submit'}
                            title={'Send code'}
                            style={VerifyButton}
                        />
                        <Signuptxt>
                            Back to {' '}
                            <Link to={'/login'}>Sign in</Link>
                        </Signuptxt>
                    </Form>
                </Leftbox>
                <Rightbox />
            </Container>
        </Main>
    );
};

export default ForgetPassword;
