package com.tjl.motorparts_backend.Repository;

import com.tjl.motorparts_backend.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}