package com.angelhack.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.angelhack.entity.Customer;
import com.angelhack.entity.Preorder;

public interface PreOrderDAO extends JpaRepository<Preorder, Integer> {
	Preorder findByCustomerAndIsActive(Customer customer, Boolean isActive);

	@Query(value = "UPDATE preorder SET is_active=0 WHERE customer_id=:customerId", nativeQuery = true)
	@Modifying
	void cancelActiveOrders(@Param("customerId") Integer customerId);
}
