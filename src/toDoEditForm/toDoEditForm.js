import React, {Component} from 'react'
import {Form, Button} from 'react-bootstrap'
import './toDoEditForm.css'
import {withRouter} from 'react-router-dom'

class ToDoEditForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: null,
            description: null
        }
        this.handleSave = this.handleSave.bind(this)
        this.setTitle = this.setTitle.bind(this)
        this.setDescription = this.setDescription.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.inputTitle = React.createRef()
        this.inputDesc = React.createRef()
    }

    componentDidMount() {
        this.toDos = JSON.parse(localStorage.getItem('toDos')) || []
        this.loadToDo()
    }

    render() {
        return <>
        <Form autoComplete='off' onSubmit={this.handleSave}>
            <Form.Group controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control required type="text" placeholder="Enter title" ref={this.inputTitle} onKeyUp={this.setTitle}/>
            </Form.Group>
            <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Description" required ref={this.inputDesc} onKeyUp={this.setDescription} />
                <Form.Text className="text-muted">
                    Describe your to-do in more details.
                </Form.Text>
            </Form.Group>
            <Button id="submit" variant="primary" type="submit">
                Save
            </Button>
            <Button id="delete" variant="danger" type="button" onClick={this.handleDelete}>
                Delete
            </Button>
        </Form>
        </>
    }

    handleSave(event) {
        event.preventDefault()
        this.updateToDo()
        this.props.history.push('/')
    }

    handleDelete() {
        this.deleteToDo()
        this.props.history.push('/')
    }

    loadToDo() {
        const id = this.props.match.params.id
        const toDoObject = this.toDos.find(element => element.id == id)
        if (id && toDoObject) {
            this.inputTitle.current.value = toDoObject.title
            this.inputDesc.current.value = toDoObject.description
            this.title = toDoObject.title
            this.description = toDoObject.description
        }
    }

    deleteToDo() {
        this.toDos = this.toDos.filter(el => el.id != this.props.match.params.id)
        localStorage.setItem('toDos', JSON.stringify(this.toDos))
    }

    updateToDo() {
        this.toDos.forEach(el => {
            if (el.id == this.props.match.params.id) {
                el.title = this.title
                el.description = this.description
            }
        })
        localStorage.setItem('toDos', JSON.stringify(this.toDos))
    }

    setTitle(event) {
        this.title = event.target.value
    }

    setDescription(event) {
        this.description = event.target.value
    }
}

export default withRouter(ToDoEditForm);