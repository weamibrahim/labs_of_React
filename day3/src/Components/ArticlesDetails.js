import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
let ArticlesDetails=()=>{
    let{id}=useParams();
    let [article,setArticle]=useState({});
    useEffect(()=>{
        fetch(`http://localhost:3500/artists/${id}`)
        .then((response)=>{return response.json()})
        .then((data)=>{
            setArticle(data);
        })
        .catch((err)=>{console.log(err)});
    })
    return(
        
        <div className="alert alert-success w-50 h-75" style={{marginLeft:'500px',marginTop:'100px'}}> 
        <h1 style={{textAlign:'center'}}><NavLink style={({isActive})=>({color:isActive?'red':'blue',})} to="/articles"> music db</NavLink></h1>
        <h2 style={{textAlign:'center'}}>{article.name}</h2>
        <h5  style={{textAlign:'center',width:'50%',margin:'auto'}}> {article.bio}</h5>
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',width:'30%',marginLeft:'300px'}}>
        {article.albums && article.albums.map((album) => (
        <img
            style={{width:'100px',height:'100px'}}
            key={album.albumId}
            src={`../albums/${album.cover}${album.cover.endsWith('.png') ? '.png' : '.jpg'}`}
            alt="Album Cover"
        />
        ))}
            </div>
        
        
          </div>
    )
}
export default ArticlesDetails