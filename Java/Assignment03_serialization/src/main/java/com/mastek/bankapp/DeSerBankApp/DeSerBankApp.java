package com.mastek.bankapp.DeSerBankApp;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.ObjectInputStream;

import com.mastek.bankapp.SerBankApp.BankApp;

public class DeSerBankApp {

	public static void main(String[] args) {
		try (FileInputStream fis = new FileInputStream("bankApp.txt");
				ObjectInputStream ois = new ObjectInputStream(fis);) {
			BankApp p1 = (BankApp) ois.readObject();
			System.out.println(p1);
		} catch (IOException | ClassNotFoundException e) {
			e.printStackTrace();
		}

	}

}