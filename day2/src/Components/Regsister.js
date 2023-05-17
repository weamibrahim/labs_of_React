
import { Component} from 'react'

class Regsister extends Component {
    constructor(){
        super();
        this.state = {
           age:"",name:""
        }
    }
    getName = (e)=>{
        this.setState({name:e.target.value});
        
    }
    getAge = (e)=>{
        this.setState({age:e.target.value});
      
    }

    handleAdd = () => {
        const { name, age } = this.state;
        this.props.onAddUser({ name, age });
        this.setState({ name: "", age: "" }); // Reset name and age to empty strings
      };
      
      render() {
        const { name, age } = this.state;
        return (
          <div className="form">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="form-input"
              value={name}
              onChange={this.getName}
            />
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type="text"
              name="age"
              className="form-input"
              value={age}
              onChange={this.getAge}
            />
            <button className="btn" type="submit" onClick={this.handleAdd}>
              ADD
            </button>
          </div>
        );
      }
}
export default Regsister;