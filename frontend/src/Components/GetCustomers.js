import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './GetCustomers.css';


export default function ListAllOpportunities(){

    const URL = "http://localhost:8080/getAll";

    const[Customers, setCustomer] = useState([]);

    useEffect(() => {

        axios.get(URL)
    
           .then((response) => {
    
                console.log(response);
    
                console.log(response.data);
    
                console.log(response.headers);
    
                setCustomer(response.data)
    
           })
    
           .catch(error => console.log(error));
    }, [])

              
        const arrayCustomers= Customers.map((Customers, index) =>{
            return(
                <tr key={index}>
                    <th class="thTableCustomers">{Customers.id}</th>
                    <th class="thTableCustomers">{Customers.firstName}</th>
                    <th class="thTableCustomers">{Customers.lastName}</th>
                    <th class="thTableCustomers">{Customers.phoneNumber}</th>
                    <th class="thTableCustomers">{Customers.mail}</th>
                </tr>
            )
        });

    return (
        <div class="col text-center">
            <div>
                <h1 class="mt-5 h1TableCustomers">CUSTOMERS LIST</h1>
            </div>
            <div class="mt-5">
                <table class="table table-bordered table-striped table-hover d-flex justify-content-center">
                    <tbody>
                        <tr class="mt-2 font-wight-normal">
                            <td class="tdTableCustomers">Id</td>
                            <td class="tdTableCustomers">First Name</td>
                            <td class="tdTableCustomers">Last Name</td>
                            <td class="tdTableCustomers">Phone Number</td>
                            <td class="tdTableCustomers">Mail</td>
                        </tr>
                        {arrayCustomers}
                    </tbody>
                </table>
            </div>
            <div class="mt-5 ">
                <Link to="/">
                    <button class="btn btn-primary btn-lg">Go to Dashboard</button>
                </Link>
            </div>
        </div>

    )
}