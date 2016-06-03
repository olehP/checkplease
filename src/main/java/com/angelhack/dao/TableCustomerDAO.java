package com.angelhack.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.angelhack.entity.TableCustomer;

public interface TableCustomerDAO extends JpaRepository<TableCustomer, Integer> {

}
