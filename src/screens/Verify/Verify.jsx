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
} from '../Login/Styled';
import { VerifyButton } from './Styled';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

const Verify = (props) => {
    return (
        <Main>
            <Container>
                <Leftbox>
                    <TextWrapper>
                        <Line />
                        <Title>Verify your mobile number</Title>
                        <Line />
                    </TextWrapper>
                    <Form>
                        <Signintxt>
                            Enter the verification code we've sent you via SMS
                        </Signintxt>
                        <TextInput
                            id={'code'}
                            name={'code'}
                            placeholder={'Code'}
                            icon={process.env.PUBLIC_URL + '/img/verify.svg'}
                            style={Signupinput}
                        />
                        <Button
                            type={'submit'}
                            title={'Verify'}
                            style={VerifyButton}
                        />
                    </Form>
                    <img
                        alt={'vector'}
                        src={process.env.PUBLIC_URL + '/img/verifyVector.svg'}
                    />
                </Leftbox>
                <Rightbox />
            </Container>
        </Main>
    );
};

export default Verify;
