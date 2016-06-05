package com.angelhack.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.angelhack.entity.MenuCategory;
import com.angelhack.entity.MenuItem;

public interface MenuItemDAO extends JpaRepository<MenuItem, Integer> {
	List<MenuItem> findByCategory(MenuCategory category);
}
