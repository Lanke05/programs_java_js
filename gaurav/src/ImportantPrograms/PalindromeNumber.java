package ImportantPrograms;

import java.util.Scanner;

public class PalindromeNumber {
	
	public static void main(String[] args) {
		
//1. Declare the String/ number to check palindrome
//2. Get the length of string/number
//3. using for loop, reverse the string/number
//4. compare this reverse string/number with the original string/number
//5. then prints the result with help of if else
	
		String original, reverse = ""; // Objects of String class  
		Scanner in = new Scanner(System.in);   
		System.out.println("Enter a string/number to check if it is a palindrome");  
		original = in.nextLine();  
		
		int length = original.length();
		
		for ( int i = length - 1; i >= 0; i-- )
		{
			reverse = reverse + original.charAt(i);
		}
		System.out.print(reverse);
		
		if (original.equals(reverse))
		{
		System.out.println("Entered string/number is a palindrome.");  
		}
		else  
		System.out.println("Entered string/number isn't a palindrome.");
		
//OR
//				String x = "242", y = "";
//				
//				int l = x.length();
//				
//				for(int i = length - 1; i >= 0; i--)
//				{
//					y = y + x.charAt(i);
//				}
//				if(x.equalsIgnoreCase(y))
//				{
//					System.out.println("Given String/Number is a Palindrome");
//				}
//				else
//				{
//					System.out.println("Given String/Number is NOT a Palindrome");
//				}
			}
}
