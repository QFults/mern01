import {
  Button,
  Form as Frm,
  FormGroup,
  Label,
  Input
} from 'reactstrap'

const Form = () => {
  return (
    <Frm>
      <FormGroup>
        <Label for='text'>Item</Label>
        <Input
          type='text'
          name='text'
          placeholder='Take out trash'
        />
      </FormGroup>
      <FormGroup>
        <Button color='primary'>Add Item</Button>
      </FormGroup>
    </Frm>
  )
}

export default Form
