import React, { Component } from 'react'
import axios from 'axios'
export default class home extends Component {

  constructor(props){
    super(props);
  
  
  this.state={

    items:[]

  }
}

  componentDidMount(){
    this.retrieveItem();
  }

  retrieveItem(){
      axios.get("http://localhost:8070/item/posts").then(res =>{
        if(res.data.success){
          this.setState({
            items:res.data.existingitems
          });
        console.log(this.state.items)
          
        }
      });
 
  }

  onDelete = (id)=>{

      axios.delete('http://localhost:8070/item/deleteitem/'+id).then((res)=>{

              alert("delete successfully")
              this.retrieveItem()
    
      })

  }
  

  render() {
    return (
      <div className="container">
        <h1>All Items</h1>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Itemname</th>
              <th scope="col">category</th>
              <th scope="col">Date</th>
              <th scope="col">Discription</th>
              <th scope="col">Unitprice</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map((items,index)=>(
              <tr key={index}>
                <th  scope="row">{index+1}</th>
                <td>{items.itemName}</td>
                <td>{items.category}</td>
                <td>{items.date}</td>
                <td>{items.description}</td>
                <td>{items.unitPrice}</td>
                <td>
                    <a className = "btn btn-warning" href={'/update/'+ items._id}>
                            Edit
                    </a>
                    &nbsp;
                    <a className = "btn btn-danger" href="#" onClick={()=>this.onDelete(items._id)}>
                            Delete
                    </a>
                </td>
              </tr> 
            ))}
          </tbody>
          </table>
          <button type="button" className="btn btn-success"><a href='/add' style={{textDecoration:"none",color:'white'}}>Add New Item</a></button>
      </div>
    )
  }
}
