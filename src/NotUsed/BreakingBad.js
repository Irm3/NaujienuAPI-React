import React, { Component } from "react";

class BreakingBad extends Component{

    constructor(){
        super();
        this.state = {
            loading: true,
            People: null,
        }
        this.completed();
    }

    async completed() {
        const url = "https://www.breakingbadapi.com/api/characters/1";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            people: data,
            loading: false
        })
        console.log(this.state.people);
    }

    render(){
       
        if (this.state.loading){
            return <div>Kraunami duomenys...</div>
        }
        if (!this.state.people){
            return <div>Nėra.</div>
        }

        return( 
        <div>
            {this.people.map((item, i) => (
                <tr key={i}>
                    <td>{item.char_id}</td>
                    <td>{item.name}</td>
                </tr>
            ))}


        </div>
        )
    }
}

export default BreakingBad;