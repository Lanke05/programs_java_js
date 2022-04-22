package OverRidingOverLoading;

public class mumbai {

	public static void test() {
	System.out.println("Static Test");
	}
	static void test(int a) {
	System.out.println("Static Test int");
	}

	public void demo() {
	System.out.println("Instance demo");
	}
	void demo(int a, char c) {
	System.out.println("Instance demo int and char");
	}

	public static void main(String[] args) {

	mumbai.test();
	mumbai.test(5);

	mumbai m = new mumbai();
	m.demo();
	m.demo(5 , '$');
	}
}
