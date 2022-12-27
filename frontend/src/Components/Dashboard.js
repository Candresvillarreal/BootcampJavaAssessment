import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';

export default function Dashboard(){

    return(
        <div class="col text-center">
            <h1 class="mt-5 h1Dashboard">CUSTOMERS OPTIONS</h1>      
            <div class="mt-5">
                <Link to="/add">
                    <button class="btn btn-primary btn-lg">Add New Customer</button>
                </Link>
            </div>
            <div class="mt-5">
                <Link to="/getcustomers">
                    <button class="btn btn-primary btn-lg">Customers List</button>
                </Link>
            </div>
        </div>
    );
}