package com.assessment.java.assessmentjava.controller;

import com.assessment.java.assessmentjava.model.Customer;
import com.assessment.java.assessmentjava.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin
@RestController
@RequestMapping("/")
public class CustomerController {

    @Autowired
    private CustomerService cs;

    // ================== Adding and updating Customers ================================================

    @PostMapping("/add")
    public String add(@RequestBody Customer customer){
            boolean created = cs.save(customer);
            if(created) {
                return "A new customer has been added";
            }else{
                return "The customer already exists";
            }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Customer> update(@RequestBody Customer customer, @PathVariable Integer id){
        try{
            Customer existingCustomer = cs.get(id);
            cs.save(customer);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch(NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // ================== Getting Customers information ===============================================

    @GetMapping("/getAll")
    public List<Customer> list(){

        return cs.listAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Customer> getCustomer(@PathVariable Integer id){
        try{
            Customer customer = cs.get(id);
            return new ResponseEntity<>(customer, HttpStatus.OK);
        }catch(NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
