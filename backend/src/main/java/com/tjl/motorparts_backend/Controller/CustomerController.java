package com.tjl.motorparts_backend.Controller;

import com.tjl.motorparts_backend.Entity.Customer;
import com.tjl.motorparts_backend.Service.CustomerService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/api/customers")
@CrossOrigin(origins = "http://localhost:5173")
public class CustomerController {
    private final CustomerService customerService;

    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @GetMapping
    public List<Customer> getAllCustomers() {
        return customerService.getAllCustomers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Customer> getCustomerById(@PathVariable Long id) {
        return customerService.getCustomerById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Customer createCustomer(@RequestBody Customer customer) {
        return customerService.saveCustomer(customer);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCustomer(@PathVariable Long id) {
        customerService.deleteCustomer(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/login")
public ResponseEntity<Customer> login(@RequestBody Customer loginRequest) {
    return customerService.login(loginRequest.getEmail(), loginRequest.getPassword())
            .map(customer -> {
                customer.setPassword(null); // Hide password in response
                return ResponseEntity.ok(customer);
            })
            .orElse(ResponseEntity.status(401).build());
    
}
}