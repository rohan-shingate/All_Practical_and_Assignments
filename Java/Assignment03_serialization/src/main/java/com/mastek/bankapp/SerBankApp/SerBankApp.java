package com.mastek.bankapp.SerBankApp;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;

public class SerBankApp {

	public static void main(String[] args) {

		BankApp p1 = new BankApp(123401, "Rohan", 18000);
	

		try (FileOutputStream fos = new FileOutputStream("bankApp.txt");
				ObjectOutputStream oos = new ObjectOutputStream(fos);) {
			oos.writeObject(p1);

		} catch (IOException e) {

			e.printStackTrace();
		}

	}

}