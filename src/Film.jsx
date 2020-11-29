import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

class Film extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             film: {}
        }
    }
    
    componentDidMount(){
        fetch(`https://ghibliapi.herokuapp.com${this.props.match.path}`)
        .then(response=> response.json())
        .then((obj)=>{
            this.setState({
                film: obj
            })
        })
    }

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title><strong>{this.state.film.title}</strong></Card.Title>
                    <Card.Subtitle>Directed by {this.state.film.director}</Card.Subtitle>
                    <Card.Text>
                        <br />
                        {this.state.film.description}
                        <br />
                        <br />
                        Rotten Tomatoes Score: {this.state.film.rt_score}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default Film
