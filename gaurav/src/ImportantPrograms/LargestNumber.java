package ImportantPrograms;

public class LargestNumber {
	
	public static void main(String[] args) {
		
//1. First Initialize an Array
//2. Initialize variable "maximum" with first element of array.
//3. Using for loop Get every number of array one by one for 
//	comparing with variable "Maximum"
//4. Compare one by one numbers with Maximum and we will get 
//	the Largest Number in the Array
	
		//Initialize array  
		int [] arr = {25, 11, 7, 75, 56};  
		
        //Initialize max with first element of array.  
		int max = arr[0];  
		
        //Loop through the array  
		for (int i = 0; i < arr.length; i++) {
			
        //Compare elements of array with max  
			if(arr[i] > max)  
               max = arr[i];  
        }  
        System.out.println("Largest Number: " + max);  
    }  
}  