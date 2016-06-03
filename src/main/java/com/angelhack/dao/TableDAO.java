package com.angelhack.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.angelhack.entity.Table;

public interface TableDAO extends JpaRepository<Table, Integer> {

}
