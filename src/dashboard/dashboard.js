import {Component} from 'react'
import { CardColumns, Button } from 'react-bootstrap'
import ToDo from '../toDo/toDo'
import {Link} from 'react-router-dom'
import './dashboard.css'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Dashboard extends Component {    
    constructor(props) {
        super(props)
        this.state = {
            toDos: this.sortToDos(JSON.parse(localStorage.getItem('toDos'))) || []
        }
        this.orderedArray = []
    }

    render() {
        return <div>
            <Link to='add'><Button className="link" variant="outline-success"><FontAwesomeIcon id="addPlus" icon={faPlus} size="xs" /> Add</Button></Link>
            <CardColumns>{this.state.toDos.map((el,idx) => <ToDo key={idx} id={el.id} title={el.title} description={el.description}/>)}</CardColumns>
        </div>
    }

    loadToDos() {
        this.toDos = JSON.parse(localStorage.getItem('toDos')) || []
        this.setState({toDos: this.sortToDos(this.toDos)})
    }

    sortToDos(array) {
        let orderedArray = [...array]
        orderedArray.sort((a, b) => {
            return b.id - a.id
        })
        return orderedArray
    }

}

export default Dashboard