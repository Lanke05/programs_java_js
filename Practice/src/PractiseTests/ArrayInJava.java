package PractiseTests;

public class ArrayInJava {
	public static void main(String[] args) 
	{
		int a [] = {5,10,15,20,25,30};
		System.out.println("Size of Array = " + a.length);
		System.out.println(a[3]);
		a[3] = 50;
		System.out.println(a[3]);
		System.out.println(a[5]);		
		a[5] = 60;
		System.out.println(a[5]);
	
		char b [] = {'a','x','y','z'};
		System.out.println("Size of Array = " + b.length);
		System.out.println(b[0]);
		System.out.println(b[1]);
		System.out.println(b[2]);
		System.out.println(b[3]);
		
		float c [] = {1.5f,2.5f,3.5f,4.5f,5.5f};
		System.out.println("Size of Array = " + c.length);
		System.out.println(c[0]);
		c[0] = 6.5f;
		System.out.println("Changed Value of c[0] = " + c[0]);
		System.out.println(c[1]);
		System.out.println(c[2]);
		System.out.println(c[3]);
		System.out.println(c[4]);
		
		double x [] = {11.5d,225d,33.5d};
		System.out.println("Size of Array = " + x.length);
	}
}