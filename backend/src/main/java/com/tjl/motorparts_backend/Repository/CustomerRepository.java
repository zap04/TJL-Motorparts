package com.tjl.motorparts_backend.Repository;

import com.tjl.motorparts_backend.Entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;


public interface CustomerRepository extends JpaRepository<Customer, Long> {
    Optional<Customer> findByEmailAndPassword(String email, String password);
}