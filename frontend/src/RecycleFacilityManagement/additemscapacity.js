import React, { Component } from 'react'
import axios from 'axios';

export default class discompanyitems extends Component {

    constructor(props){
        super(props);
        
      
        
        this.state={

          companyName:"",
          capacity:"",
          itemName:"",
          //itemCategory:"",
          Date:"",



          items:[],
      
        
    
        compnies:[]
    
      }
    }
    
      componentDidMount(){
        this.retrivecompany();
        this.retrieveItem();
      }
    
      retrivecompany(){
          axios.get("http://localhost:8070/Company/posts").then(res =>{
            if(res.data.success){
              this.setState({
                compnies:res.data.existingcompnies
              });
            console.log(this.state.compnies)
              
            }
          });
     
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

    handleinputchanges= (e)=>{
      const{name,value} = e.target;

      this.setState({
         ...this.state,
          [name]:value

      })
}


    onSubmit = (e)=>{

      e.preventDefault();

      const {companyName,capacity,itemName,Date} = this.state;

      const data ={
          companyName:companyName,
          capacity:capacity,
          itemName:itemName,
          //itemCategory:itemCategory,
          Date:Date
          //companyName:localStorage.setItem("copanyName",compnies.companyName),
          //itemName:localStorage.setItem("itemName",compnies.itemName)
         // companyName:this.state.compnies.companyName,
         // itemName:this.state.items.itemName
      }

      console.log(data)

      axios.post("http://localhost:8070/CompanyItem/addcompanyitem",data).then((res)=>{

            if(res.data.success){

              alert("item capacity added successfuly")              
              this.setState({
                companyName:"",
                capacity:"",
                itemName:"",
                companyName:"",
                  //itemName:""
              })
            }

      })


  }

    render() {
        return (
          <div class="container-fluid px-1 py-5 mx-auto">
          <div class="row d-flex justify-content-center">
              <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <div class="card">
              <h3 class="text-center mb-4" >Add Item Capcity For Company</h3>
            <div>
               <form class="row g-3" class="form-card" onSubmit={this.onSubmit}>
             
              <div>
              <label style={{paddingRight:'400px',paddingTop:'30px'}} for="inputAddress" class="form-label">Select Company</label>
              <select style={{width:'280px'}} class="form-select" aria-label="Default select example" name="companyName" value={this.state.companyName} onChange={this.handleinputchanges} required>
              <option selected>Select</option>
              {this.state.compnies.map((compnies,index)=>(
                    
                <option value={compnies.companyName}  >{compnies.companyName} Re_number : {compnies.regNumber}</option>

                ))}
                </select>
                </div>
            
              <div>
              <label style={{paddingRight:'370px',paddingTop:'30px'}} for="inputAddress" class="form-label">Select Rcycling Item</label>
              <select style={{width:'280px'}} class="form-select" aria-label="Default select example" name="itemName" value={this.state.itemName} onChange={this.handleinputchanges} required>
              <option selected>Select</option>
              {this.state.items.map((items,index)=>(
                    
                <option value={items.category+" "+items.itemName} >{items.category} {items.itemName}</option>

                ))}
                </select>
                </div>
                <div class="col-12">
              <label style={{paddingRight:'485px',paddingTop:'20px'}}   >Date</label>
                <input style={{width:'280px'}} type="date" class="form-control" name="Date" placeholder="1234 Main St" value={this.state.Date} onChange={this.handleinputchanges} required/>
              </div>
                <div class="col-12">
                <label style={{paddingRight:'400px',paddingTop:'20px'}} for="inputAddress" class="form-label">Enter Capacity(Kg)</label>
                <input style={{width:'280px'}} type="text" class="form-control" name="capacity"  value={this.state.capacity} onChange={this.handleinputchanges} required/>
              </div>
              <div style={{paddingTop:'20px'}} class="col-12">
                  
                <button  type="submit" class="btn btn-primary" class="btn-block btn-primary"  class="btn btn-primary">submit</button>
              </div>
            </form>
            </div>
            </div>
            </div>
            </div>
            </div>
        )
    }
}
