import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

class Film extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             person:{} //why did I need to initialize this as an empty object in order for the code to work?
        }
    }
    
    componentDidMount(){
        fetch(`https://ghibliapi.herokuapp.com${this.props.match.path}`)
        .then(response=>response.json())
        .then((obj)=>{
            this.setState({
                person: obj
            })
        })
    }

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title><strong>{this.state.person.name}</strong></Card.Title>
                    <Card.Text>
                        gender: {this.state.person.gender} <br />
                        age: {this.state.person.age} <br />
                        eye color: {this.state.person.eye_color} <br />
                        hair color: {this.state.person.hair_color} <br />
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default Film
