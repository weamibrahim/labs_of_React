import { NavLink } from "react-router-dom";

let ArticlesItem=(props)=>{
    let {oneArticle} = props;
    return(
        <div className="alert alert-info"  key={oneArticle.id}> 
        <h2  style={{textAlign:'center'}}> < NavLink to={`/articles/${oneArticle.id}`}> {oneArticle.name}</NavLink></h2>
        <img style={{width:'300px',height:'300px',marginLeft:'800px',marginTop:'100px'}} src={`covers/${oneArticle.cover}.jpg`} />
       
        
          </div>
    )
}
export default ArticlesItem