import React, { Component } from "react";

class Person extends Component{

    constructor(){
        super();
        this.state = {
            loading: true,
            person: null
        }
        this.completed();
    }

    async completed() {
        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            person: data.results[0],
            loading: false
        })
    }

    render(){
       
        if (this.state.loading){
            return <div class="is-size-5">Generuojamas naujas asmuo...</div>
        }
        if (!this.state.person){
            return <div>API nieko negražino.</div>
        }

        return( 
        <div className="columns" style={{backgroundColor: 'white'}}>
            <div class="column is-3">
                <div className="box has-text-left">
                    <p className="title is-size-4">Vardas: {this.state.person.name.first}</p>
                    <p className="title is-size-4">Pavardė: {this.state.person.name.last}</p>
                    <img src={this.state.person.picture.large} />                    
                </div>
                <button className="button is-info" onClick={() => this.completed()}>Generuoti naują klientą</button>
            </div>

            <div class="column is-3">
                <div className="box has-text-left">
                    <p className="title is-size-4">Gyvenamoji informacija</p>
                    <p className="title is-size-5">Šalis: {this.state.person.location.country}</p>
                    <p className="title is-size-5">Regionas: {this.state.person.location.state}</p>
                    <p className="title is-size-5">Miestas: {this.state.person.location.city}</p>
                    <p className="title is-size-5">Gatvė: {this.state.person.location.street.name}-{this.state.person.location.street.number}</p>
                    <p className="title is-size-5">Pašto kodas: {this.state.person.location.postcode}</p>
                </div>
            </div>

            <div class="column is-3">
                <div className="box has-text-left">
                    <p className="title is-size-4">Prisijungimo informacija</p>
                    <p className="title is-size-5">Vartotojo vardas: {this.state.person.login.username}</p>
                    <p className="title is-size-5">Slaptažodis: {this.state.person.login.password}</p>                   
                </div>
            </div>

            <div class="column is-3">
                <div className="box has-text-left">
                    <p className="title is-size-4">Kontaktai</p>
                    <p className="title is-size-5">Telefonas: {this.state.person.cell}</p>
                    <p className="title is-size-5">El. paštas: {this.state.person.email}</p>
                </div>
            </div>

        </div>
        )
    }
}

export default Person;
