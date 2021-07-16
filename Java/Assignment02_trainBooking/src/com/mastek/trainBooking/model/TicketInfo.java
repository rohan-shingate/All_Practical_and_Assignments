package com.mastek.trainBooking.model;

import java.util.ArrayList;
import java.util.ListIterator;

public class TicketInfo extends Passenger {


	public int ticketID;
	public final double ticketCost=1000;
	public double totalCost;
	public int tempAge;
	public double costPerPassenger=0;
	public int seatNo;
	

	private static int counter=100101;
	private static int seatNumber=101;
	

	public TicketInfo() {
		super();
		
	
	}

	
	public TicketInfo(int ticketID, double totalCost) {
		super();
	
		this.totalCost = totalCost;
	}

	public TicketInfo(String pname, int age, String gender) {
		super(pname, age, gender);
		getCostPerPassenger();
		this.seatNo=seatNumber++;
		this.ticketID=counter++;
	
	}
	

	public double getCostPerPassenger() {
		
			if(age<12)
			{
				this.costPerPassenger=ticketCost*0.5;
			}
			else {
				costPerPassenger=ticketCost;
			}

			return costPerPassenger;
		}
		

	
}