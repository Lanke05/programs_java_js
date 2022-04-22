package Maximize;
//Method Chaining

public class MainClass2 {
	public static void main(String[] args) {

		WebDriver d = new Web();
		Options t = d.manage();
		Window y = t.window();
		y.maximize();
		y.setSize();
		
		d.manage().window().maximize();
	}
}