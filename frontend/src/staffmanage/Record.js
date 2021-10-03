import React,{Component} from "react";
import axios from 'axios';

export default class Record extends Component{
  constructor(props){
    super(props);
    this.state={
      records:[]
    };
  } 

componentDidMount(){
  this.retrieveRecords();
}

retrieveRecords(){
  axios.get("http://localhost:8070/records").then(res => {
    if(res.data.success){
      this.setState({
        records:res.data.existingRecords
      });

      console.log(this.state.records)
    }
  });
}

   onDelete=(id) =>{
       axios.delete(`http://localhost:8070/record/delete/${id}`).then((res) =>{
           alert("Deleted Successfully");
           this.retrieveRecords();
       })
   }
   
   filterData(records,searchKey){
       const result = records.filter((record) =>
       record.userName.toLowerCase().includes(searchKey)||
       record.OTHours.toLowerCase().includes(searchKey)||
       record.attendance.toLowerCase().includes(searchKey)
       )

       this.setState({records:result})
   }

   handleSearchArea = (e) =>{
       const searchKey= e.currentTarget.value;

       axios.get("http://localhost:8070/records").then(res => {
        if(res.data.success){
         this.filterData(res.data.existingRecords,searchKey)
        }
      });
   }

  render(){
    return(
      <div className="container">
       <div className="row">
       <div className="col-lg-9 mt-2 mb-2">
        <p>All Staff Record</p>
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
               <th scope="col">userName</th>
               <th scope="col">OTHours</th>
               <th scope="col">attendance</th>
               <th scope="col">Action</th>
             </tr>
           </thead>
           <tbody>
               {this.state.records.map((records, index) =>(
                 <tr key={index}>
                   <th scope="row">{index+1}</th>
                   <td>
                       <a href ={`/record/${records._id}`} style = {{textDecoration:"none"}}>
                       {records.userName}
                       </a>
                   </td>
                   <td>{records.OTHours}</td>
                   <td>{records.attendance}</td>
                   <td>
                      <a className="btn btn-warning" href={`/edit/${records._id}`}>
                        <i className="fas fa-edit"></i>&nbsp;Edit
                      </a>
                      &nbsp;
                      <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(records._id)}>
                        <i className="far fa-trash-alt"></i>&nbsp;Delete
                      </a>
                   </td>
                 </tr>
               ))}
           </tbody>
         </table>
            
            <button className="btn btn-success"><a href="/addrecord" style={{textDecoration:'none', color:'white'}}>Add New Record</a></button>

      </div>
    )
  }
}