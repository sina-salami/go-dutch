import React from 'react';
import { Wrapper } from './Styled';

const TextInput = (props) => {
    return (
        <Wrapper inputStyle={props.style}>
            <input
                type={props.type}
                name={props.name}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
            />
        </Wrapper>
    );
};

export default TextInput;
