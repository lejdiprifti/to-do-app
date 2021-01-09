import {Component} from 'react'
import ToDo from '../toDo/toDo'
import './dashboard.css'

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.loadToDos()
        this.state = {
            toDos: []
        }
        this.addToDo = this.addToDo.bind(this)
    }
    
    render() {
        return <div>
            <input id='add' type='text' placeholder='Add a to-do' onKeyDown={this.addToDo} />
            <div>{this.toDos.map((el,idx) => <ToDo key={idx} value={el}/>)}</div>
        </div>
    }

    addToDo(event) {
        if (event.key === 'Enter') {
            this.toDos.push(event.target.value)
            this.setState({toDos: this.toDos})
            localStorage.setItem('toDos', JSON.stringify(this.toDos))
        }
    }

    loadToDos() {
        this.toDos = JSON.parse(localStorage.getItem('toDos')) || []
    }

}

export default Dashboard