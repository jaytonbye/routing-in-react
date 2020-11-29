import React, { Component } from 'react'
import Film from './Film'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class Films extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             films : []
        }
    }
    
    componentDidMount(){
        fetch('https://ghibliapi.herokuapp.com/films')
            .then((response)=>{
                return response.json();
            })
            .then((obj)=> this.setState({
                films : obj
            }))
    }

    render() {
        let filmsArray = this.state.films.map((film)=>{
            return (
                    //(<Film key={film.id} id={film.id} title={film.title} description={film.description} director={film.director} />
                    <Router>
                        <Link to={`/films/${film.id}`} >
                            <h4>{film.title}</h4>
                        </Link>
                        <Route path={`/films/${film.id}`} component={Film}/>
                    </Router>
        )
    })
    return filmsArray
}}
 
export default Films