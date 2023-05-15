import { Component } from "react";
class ElementsClass extends Component{
    //name = "Ahmed";
   
    getData = (e)=>{
            this.setState({name:e.target.value})        
    }
    reset=()=>{
        this.setState({name:""})
    }
    constructor(){
        super();
        this.state = {
            name:""
        }
    }
   
    render(){
        return(
            <div style={{border:'6px solid black',margin:'auto',width:'600px',height:'200px'}}>
             
                
                <input style={{ marginLeft:200,backgroundColor:'pink'}}
                    type='text' 
                    value={this.state.name} 
                    onChange={this.getData}
                />
                {/* <img src="./Images/1.jpg"/> */}
                <p style={{textAlign:'center' ,backgroundColor:'pink'}}>{this.state.name}</p>
                <button style={{marginLeft:'250px'}} onClick={this.reset} >reset</button>
              </div>
        )
    }
}

export default ElementsClass;
