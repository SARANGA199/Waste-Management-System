import React,{Component} from "react";
import axios from 'axios';

export default class Attend extends Component{
  constructor(props){
    super(props);
    this.state={
      attends:[]
    };
  }

componentDidMount(){
  this.retrieveAttends();
}

retrieveAttends(){
  axios.get("http://localhost:8070/attends").then(res => {
    if(res.data.success){
      this.setState({
        attends:res.data.existingAttends
      });

      console.log(this.state.attends)
    }
  });
}

   
   
   filterData(attends,searchKey){
       const result = attends.filter((attend) =>
       attend.name.toLowerCase().includes(searchKey)||
       attend.date.toLowerCase().includes(searchKey)
       
       )

       this.setState({attends:result})
   }

   handleSearchArea = (e) =>{
       const searchKey= e.currentTarget.value;

       axios.get("http://localhost:8070/attends").then(res => {
        if(res.data.success){
         this.filterData(res.data.existingAttends,searchKey)
        }
      });
   }

  render(){
    return(
      <div className="container">
       <div className="row">
       <div className="col-lg-9 mt-2 mb-2">
        <p>All Staff Attendances</p>
         </div>
         <div className="col-lg-3 mt-2 mb-2">
             <input
             className="form-control"
             type="search"
             placeholder="Search"
             name="searchQuery"
             onChange={this.handleSearchArea}>
                 </input>
                 </div>
                 </div>
         <table className="table table-hover" style={{marginTop:'40px'}}>
           <thead>
             <tr>
               <th scope="col">#</th>
               <th scope="col">name</th>
               <th scope="col">date</th>
               <th scope="col">time</th>
               <th scope="col">attendanceType</th>
             </tr>
           </thead>
           <tbody>
               {this.state.attends.map((attends, index) =>(
                 <tr key={index}>
                   <th scope="row">{index+1}</th>
                   <td>
                       <a href ={`/attend/${attends._id}`} style = {{textDecoration:"none"}}>
                       {attends.name}
                       </a>
                   </td>
                   <td>{attends.date}</td>
                   <td>{attends.time}</td>
                   <td>{attends.attendanceType}</td>
                   
                 </tr>
               ))}
           </tbody>
         </table>
            
            <button className="btn btn-success"><a href="/addattend" style={{textDecoration:'none', color:'white'}}>Add New Attendance</a></button>
            <button className="btn btn-success"><a href="#" style={{textDecoration:'none', color:'white'}}>Print</a></button>
            
      </div>
    )
  }
}