import './toDo.css'
import {Component} from 'react'
import { Alert } from 'react-bootstrap'

class ToDo extends Component {

    render() {
        return <Alert variant='success'>
        <Alert.Heading>{this.props.value}</Alert.Heading>
      </Alert>
    }
}

export default ToDo;