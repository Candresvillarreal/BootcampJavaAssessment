package com.assessment.java.assessmentjava.service;

import com.assessment.java.assessmentjava.model.Customer;
import com.assessment.java.assessmentjava.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository cr;

    public List<Customer> listAll(){
        return cr.findAll(); //method provided by JPARepository from CustomerRepository
    }

    public Customer get(Integer id){
        return cr.findById(id).get();    //method provided by JPARepository from CustomerRepository
    }

    //Method to validate if the Customer exists (searching by firstName and lastName)

    public boolean save(Customer customer){
        Optional<Customer> c = cr.findByFirstNameAndLastName(customer.getFirstName(), customer.getLastName());
        if (c.isPresent()) {
            return  false;
        }
        cr.save(customer);
        return true;
    }


}
