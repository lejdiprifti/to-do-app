import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Component} from 'react'
import { Card } from 'react-bootstrap'
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons'
import './toDo.css'

class ToDo extends Component {
    render() {
        return <Card
        bg='primary'
        text={'light'}
        style={{ width: '18rem', marginLeft: '10%' }}
        className="mb-2"
      >
        <Card.Header>To-Do</Card.Header>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            {this.props.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
            <FontAwesomeIcon  className="pen" icon={faPen} />
            <FontAwesomeIcon  className="times" icon={faTimes} />
        </Card.Footer>
      </Card>
    }
}

export default ToDo;