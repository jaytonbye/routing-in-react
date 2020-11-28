import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

class Film extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title><strong>{this.props.name}</strong></Card.Title>
                    <Card.Text>
                        gender: {this.props.gender} <br />
                        age: {this.props.age} <br />
                        eye color: {this.props.eye_color} <br />
                        hair color: {this.props.hair_color} <br />
                        <a href={this.props.films}>films</a>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default Film
