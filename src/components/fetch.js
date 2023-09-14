import { Component } from "react"
import LogementsUpdated from "./logement-id"

class Logements extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            logements: [],
        }
        
    }
    componentDidMount() {
    
    fetch ("/logements.json")
        
        .then((response) => response.json ())
        .then((data) => { this.setState ({logements : data})
        })
        .catch ((error) => console.log (error))
    }
render (){
    return (
        <div>
            
            {this.state.logements.map(logements => 
                <div onClick={LogementsUpdated}  key={logements.id}> 
                <Logements logements={this.state} updateLogements={this.setState} />
                    <h1> {logements.title} </h1>
                    <img src= {logements.cover} alt="" /> 
                </div> 
            )}
        </div>     
       )
}
}
export default Logements



