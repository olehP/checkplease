package com.angelhack.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.angelhack.entity.Waiter;

public interface WaiterDAO extends JpaRepository<Waiter, Integer> {

}
