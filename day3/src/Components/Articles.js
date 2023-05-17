import { Component } from "react";
import ArticlesItem from "./ArticlesItem";
class Articles extends Component {
    constructor(){
    super();
    this.state={
        AllArticles:[]
    }
       
    }

        RenderArticles = ()=>{
            return this.state.AllArticles.map((article)=>{
                return(
                <ArticlesItem oneArticle={article}  key={article.id}/>
                )
            })
        }
    render() {
        return (
            <div>
               {this.RenderArticles()}
            </div>
        );
    }
    componentDidMount(){
        fetch("http://localhost:3500/artists")
        .then((response)=>{return response.json()})
        .then((data)=>{
            this.setState({AllArticles:data});
        })
        .catch((err)=>{console.log(err)});
    }
}
export default Articles