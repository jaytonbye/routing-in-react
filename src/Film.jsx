import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

class Film extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    componentDidMount(){
        console.log(this.props.match)
    }

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title><strong>{this.props.title}</strong></Card.Title>
                    <Card.Subtitle>Directed by {this.props.director}</Card.Subtitle>
                    <Card.Text>
                        {this.props.description}<br />
                        Id = {this.props.id}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default Film
