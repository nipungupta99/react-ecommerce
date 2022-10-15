import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";




function Register() {

  // const[post, setPost] = useState([]);
  const[title, setTitle] = useState("");
  const[description, setDescription] = useState("");
  const[price, setPrice] = useState("");
  
  const navigate=useNavigate()
  function onsubmitOne(e){
    e.preventDefault();
    


    axios.post("https://api.escuelajs.co/api/v1/products/", {
      
        "title": "New Product",
        "price": 10,
        "description": "A description",
        "categoryId": 1,
        "images": ["https://placeimg.com/640/480/any"]
      
      
      
      })

      .then((response) => {
        
        if (response.data.status == 200) {
          console.log("before",response)
          alert("register successfully");
          navigate("/");
        }
        console.log("before",response)
      })
      .catch((error) => console.log(error));
  }

  

  return (
    <div className="main d-flex justify-content-center align-item-center ">
     
      <div className="d-flex justify-content-center align-item-center my-5">
        <div className="d-flex flex-column justify-content-center align-items-center gap-3 ">
            <h1><b>Create Product</b></h1>
          
            <form onSubmit={onsubmitOne}>
            <input
            onChange={(e)=>{setTitle(e.target.value)}}
              type="text"
              placeholder="ProductURL"
              className="form-control"
            />

            <input
            onChange={(e)=>{setDescription(e.target.value)}}
             
              type="text"
              placeholder="Description"
              className="form-control"
            />
         

          
            <input
            onChange={(e)=>{setPrice(e.target.value)}}
              
              type="text"
              placeholder="price"
              className="form-control"
            />
          

          
          
        
          <div>
            <button  type="submit" className="btn btn-dark">
              Create{" "}
            </button>
          
          </div>
            </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
