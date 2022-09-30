import React from "react";
import Accordion from "../components/Accordion";
import "../styles/Profilepage.scss";


function Profilepage() {

  return (
    <div>
       <div className="form   ">
            <div className="">
               <h2>Edit Profile</h2>
               <div className=" m-5">
               <label>Name</label><br /><br />
               <input type="text" placeholder="Enter name"/><br /><br />
               <label>Phone No.</label><br /><br />
               <input type="phone no." placeholder="phone no."/><br /><br />
               <label>Email</label><br /><br />
               <input type="email" placeholder="Email"/><br /><br />
               <button type="button" class="btn btn-warning">save</button>
               </div>

              
            </div>
            <div className="second ">
            <label>password</label><br />
            <div className="d-flex">
            <input className="password" type="password" placeholder="password" />
            <p class="text-warning">Change</p>
            </div>
            <br />
            <p>Gender</p>
            
            <div>
               <input type="radio"  name='foo'/>
               <label>Male</label><br />
               <input type="radio" name='foo'/>
               <label>Female</label><br />
               <input type="radio" name='foo'/>
               <label>Others</label><br /> <br />
               </div>
            <p>Notification prefrence</p>
            <div>
            <input type="checkbox" />
               <label>Push Notification</label><br />
               <input type="checkbox"/>
               <label>Recieve Newsletters</label><br />
               </div>
            </div>
       </div>
       <div className="bottom_div d-flex flex-column ">
            <h2>Frequently Asked Questions</h2><br />
            <Accordion/><br />
            <Accordion/><br />
            <Accordion/><br />
            <Accordion/><br />
            <Accordion/><br />
       </div>
    </div>
  );
}

export default Profilepage;
