package OverRidingOverLoading;

public class MethodOverloading {
//Method Overloading Example
		static void income() {
			System.out.println("Static with Zero argument");
		}
		public static void income(int i, char c) {
			System.out.println("Static with int & char argument");
		}
		protected static void income(double d, float f) {
			System.out.println("Static with double & float argument");
		}
		void tax() {
			System.out.println("Non-Static with Zero argument");
		}
		public void tax(int l, double b) {
			System.out.println("Non-Static with int & double argument");
		}
		protected void tax(int a) {
			System.out.println("Non-Static with int argument");
		}
		public static void main(String[] args) {
			//To call static methods by ClassName
			MethodOverloading.income();
			MethodOverloading.income(1, 'G');
			MethodOverloading.income(1.2, 2);
			
			//TO call non-static methods, we create the object of the
			//class and then call by object Reference
			MethodOverloading d = new MethodOverloading();
			d.tax();
			d.tax(20);
			d.tax(13, 2.3);
	}

}
