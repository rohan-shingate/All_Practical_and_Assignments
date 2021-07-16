package hrmgmt.model;

public class Employee {

	

	private int empNo;
	private String empName;
	private String empDesignation;
	
	
	public Employee(int empNo, String empName, String empDesignation) {
		super();
		this.empNo = empNo;
		this.empName = empName;
		this.empDesignation = empDesignation;
	}


	public int getEmpNo() {
		return empNo;
	}


	public void setEmpNo(int empNo) {
		this.empNo = empNo;
	}


	public String getEmpName() {
		return empName;
	}


	public void setEmpName(String empName) {
		this.empName = empName;
	}


	public String getEmpDesignation() {
		return empDesignation;
	}


	public void setEmpDesignation(String empDesignation) {
		this.empDesignation = empDesignation;
	}
	
	

	public String getDetails(double amount) throws Exception {

		return  "EmpNo: "+this.empNo+"\nEmpName: "+this.empName+"\nEmpDesignation: "+this.empDesignation+"\nSalary: "+amount+"\n";
	}

	public String getDetails() {
		// TODO Auto-generated method stub
		return "Please pass salary to method !\n";
	}
	
	
}
