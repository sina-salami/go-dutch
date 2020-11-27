import React from 'react';
import { Container, InputStyle } from './Styled';
import TextInput from '../../components/TextInput';

const Register = (props) => {
    return (
        <Container>
            <TextInput style={InputStyle} placeholder={'This is register'} />
        </Container>
    );
};

export default Register;
