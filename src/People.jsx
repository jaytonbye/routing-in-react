import React, { Component } from 'react'
import Person from './Person'

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
                <Person key={person.id} name={person.name} age ={person.age} gender={person.gender} eye_color={person.eye_color} hair_color={person.hair_color} films={person.films} />
        )
    })
    return peopleArray
}}
 
export default People