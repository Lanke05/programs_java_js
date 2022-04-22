package methodchain;

public class mahatashtra implements IntrD {
	public void close() {
		System.out.println("India is My Contry");
		}

public static void main(String[] args) {
	IntrA a = new delhi();
	
	IntrB b = a.test();
	IntrC c = b.demo();
	IntrD d = c.get();
	d.close();
//Method Chaining
	a.test().demo().get().close();

	}

}
