import React, { Component } from 'react'
import axios from 'axios';

export default class upcompany extends Component {

    constructor(props){
        super(props);
            this.state={
                companyName:"",
                companyLocation:"",
                regNumber:"",
                itemId:"",

            }

            this.state={

              items:[]
          
            }
    }

   // componentDidMount(){
        
     // }
    
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
    const id = this.props.match.params.id;

    const {companyName,companyLocation,regNumber,itemId} = this.state;

    const data ={
        companyName:companyName,
            companyLocation:companyLocation,
            regNumber:regNumber,
            itemId:itemId,
    }

    console.log(data)

    axios.put("http://localhost:8070/Company/updatecompany/"+id,data).then((res)=>{

          if(res.data.success){

              alert("Company details update successfuly")

              this.props.history.push("/discompanies")

              
            this.setState({
                companyName:"",
                companyLocation:"",
                regNumber:"",
                itemId:"",
            })
          }

    })


}

componentDidMount(){

    this.retrieveItem();

    const id = this.props.match.params.id;

            axios.get("http://localhost:8070/Company/posts/"+id).then((res)=>{

                    if(res.data.success){
                        this.setState({
                            companyName:res.data.recycleCompanies.companyName,
                            companyLocation:res.data.recycleCompanies.companyLocation,
                            regNumber:res.data.recycleCompanies.regNumber,
                            itemId:res.data.recycleCompanies.itemId,
                            
                        })

                        console.log(this.state.post);
                    }

            })
        
}

    render() {
        return (
          <div class="container-fluid px-1 py-5 mx-auto">
          <div class="row d-flex justify-content-center">
              <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <div class="card">
              <h3 class="text-center mb-4" >Update Company details</h3>
            <div>
               <form class="row g-3" class="form-card" onSubmit={this.onSubmit}>
              <div class="col-md-6">
                <label style={{paddingRight:'110px',paddingTop:'20px'}} class="form-label">Company Name</label>
                <input type="text" class="form-control" id="companyName" name="companyName" value={this.state.companyName} onChange={this.handleinputchanges} required />
              </div>
              <div class="col-md-6">
                <label style={{paddingRight:'50px',paddingTop:'20px'}} class="form-label">Select Company Location</label>
                <select class="form-select" aria-label="Default select example" name="companyLocation" value={this.state.companyLocation} onChange={this.handleinputchanges}>
                <option selected>Select</option>
                <option value="Matara">Matara</option>
                <option value="Akuressa">Akuressa</option>
                <option value="Deniyaya">Deniyaya</option>
                </select>
              </div>
              <div class="col-12">
                <label style={{paddingRight:'320px',paddingTop:'20px'}} for="inputAddress" class="form-label">Company Register Number</label>
                <input style={{width:'280px'}} type="text" class="form-control" name="regNumber" placeholder="RG1234" pattern="[a-zA-Z0-9]+" minlength="6" maxlength="10" value={this.state.regNumber} onChange={this.handleinputchanges} required readOnly/>
              </div>
              <div>
              <label style={{paddingRight:'370px',paddingTop:'30px'}} for="inputAddress" class="form-label">Select Rcycling Item</label>
              <select style={{width:'280px'}} class="form-select" aria-label="Default select example" name="itemId" value={this.state.itemId} onChange={this.handleinputchanges} required>
              <option selected>Select</option>
              {this.state.items.map((items,index)=>(
                    
                <option value={items._id}>{items.category} {items.itemName}</option>

                ))}
                </select>
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
