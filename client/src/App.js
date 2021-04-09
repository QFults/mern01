import Jumbotron from './components/Jumbotron'
import Form from './components/Form'
import List from './components/List'
import {
  Container,
  Row,
  Col
} from 'reactstrap'

const App = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs='12'>
            <Jumbotron />
          </Col>
        </Row>
        <Row>
          <Col xs='6'>
            <Form />
          </Col>
          <Col xs='6'>
            <List />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
