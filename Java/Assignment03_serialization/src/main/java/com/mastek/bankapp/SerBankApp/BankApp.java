package com.mastek.bankapp.SerBankApp;

import java.io.Serializable;

public class BankApp implements Serializable {

	private static final long serialVersionUID = 1L;

	private int accNo;
	private String accName;
	private double balance;

	public BankApp() {
		super();
		
	}

	public BankApp(int accNo, String accName, double balance) {
		super();
		this.accNo = accNo;
		this.accName = accName;
		this.balance = balance;
	}

	public int getAccNo() {
		return accNo;
	}

	public void setAccNo(int accNo) {
		this.accNo = accNo;
	}

	public String getAccName() {
		return accName;
	}

	public void setAccName(String accName) {
		this.accName = accName;
	}

	public double getBalance() {
		return balance;
	}

	public void setBalance(double balance) {
		this.balance = balance;
	}

	@Override
	public String toString() {
		return "BankApp [accNo=" + accNo + ", accName=" + accName + ", balance=" + balance + "]";
	}

}