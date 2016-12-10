

package whackamole;

/**
 * @author CodeDevils
 *
 */
public class Player{
	
	private String name;
	protected Hammer[] hammers;
	protected int score;
	
	Player(String playerName){
		this.name = playerName;
		this.score = 0;
		this.hammers = new Hammer[5];
	}

	/**
	 * @return the name
	 */
	public String getName()
	{
		return name;
	}

	/**
	 * @param name the name to set
	 */
	public void setName(String name)
	{
		this.name = name;
	}

	/**
	 * @param index 
	 * @return the selected hammer from the player's hammer array
	 */
	public Hammer getHammer(int index){
		if(hammers[index] != null){
			return hammers[index];
		}
		else{
			return hammers[0];
		}
	}
}
