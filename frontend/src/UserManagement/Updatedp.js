import React, {useState,useContext} from "react";
import axios from "axios";
import { AuthContext } from '../Context/AuthContext';


export default function AddRequest() {

    const {user} = useContext(AuthContext);

    const id = user._id;

    const [loading, setloading] = useState(false)
    const [image, setimage] = useState("")

    const uploadImage = async e => {
      const files = e.target.files
      const data = new FormData()
      data.append('file',files[0])
      data.append('upload_preset','ecobin')
      setloading(true)

      const res = await fetch("	https://api.cloudinary.com/v1_1/dnnest62n/image/upload",{
        method:'POST',
        body:data
      })
      const file = await res.json()
      console.log(file)

      setimage(file.secure_url)
      setloading(false)

    }

    function sendData(e) {
        e.preventDefault();
    
        const newRequest = {
          image,
        };
    
        axios
          .put(`http://localhost:8070/user/updateUser/${id}`,newRequest)
          .then(() => {
            alert("Your Profile Picture updated");
            window.location.reload(false);
            e.target.reset(); // to clear input field after the submission
          })
          .catch((err) => {
            alert(err);
          });
      }

    return(

<div class="container-fluid ps-md-0">
  <div class="row g-0">
      <form onSubmit={sendData}>

    <div class="text-center" >
                {
                    loading?(
                      <h3>Loading...</h3>
                    ):null

                }
                <img src = {image} style={{width:'400px',height:'400px'}} class="avatar img-circle img-thumbnail" alt="avatar"/>
                <br/><br/>
                <input type="file" class="text-center center-block file-upload" onChange={uploadImage}/>



                </div><hr/><br/>



                <div class="d-flex justify-content-center">
                  <button type="submit" class="btn btn-warning btn-lg ms-2">Update profile picture</button>
                </div>
                </form>
            </div>
            </div>


    )
}