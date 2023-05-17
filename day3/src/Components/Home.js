import { NavLink } from "react-router-dom";

let Home = () => {
    return (
      <div>
        <h1
          style={{
            marginLeft: '700px',
            marginTop: '100px',
            width: '500px',
            height: '500px',
            backgroundImage: 'url(cover.png)',
            backgroundSize: 'cover',
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
         <NavLink style={({isActive})=>({color:isActive?'red':'blue'})} to="/articles"> music db</NavLink>
        </h1>
      </div>
    );
  };
  
  export default Home;