package ImportantPrograms;

public class Fibonacci {
	
//	1. Declare two variables as a=0 & b=1
//	Logic
//	firstTerm =  0
//	secondTerm = 1	
//	The next terms in the Fibonacci series would be calculated as:
	
//	nextTerm = firstTerm + secondTerm; (0 + 1)
//	firstTerm = secondTerm; (1)
//	secondTerm = nextTerm; (1)
//	nextTerm = firstTerm + secondTerm; (1 + 1)
	
	public static void main(String[] args) {
		
		int a = 0, b = 1;
		System.out.println("Fibonacci Series Till 10");
		System.out.print(a + ", ");
		System.out.print(b + ", ");
		
		for (int i = 2; i <= 10; i++)
		{
			int c = a + b;
			System.out.print(c + ", ");
			a = b;
			b = c;
		}
	}
}
