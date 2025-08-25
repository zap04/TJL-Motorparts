package com.tjl.motorparts_backend.Repository;

import com.tjl.motorparts_backend.Entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}