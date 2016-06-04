package com.angelhack.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.angelhack.dao.TableDAO;
import com.angelhack.entity.Table;

@Service
public class TableService {

	@Autowired 
	TableDAO tableDAO;
	
    public List<Table>	getTablesForRestaurant(int restaurantId){    	
    	return tableDAO.getTableByRestaurant(restaurantId);
    }
    
    public Table getTableById(int tableId){
		return tableDAO.getTableById(tableId);
    }
	
}
