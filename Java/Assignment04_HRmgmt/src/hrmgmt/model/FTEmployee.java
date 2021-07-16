package hrmgmt.model;

public class FTEmployee extends Employee {

	

	public FTEmployee(int empNo, String empName, String empDesignation) {
		super(empNo, empName, empDesignation);
	
	}

	
	@Override
	public String getDetails(double salary) throws Exception{
		return  "EmpNo: "+this.getEmpNo()+"\nEmpName: "+this.getEmpName()+
				"\nEmpDesignation: "+this.getEmpDesignation()+"\nSalary: "+salary;
	}
	
	
}

