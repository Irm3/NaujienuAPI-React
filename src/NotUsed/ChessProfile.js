import React, { Component } from "react";

class ChessProfile extends Component{

    constructor(){
        super();
        this.state = {
            loading: true,
            person: null,
            useris: "",
            searched: false
        }
        this.completed()
    }

    async completed() {
        const url = "https://api.chess.com/pub/player/" + this.state.useris;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            person: data,
            loading: false
        })
    }

    changeMessage(event) {
        event.preventDefault();
        this.setState({
            useris: event.target.elements.vartotojas.value
        })
        this.completed();
    }
    
    render(){
            
        if (this.state.loading){
            return <div>Kraunami duomenys...</div>
        }
        if (!this.state.useris){
            return (
            <div>
                Nėra asmens.
                <form onSubmit={e => this.changeMessage(e)}>
                    <label>
                    <input
                        placeholder="Žaidėjo vardas"
                        id="vartotojas"
                    />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

            </div>
            )
        }

        if (this.state.useris)
        {
        return( 
        <div>    
            <h1 className="title is-size-2">Vartotojo vardas: {this.state.person.username}</h1>
            <img src={this.state.person.avatar} />
            <h2 className="title is-size-5">Titulas: {this.state.person.title}</h2>
            <h1 className="title is-size-6">Šalies kodas: {this.state.person.country}</h1>
            <h1 className="title is-size-6">Twitch link: {this.state.person.twitch_url}</h1>
            <h1 className="title is-size-6">Sekėjų kiekis: {this.state.person.followers} vartotojų</h1>      
            <a href={this.state.person.url}>Žaidėjo nuoroda</a>
            

            {/* <div>
                Paieška:
                <input className="input" type="text" name="search"  /> 
                <button className="button" onClick={e => this.changeMessage(e.target)}>Submit</button>
                <input type="text" name="search" id="search" onChange={e => this.changeMessage(e.target.value)} />              
            </div> */}

            <form onSubmit={e => this.changeMessage(e)}>
                    <label>
                    <input
                        placeholder="Žaidėjo vardas"
                        id="vartotojas"
                    />
                    </label>
                    <input type="submit" value="Submit" />
            </form>
        </div>
        )
        }
    }
}

export default ChessProfile;