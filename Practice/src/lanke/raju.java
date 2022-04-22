package lanke;

public class raju {
	public vinod apurva() {
		vinod v = new vinod();
		return v;
	}

public static void main(String[] args) {
	raju r = new raju();
	
	vinod v = r.apurva();
	prachi p = v.gaurav();
	pramod pm = p.shilpa();
	neha n = pm.akola();
	n.chandrapur();	
//Method Chaining
	r.apurva().gaurav().shilpa().akola().chandrapur();
	
}
}
