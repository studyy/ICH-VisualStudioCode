function ShoppingList(props) {
  if (props.items.length !== 0) {
    return (
      <ul>
        {props.items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )
  } else {
    return <p>Список покупок пуст!</p>
  }
}

export default ShoppingList
