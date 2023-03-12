import OrderListItem from '@/components/order/ListItem';
import styled from '@emotion/styled';

const OrderList = () => {
  return (
    <div>
      <h2>Order List</h2>
      <Styled.ListWrap>
        {Array(10).fill('').map((v, i) => (
          <OrderListItem key={i} />
        ))}
      </Styled.ListWrap>
    </div>
  )
}

export default OrderList;

const Styled = {
  ListWrap: styled.section`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
}