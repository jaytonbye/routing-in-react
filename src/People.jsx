import React, { Component } from 'react'
import Person from './Person'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class People extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             people : []
        }
    }
    
    componentDidMount(){
        fetch('https://ghibliapi.herokuapp.com/people')
            .then((response)=>{
                return response.json();
            })
            .then((obj)=> this.setState({
                people : obj
            }))
    }

    render() {
        let peopleArray = this.state.people.map((person)=>{
            return (       
                //<Person key={person.id} name={person.name} age ={person.age} gender={person.gender} eye_color={person.eye_color} hair_color={person.hair_color} films={person.films} />
                <Router>
                    <Link to={`/people/${person.id}`} >
                        <h4>{person.name}</h4>
                    </Link>
                    <Route exact path={`/people/${person.id}`} component={Person}/>
                </Router>
        )
    })
    return peopleArray
}}
 
export default People