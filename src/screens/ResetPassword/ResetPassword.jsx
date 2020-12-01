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
    Signintxt,
    Loginbutton,
} from '../Login/Styled';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

const ResetPassword = () => {
    return (
        <Main>
            <Container>
                <Leftbox>
                    <TextWrapper>
                        <Line />
                        <Title>Reset Password</Title>
                        <Line />
                    </TextWrapper>
                    <Form>
                        <Signintxt>Create your new password</Signintxt>
                        <TextInput
                            type={'password'}
                            id={'password'}
                            name={'password'}
                            placeholder={'New Password'}
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
                            title={'Set new password'}
                            style={Loginbutton}
                        />
                    </Form>
                </Leftbox>
                <Rightbox />
            </Container>
        </Main>
    );
};

export default ResetPassword;
