import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Component} from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { faCheck, faPen } from '@fortawesome/free-solid-svg-icons'
import './toDo.css'

class ToDo extends Component {

    constructor(props){
      super(props)
      this.markAsDone = this.markAsDone.bind(this)
    }

    componentDidMount() {
      this.toDos = JSON.parse(localStorage.getItem('toDos') || "[]")
    }

    render() {
        return <Card
        bg={this.props.done ? 'success':'primary'}
        text={'light'}
        style={{ width: '25rem', marginLeft: '8%'}}
        className="mb-2"
      >
        <Card.Header>To-Do</Card.Header>
        <Card.Body style={{textDecoration: this.props.done ? 'line-through':'none'}}>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
            {this.props.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
            {this.props.done ? 
            <i>Done</i>
            :
            <>
            <Button variant="primary" type="button" onClick={this.markAsDone}>
              <FontAwesomeIcon  className="pen" icon={faCheck} />
            </Button>
            <Link id="edit" to={'edit/' + this.props.id}><Button><FontAwesomeIcon  className="pen" icon={faPen} /></Button></Link>
            </>}
        </Card.Footer>
      </Card>
    }

    markAsDone() {
      this.toDos.forEach(el => {
        if (el.id == this.props.id) {
            el.done = true
        }
      })
      localStorage.setItem('toDos', JSON.stringify(this.toDos))
      this.props.loadToDos()
    }

}

export default ToDo;