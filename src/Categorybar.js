import {NavLink} from "react-router-dom";
import "./Categorybar.css";
function Categorybar(props){
    return(
        <div className="categorybar">
        <NavLink className="categorybar-link" exact to='/'> 
            General 
        </NavLink>
        <NavLink className="categorybar-link" exact to='/business'>
             Business 
        </NavLink>
        <NavLink className="categorybar-link" exact to='/entertainment'> entertainment </NavLink>
        <NavLink className="categorybar-link" exact to='/sports'> sports </NavLink>
        <NavLink className="categorybar-link" exact to='/science'> science </NavLink>
        <NavLink className="categorybar-link" exact to='/technology'> Technology</NavLink>
        <NavLink className="categorybar-link" exact to='/health'>Health</NavLink>


    </div>
    );
   
}
export default Categorybar;
