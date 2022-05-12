import React,{Component} from "react"

class UserInput extends Component{
  render(){
      return (
        <div className="container">
          <div className="container">
        <form>
                <div className="mb-3">
                    <label for="exampleInputName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleName"  aria-describedby="emailHelp"/>
                </div>
                
                <div className="mb-3">
                    <label for="exampleInputEmail" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleEmail"  aria-describedby="emailHelp"/>
                </div>
                
                <div className="mb-3">
                    <label for="exampleInputCity" class="form-label">City</label>
                    <input type="text" class="form-control" id="exampleCity" />
                </div>

                <div className="mb-3">
                    <label for="exampleInputDept" class="form-label">Department</label>
                    <input type="text" class="form-control" id="exampleDept" />
                </div>
                
  
                <button type="submit" class="btn btn-primary">Submit</button>
          </form>
          </div>
          </div>
    );
  }
}

export default UserInput;