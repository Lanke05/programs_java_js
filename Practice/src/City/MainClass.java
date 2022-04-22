package City;
// Method Chaining

public class MainClass {
	public static void main(String[] args) {
		
	IntrA p = new Pune();
	IntrB h = p.alpha();
	IntrC f = h.demo();
	f.test();
	
	p.alpha().demo().test();
	}
}