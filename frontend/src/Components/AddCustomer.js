import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddCustomer.css';

export default function AddCustomer(){


    function add(e){
        
        let firstname = document.querySelector('input[name="firstName"]').value;
        let lastname = document.querySelector('input[name="lastName"]').value;
        let phonenumber = document.querySelector('input[name="phoneNumber"]').value;
        let email = document.querySelector('input[name="mail"]').value;

        var postOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                firstName: firstname,
                lastName: lastname,
                phoneNumber: phonenumber,
                mail: email,
            })
        };

        e.preventDefault();

        fetch("http://localhost:8080/add" , postOptions)

        alert("A new customer has been added");

        console.log(postOptions)

        

    }

    return(
        <div class="mt-5">
            <div class="col text-center">
                <h1 class="h1AddCustomer">ADD NEW CUSTOMER</h1>
            </div>
            <div class="mt-5">
            <form class="form-horizontal">
                <div class="form-group d-flex justify-content-center mt-5"> 
                    <label class="col-sm-1 control-label">First Name</label>
                    <div class="col-sm-3">           
                        <input
                            class="form-control"
                            type="text"
                            name="firstName"
                        />
                    </div>
                </div>               
                <div class="form-group d-flex justify-content-center mt-5">
                    <label class="control-label col-sm-1">Last Name</label>
                    <div class="col-sm-3">
                        <input
                            type="text"
                            class="form-control"
                            name="lastName"
                        />
                    </div>
                </div>
                <div class="form-group d-flex justify-content-center mt-5">
                    <label class="control-label col-sm-1">Phone Number</label>
                    <div class="col-sm-3">
                        <input
                            type="text"
                            class="form-control"
                            name="phoneNumber"
                        />
                    </div>
                </div>
                <div class="form-group d-flex justify-content-center mt-5">
                    <label class="control-label col-sm-1">Mail</label>
                    <div class="col-sm-3">
                        <input
                            type="text"
                            class="form-control"
                            name="mail"
                        />
                    </div>
                </div>
                <div class="form-group mt-5 d-flex justify-content-center">
                    <button type="submit" class="btn btn-primary btn-lg" onClick={add}>Add Customer</button>
                </div>
            </form>
            </div>
            <div class="mt-5 d-flex justify-content-center">
                <Link to="/">
                    <button class="btn btn-primary">Go to Dashboard</button>
                </Link>
            </div>
        </div>
    )
}
