import React, { Component } from 'react';
import Students from './Students';
import Regsister from './Regsister';
class Home extends Component {
    constructor(){
        super();
        this.state = {
            users:[] 
        }
    }
    ReciveStudent = (user)=>{
        this.setState((prevState) => ({
            users: [...prevState.users, user]
          }), () => {
            console.log(this.state.users);
          });
    }
    render(){
        return(
            <div>
                
                <Regsister onAddUser={this.ReciveStudent}/>
                <Students students={this.state.users}/>
            </div>
        )
}}
export default Home