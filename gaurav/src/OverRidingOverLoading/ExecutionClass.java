package OverRidingOverLoading;

public class ExecutionClass {
	
	public static void main(String[] args) {
		
		SuperClass over = new SuperClass();
		over.test();
		over.demo();
		
		SubClass rides = new SubClass();
		rides.demo();
		rides.test();
		
	}

}
