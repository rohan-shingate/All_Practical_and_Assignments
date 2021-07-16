package com.mastek.trainBooking.model;

import java.util.ArrayList;
import java.util.ListIterator;

public class Passenger {
	
	protected String pname ;
	protected int age;
  protected String gender;

  

public Passenger() {
	super();

}


public Passenger(String pname, int age, String gender) {
	super();
	this.pname = pname;
	this.age = age;
	this.gender = gender;
}


public String getPname() {
	return pname;
}


public void setPname(String pname) {
	this.pname = pname;
}


public int getAge() {
	return age;
}


public void setAge(int age) {
	this.age = age;
}


public String getGender() {
	return gender;
}


public void setGender(String gender) {
	this.gender = gender;
}


@Override
public String toString() {
	return "Passenger [pname=" + pname + ", age=" + age + ", gender=" + gender + "]";
}


@Override
public int hashCode() {
	final int prime = 31;
	int result = 1;
	result = prime * result + age;
	result = prime * result + ((gender == null) ? 0 : gender.hashCode());
	result = prime * result + ((pname == null) ? 0 : pname.hashCode());
	return result;
}


@Override
public boolean equals(Object obj) {
	if (this == obj)
		return true;
	if (obj == null)
		return false;
	if (getClass() != obj.getClass())
		return false;
	Passenger other = (Passenger) obj;
	if (age != other.age)
		return false;
	if (gender == null) {
		if (other.gender != null)
			return false;
	} else if (!gender.equals(other.gender))
		return false;
	if (pname == null) {
		if (other.pname != null)
			return false;
	} else if (!pname.equals(other.pname))
		return false;
	return true;
}

	

	

}