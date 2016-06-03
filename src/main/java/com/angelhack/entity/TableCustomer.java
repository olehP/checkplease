package com.angelhack.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
@javax.persistence.Table(name = "table_customer")
public class TableCustomer {
	@Id
	@GeneratedValue
	private Integer id;

	@Column(name = "came_time")
	@Convert(converter = LocalDateTime.class)
	private LocalDateTime cameTime;
	@Column(name = "is_active")
	private Boolean isActive;
	@ManyToOne
	private Customer customer;
	@ManyToOne
	private Table table;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public LocalDateTime getCameTime() {
		return cameTime;
	}

	public void setCameTime(LocalDateTime cameTime) {
		this.cameTime = cameTime;
	}

	public Boolean getIsActive() {
		return isActive;
	}

	public void setIsActive(Boolean isActive) {
		this.isActive = isActive;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public Table getTable() {
		return table;
	}

	public void setTable(Table table) {
		this.table = table;
	}

}
