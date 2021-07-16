package com.mastek.trainBooking.model;

import java.time.LocalTime;
import java.util.Date;

public class TrainInfo extends Passenger {

	
	String trainID="KOYEXP0127PTOH";
	String trainName="Koyna Express";
	String from="Pune";
	String to="Hyderabad";
	Date date=new Date();
	LocalTime time=java.time.LocalTime.now();
		
	public TrainInfo() {
		super();
	}


	public TrainInfo(String trainID, String trainName, String from, String to, Date date, LocalTime time) {
		super();
		this.trainID = trainID;
		this.trainName = trainName;
		this.from = from;
		this.to = to;
		this.date = date;
		this.time = time;
	}


	public TrainInfo(String pname, int age, String gender) {
		super(pname, age, gender);
	
		
	}


	 public String getDetails() {
		return "Train ID: "+this.trainID+"\nTrain Name: "+this.trainName+"\nFrom: "+this.from+"\nTo: "
	           +this.to+"\nDate: "+this.date+"\nTime:"+this.time;
	}
	
}
