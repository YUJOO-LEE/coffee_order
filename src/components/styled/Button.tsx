import styled from '@emotion/styled';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

const Button = ( { children, ...props }: PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement> ) => {
  return (
    <Styled.Button {...props}>{children}</Styled.Button>
  )
}

export default Button;

const Styled = {
  Button: styled.button`
    height: 44px;
    padding: 0 15px;
    border: 0;
    border-radius: 5px;
    font-family: inherit;
    font-size: inherit;
    background-color: #ddd;

    &.red{
      background-color: #e00000;
      color: #fff;
    }

    &.blue{
      background-color: #003efa;
      color: #fff;
    }
  `,
}