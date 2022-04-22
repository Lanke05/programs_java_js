package gau;

import java.util.Scanner;

public class SwapNumberWithoutVariable {

		static int array[] = {21,6,13,9,34};
		
		public static void main(String[] args){
			
		int maxNumber = findLargestNumber();
		
		System.out.println("Maximum number in the array: "+ maxNumber);
		
		}
		
		private static int findLargestNumber(){
		int max = array[];
		
		for(int i =0;i<array.length;i++){
		if(array[i]>max)
		max = array[i];
		}
		return max;
		}
}
