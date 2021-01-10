import {Component} from 'react'
import {Form, Button} from 'react-bootstrap'
import ToDoObject from '../model/toDoObject'
import './toDoForm.css'
import {withRouter} from 'react-router-dom'

class ToDoForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: null,
            description: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.setTitle = this.setTitle.bind(this)
        this.setDescription = this.setDescription.bind(this)        
    }

    componentDidMount() {
        this.toDos = JSON.parse(localStorage.getItem('toDos')) || []
        const id = this.props.match.params.id
        const toDoObject = this.toDos.find(element => element.id == id)
        if (id && toDoObject) {
            this.setState({
                title: toDoObject.title,
                description: toDoObject.description
            })
        }
    }

    render() {
        return <>
        <Form>
            <Form.Group controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter title" value={this.state.title} onKeyUp={this.setTitle}/>
            </Form.Group>
            <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Description" value={this.state.description} onKeyUp={this.setDescription} />
                <Form.Text className="text-muted">
                    Describe your to-do in more details.
                </Form.Text>
            </Form.Group>
            <Button id="submit" variant="primary" type="button" onClick={this.handleSubmit}>
                Submit
            </Button>
        </Form>
        </>
    }

    handleSubmit() {
        if (this.props.match.params.id) {
            this.toDos.forEach(el => {
                if (el.id == this.props.match.params.id) {
                    el.title = this.title
                    el.description = this.description
                }
            })
            this.toDos.push(ToDoObject(this.counter, this.title, this.description))
            localStorage.setItem('toDos', JSON.stringify(this.toDos))
        } else {
            this.counter = localStorage.getItem('counter') || 0
            localStorage.setItem('counter', ++this.counter)
            this.toDos.push(ToDoObject(this.counter, this.title, this.description))
            localStorage.setItem('toDos', JSON.stringify(this.toDos))
        }
    }

    setTitle(event) {
        this.title = event.target.value
    }

    setDescription(event) {
        this.description = event.target.value
    }
}

export default withRouter(ToDoForm);