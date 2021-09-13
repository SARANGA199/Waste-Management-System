import axios from 'axios';
import React, { Component } from 'react'
export default class updateitem extends Component {

    constructor(props){
        super(props);
            this.state={
                itemName:"",
                category:"",
                date:"",
                description:"",
                unitPrice:""

            }
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

        const {itemName,category,date,description,unitPrice} = this.state;

        const data ={
            itemName:itemName,
            category:category,
            date:date,
            description:description,
            unitPrice:unitPrice
        }

        console.log(data)

        axios.put("http://localhost:8070/item/updateitem/"+id,data).then((res)=>{

              if(res.data.success){

                  alert("item update successfuly")
                  
                this.setState({
                  itemName:"",
                  category:"",
                  date:"",
                  description:"",
                  unitPrice:""
                })
              }

        })


    }



    componentDidMount(){

        const id = this.props.match.params.id;

                axios.get("http://localhost:8070/item/posts/"+id).then((res)=>{

                        if(res.data.success){
                            this.setState({
                                itemName:res.data.items.itemName,
                                category:res.data.items.category,
                                date:res.data.items.date,
                                description:res.data.items.description,
                                unitPrice:res.data.items.unitPrice
                            })

                            console.log(this.state.post);
                        }

                })
            
    }


    render() {
        return (
            <div>
               <form class="row g-3">
              <div class="col-md-6">
                <label class="form-label">Item Name</label>
                <input type="text" class="form-control" id="itemname" name="itemName" value={this.state.itemName} onChange={this.handleinputchanges} />
              </div>
              <div class="col-md-6">
                <label  class="form-label">Category</label>
                <input type="text" class="form-control" name="category" value={this.state.category} onChange={this.handleinputchanges}/>
              </div>
              <div class="col-12">
                <label for="inputAddress" class="form-label">Date</label>
                <input type="date" class="form-control" name="date" placeholder="1234 Main St" value={this.state.date} onChange={this.handleinputchanges}/>
              </div>
              <div class="col-12">
                <label for="inputAddress2" class="form-label">Description</label>
                <textarea  class="form-control" name="description" value={this.state.description} onChange={this.handleinputchanges}></textarea>
              </div>
              <label for="inputAddress2" class="form-label">Unit Price</label>
              <div class="input-group mb-3">
              <span class="input-group-text">RS.</span>
              <input type="number" name="unitPrice" class="form-control" aria-label="Amount (to the nearest dollar)"value={this.state.unitPrice} onChange={this.handleinputchanges}/>
              <span class="input-group-text">.00</span>
            </div>
              <div class="col-12">
                
                <button type="submit" class="btn btn-primary"  onClick={this.onSubmit} >update</button>
                
              </div>
            </form>
            </div>
        )
    }
}
