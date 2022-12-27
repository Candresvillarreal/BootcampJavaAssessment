package com.assessment.java.assessmentjava.repository;

import com.assessment.java.assessmentjava.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {

    //Getting firstName and lastName

    Optional<Customer> findByFirstNameAndLastName(String firstName, String lastName);

}
