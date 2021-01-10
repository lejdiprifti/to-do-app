import {Component} from 'react'
import {Form, Button} from 'react-bootstrap'
import ToDoObject from '../model/toDoObject'
import './toDoForm.css'
import {withRouter} from 'react-router-dom'

class ToDoForm extends Component {

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.setTitle = this.setTitle.bind(this)
        this.setDescription = this.setDescription.bind(this)        
    }

    componentDidMount() {
        this.toDos = JSON.parse(localStorage.getItem('toDos')) || []
    }

    render() {
        return <>
        <Form autoComplete="off" onSubmit={this.handleSubmit}>
            <Form.Group controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter title" required onKeyUp={this.setTitle}/>
            </Form.Group>
            <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Description" required onKeyUp={this.setDescription} />
                <Form.Text className="text-muted">
                    Describe your to-do in more details.
                </Form.Text>
            </Form.Group>
            <Button id="submit" variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </>
    }

    handleSubmit(event) {
        event.preventDefault()
        this.addToDo()
        this.props.history.push('/')
    }

    addToDo() {
        this.counter = localStorage.getItem('counter') || 0
        localStorage.setItem('counter', ++this.counter)
        this.toDos.push(ToDoObject(this.counter, this.title, this.description))
        localStorage.setItem('toDos', JSON.stringify(this.toDos))
    }

    setTitle(event) {
        this.title = event.target.value
    }

    setDescription(event) {
        this.description = event.target.value
    }
}

export default withRouter(ToDoForm);