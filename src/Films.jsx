import React, { Component } from 'react'

class Films extends Component {
    
    componentDidMount(){
        fetch('https://ghibliapi.herokuapp.com/films')
            .then((response)=>{
                return response.json();
            })
            .then((obj)=> console.log(obj))
    }

    render() {
        return (
            <div>
                <h1>my favorite movie!</h1>
            </div>
        )
    }
}
 
export default Films