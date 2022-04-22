package PractiseTests;

public class forloopStarexample 
{
	public static void main(String[] args) 
	{
		for(int s = 5 ;s >= 1 ; s--)
		{
			for(int v = (5 - s)  ; v >= 1 ; v--)
			{
				System.out.print(" ");
			}
			for(int g = 1 ; g <= (s * 2) - 1 ; g++)
			{
				System.out.print("*");
			}
			System.out.println();
		}
	}
}