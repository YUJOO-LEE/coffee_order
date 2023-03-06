import styled from '@emotion/styled';
import Link from 'next/link';

const Header = () => {
  return (
    <Styled.Nav>
      <Styled.List>
        <li><Link href='/'>메인</Link></li>
        <li><Link href='/order'>주문</Link></li>
        <li><Link href='/menu'>메뉴</Link></li>
      </Styled.List>
    </Styled.Nav>
  )
}

export default Header;

const Styled = {
  Nav: styled.nav`
    width: 60px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #c9c1a4;
  `,
  List: styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  `,
}