package ImportantPrograms;

import java.util.Scanner;

public class EvenOrOddNumber {
	
	public static void main(String[] args) {
		
		Scanner e = new Scanner(System.in);
		System.out.println("Enter a Number");
		
		int n = e.nextInt();
		
		// % means modulus
		if (n % 2 == 0) 
		{
			System.out.println("Even number");
		} 
		else 
		{
			System.out.println("Odd number");
		}
	}
}