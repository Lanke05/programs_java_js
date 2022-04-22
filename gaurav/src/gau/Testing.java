package gau;

public class Testing 
{ 
	public static void main(String[] args) 
	{
		int a = 100;
		int b = 70;
		int c = 50;
		
		if(a>b)
		{
			 if(a>c)
			 {
				 System.out.println("a is largest "+  a);
			 }
			 else
			 {
				 System.out.println("c is largest "+  c);
			 }
		}
		else
		{
			if(b>c)
			{
				System.out.println("b is largest "+  b);
			}
			else
			{
				System.out.println("c is largest "+  c);
			}
			
		}
	
    }

}
