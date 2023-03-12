import Button from '@/components/styled/Button';
import styled from '@emotion/styled';

const OrderListItem = () => {
  return (
    <Styled.ListItem>
      <Styled.Status />
      <Styled.No>100</Styled.No>
      <Styled.Contents>
        <p>3건</p>
        <p>주문내용 요약</p>
      </Styled.Contents>
      <Styled.Control>
        <Button>취소</Button>
        <Button className='blue'>접수</Button>
        <Button>호출</Button>
        <Button>완료</Button>
      </Styled.Control>
    </Styled.ListItem>
  )
}

export default OrderListItem;

const Styled = {
  ListItem: styled.article`
    display: flex;
    align-items: stretch;
    border: 1px solid #ddd;
    border-radius: 5px;
    overflow: hidden;
    transition: .3s;

    &>p{
      padding: 20px 10px;
    }

    &:hover{
      border: 1px solid #bbb;
      box-shadow: 0 0 5px rgba(0,0,0,0.1);
    }
  `,
  No: styled.p`
    font-size: 36px;
    font-weight: bold;
  `,
  Contents: styled.p`
    flex: 1;
  `,
  Status: styled.p`
    padding: 0 !important;
    width: 10px;
    background-color: #ddd;
  `,
  Control: styled.p`
    display: flex;
    gap: 10px;
  `
}