import { useParams } from "react-router-dom"

let StudentDetails=()=>{
    let{id}=useParams()
    return(
       <div  style={{textAlign:'center',fontSize:'50px',marginTop:'100px',color:'pink'}}>
        studentID<p>{id}</p>
       </div>
    )
}
export default StudentDetails