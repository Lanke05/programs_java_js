package ImportantPrograms;

public class StringReverse {
	
	public static void main(String[] args) {
//1. Declare/Initialize the original string
//2. Now  Reverse original string using for loop(decremental) and Print 
		
		String original = "Gaurav Lanke", reverse = "";
		System.out.println("Original String: " + original);
		
		int length = original.length();
		for(int i = length - 1; i >= 0; i--)
		{
			reverse = reverse + original.charAt(i);
		}
		
		System.out.println("Reverse String: " + reverse);
	}

//	*By using StringBuilder class*
//	
//	public static String Revese(String string) {
//		StringBuilder sb = new StringBuilder(string);
//		sb.reverse();
//		return sb.toString();
//	}
//	
//	public static void main(String[] args) {
//		
//		System.out.println(StringReverse.Revese("My name is Gaurav"));
//		System.out.println(StringReverse.Revese("I am Gaurav Lanke"));
//	}
//}	
}
