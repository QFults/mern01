import axios from 'axios'

const Item = {
  getItems: () => axios.get('/api/items'),
  addItem: item => axios.post('/api/items', item),
  updateItem: (id, updates) => axios.put(`/api/items/${id}`, updates),
  deleteItem: id => axios.delete(`/api/items/${id}`)
}

export default Item
