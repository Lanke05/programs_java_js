package Pack111;

public class Set {
	
	public static void main(String[] args) {
		
		Ready r = new Ready();
		
		Go n = r.alpha();
		Get h = n.demo();
		h.test();

//Method Chaining
		r.alpha().demo().test();	
	}
}
