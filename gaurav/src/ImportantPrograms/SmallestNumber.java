package ImportantPrograms;

public class SmallestNumber {
	
	public static void main(String[] args) {
		
//1. First Initialize an Array
//2. Initialize variable "min" with first element of array.
//3. Using for loop Get every number of array one by one for 
//	comparing with variable "Min"
//4. Compare one by one numbers with Min and we will get 
//	the Smallest Number in the Array
		
		//Initialize array  
        int [] arr = new int [] {25, 11, 7, 75, 56};  
        
        //Initialize min with first element of array.  
        int min = arr[0];  
        
        //Loop through the array  
        for (int i = 0; i < arr.length; i++) {  
        
        //Compare elements of array with min  
           if(arr[i] < min)  
               min = arr[i];  
        }  
        System.out.println("Smallest Number in Array: " + min);  
    }  
}