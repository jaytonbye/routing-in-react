import React, { Component } from 'react'
import Film from './Film'

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
                    <Film key={film.id} id={film.id} title={film.title} description={film.description} director={film.director} />
        )
    })
    return filmsArray
}}
 
export default Films