package com.angelhack.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.angelhack.entity.WaiterTable;

public interface WaiterTableDAO extends JpaRepository<WaiterTable, Integer> {

}
