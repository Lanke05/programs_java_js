package PractiseTests;

public class Practice {
	
	static int a = 45;
		   int b = 75;
		   
	Practice()
	{
		a = 56;
		b = 23;
	}
	Practice(int f)
	{
		a = 14;
		b = 69;
	}
	
	public static void main(String[] args) {
		
		System.out.println(a);
		
		Practice x = new Practice();
		
		System.out.println(a);
		System.out.println(x.b);
		
		System.out.println("-----------------");
		
		Practice y = new Practice(1234);
		System.out.println(a);
		System.out.println(y.b);

		System.out.println("-----------------");
		
		x.b = 123;
		
		System.out.println(y.b);
		System.out.println(x.b);
	}
}
