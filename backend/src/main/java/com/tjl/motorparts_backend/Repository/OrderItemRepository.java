package com.tjl.motorparts_backend.Repository;

import com.tjl.motorparts_backend.Entity.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
}