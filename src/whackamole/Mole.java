package whackamole;
/**
 * @author CodeDevils
 *
 */
public class Mole{
	protected int speed;
	protected int hitPoints;
	protected int head, body, butt;
	
	public Mole(int s){
		this.speed = s;
		this.hitPoints = 14;
		this.head = 8;
		this.body = 4;
		this.butt = 2;
	}
	
	public boolean whackHead(int hammerPower){
		hitPoints -= hammerPower;
		if(hitPoints <= head){
			return true; //true means that the mole got whacked hard enough on the head to send back into hole
		}
		else{
			return false; //missed or hammer not powerful enough
		}
	}
	
	public boolean whackBody(int hammerPower){
		hitPoints -= hammerPower;
		if(hitPoints <= body){
			return true; //true means that the mole got whacked hard enough on the body to send back into hole
		}
		else{
			return false; //missed or hammer not powerful enough
		}
	}
	
	public boolean whackButt(int hammerPower){
		hitPoints -= hammerPower;
		if(hitPoints <= butt){
			return true; //true means that the mole got whacked hard enough on the body to send back into hole
		}
		else{
			return false; //missed or hammer not powerful enough
		}
	}
	

}
