package com.tjl.motorparts_backend.Repository;

import com.tjl.motorparts_backend.Entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}