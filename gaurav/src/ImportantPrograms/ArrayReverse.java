package ImportantPrograms;

public class ArrayReverse {
	
	public static void main(String[] args) {	
//1. Declare/Initialize the array
//2. Print original array using for loop(incremental)
//3. Now Print Reverse Array using for loop(decremental) 
	 
		//Initialize array
		int [] arr = {1, 2, 3, 4, 5};
		System.out.println("Original array: ");
		
		for (int i = 0; i < arr.length; i++) 
		{
			System.out.print(arr[i] + " ");
		}
		
		System.out.println();
		System.out.println("Array in reverse order: ");
		
		//Loop through the array in reverse order
		for (int i = arr.length-1; i >= 0; i--)
		{
			int reverse = arr[i];
			System.out.print(reverse + " ");
		}
	}
}
