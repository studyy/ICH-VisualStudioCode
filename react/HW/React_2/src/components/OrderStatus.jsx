function OrderStatus(props) {
  return (
    <div>
      {props.orders.map(item => (
        <p key={item.orderId}>
          Заказ #{item.orderId}: {item.status}.
        </p>
      ))}
    </div>
  )
}

export default OrderStatus
