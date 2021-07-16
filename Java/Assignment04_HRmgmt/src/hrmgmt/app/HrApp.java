package hrmgmt.app;

import hrmgmt.model.*;

public class HrApp {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Employee emp1=new Employee(1001,"Rohan","Trainee Analyst");
		FTEmployee emp2=new FTEmployee(1002,"Ajinkya","Senior Software Developer");
		
		
		try {
			
			System.out.println(emp1.getDetails(12000));
			System.out.println(emp1.getDetails());
			System.out.println(emp2.getDetails(123000));
		
			
		} catch (Exception e) {
			
			e.printStackTrace();
		}
	}

}
