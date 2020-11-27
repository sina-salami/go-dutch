import React from 'react';
import { Container, InputStyle } from './Styled';
import TextInput from '../../components/TextInput';

const Login = () => {
    return (
        <Container>
            <TextInput style={InputStyle} placeholder={'This is login'} />
        </Container>
    );
};

export default Login;
