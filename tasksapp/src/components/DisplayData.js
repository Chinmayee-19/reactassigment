import React,{Component} from "react"
import axios from 'axios'



class DisplayData extends Component{
  state={users:[]};
  async componentDidMount(){
      let result= await axios.get("http://localhost:8090/loadall");
      console.log(result)
      this.setState({users:result.data})
  }
  render(){
      return (
        <div className="container">
            <table className="table">
            <thead>
                    <tr>
                        <th scope="col">EmpId</th>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">Email</th> 
                    </tr>
                </thead>
              <tbody>  
                {this.state.users.map(user=>(
                  <tr>
                      <td>{user.empId} </td>
                      <td> {user.firstName} </td>
                      <td>{user.lastName}</td>
                      <td>{user.email}</td>   
                  </tr>
            )
            
         )}
         </tbody>
        </table>
        </div> 
    );
  }
}

export default DisplayData;