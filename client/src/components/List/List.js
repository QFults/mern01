import { useContext } from 'react'
import {
  ListGroup,
  ListGroupItem
} from 'reactstrap'
import ItemContext from '../../utils/ItemContext'

const List = () => {
  const { items } = useContext(ItemContext)

  return (
    <ListGroup>
      {
        items.map(item => <ListGroupItem key={item._id}>{item.text}</ListGroupItem>)
      }
    </ListGroup>
  )
}

export default List
