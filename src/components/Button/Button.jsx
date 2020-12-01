import React from 'react';
import { Wrapper } from './Styled';

const Button = (props) => {
    return (
        <Wrapper styled={props.style}>
            {props.type === 'submit' ? (
                <input type={'submit'} value={props.title} />
            ) : (
                <button>{props.title}</button>
            )}
        </Wrapper>
    );
};

export default Button;
