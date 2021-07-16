package com.mastek.trainBooking.App;

import java.util.ArrayList;

import com.mastek.trainBooking.model.Passenger;
import com.mastek.trainBooking.model.TicketInfo;
import com.mastek.trainBooking.model.TrainInfo;

import java.io.ObjectInputStream.GetField;
import java.util.*;

public class BookingApp {

	public static void main(String[] args) {
		
		Scanner sc=new Scanner(System.in);
		
		TrainInfo trainInfo=new TrainInfo();
		TicketInfo ticketInfo=null;
		
		 Passenger p1=null;
		 
		 double totalCost=0;
		
		   Map<Integer,Passenger> map=new HashMap<Integer,Passenger>(); 

		   Map<Integer,TicketInfo> map2=new HashMap<Integer,TicketInfo>(); 
		   
	    
		   System.out.println("Enter How many Passenger are there max=5: ");
		   Integer passengerCount=sc.nextInt();
		   
		  if(passengerCount<5) {
			  
		  int  countID=0;
		  
		   while(passengerCount>0 && passengerCount<=5) {
			   
			   countID++;

			   System.out.println("Enter Passenger "+countID+" Details.\n");
			   System.out.println("Enter Passenger Name: ");
			   String pName=sc.next();
			   
			   System.out.println("Enter Passenger Age: ");
			   Integer age=sc.nextInt();
			   
			   System.out.println("Enter Passenger Gender male/female: ");
			   String gender=sc.next();
			   
		   p1=new Passenger(pName,age,gender);   
		   ticketInfo=new TicketInfo(pName, age, gender);
		    
		    //Adding passenger to map   
		    map.put(countID,p1);  
		    map2.put(countID,ticketInfo);
		  
		    passengerCount--;
		   
		   }
		   System.out.println();
		   System.out.println("Welcome to Railways..");
		   System.out.println("Ticket ID:"+ticketInfo.ticketID);
		   System.out.println(trainInfo.getDetails());
		   System.out.println();
		   
		   System.out.println("ID"+" Name  "+"Age"+" Gender"+" Seat-No"+" Cost-per-Passenger");
//		    Traversing map  
//		    for(Map.Entry<Integer, Passenger> entry:map.entrySet()){    
//		        int key=entry.getKey();  
//		        Passenger b=entry.getValue();  
////		        System.out.println(key+" Details:");  
//		        System.out.println(key+"  "+b.getPname()+"    "+b.getAge()+"    "+b.getGender());   
//		    } 
		    System.out.println();
		    for(Map.Entry<Integer, TicketInfo> entry:map2.entrySet()){    
		       
		    	int key=entry.getKey();  
		    	
		        TicketInfo b=entry.getValue();  
		        
		        totalCost=totalCost+b.costPerPassenger;
		        
		        System.out.println(key+"  "+b.getPname()+"    "+b.getAge()+"  "+b.getGender()
		        +"   "+b.seatNo+"     "+b.costPerPassenger);   
		    } 
		  }
		  else {
			  System.out.println("Only 5 passengers allowed on 1 Ticket.Please try again..");
		  }
		System.out.println("=============================================================================");
	  System.out.println("Total Cost=\t\t\t"+totalCost);
		}    
	}


