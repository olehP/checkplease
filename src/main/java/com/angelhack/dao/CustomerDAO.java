package com.angelhack.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.angelhack.entity.Customer;

public interface CustomerDAO extends JpaRepository<Customer, Integer> {

}
