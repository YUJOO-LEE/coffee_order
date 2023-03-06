import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';
import Header from './Header';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Header />
      <Styled.Main>
        {children}
      </Styled.Main>
    </div>
  )
}

export default Layout;

const Styled = {
  Main: styled.main`
    padding-left: 60px;
  `
}