package ImportantPrograms;

public class countOfOccurenceInString {
	
	public static void main(String[] args) {
		
		String str = "I love Coding and Testing";
		
		int count = 0;
		char val = 'g';
		for(char c : str.toCharArray()) {
			if(c == 'g') {
				count++;
			}
		}
		System.out.println(val+":"+count);
	}

}
