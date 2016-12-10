package whackamole;
/**
 * @author CodeDevils
 *
 */
public class Level{
	private int levelNum;
	private Hammer levelHammer;
	private int moleSpeed, moleNum, maxMoles;
	private Mole[] moles;
	
	Level(int num, int ms, int mn, int mm, boolean hasHammer){
		this.levelNum = num;
		
		this.moleSpeed = ms;
		this.moleNum = mn;
		this.maxMoles = mm;
		this.moles = new Mole[maxMoles];
		for (int i = 0; i < moles.length; i++){
			moles[i] = new Mole(moleSpeed);
		}
		if(hasHammer){
			this.levelHammer = new Hammer(num * 2); //creates a new hammer with a power factor of level number * 2
		}
		else{
			this.levelHammer = null;
		}
	}
	
	/**
	 * @return the levelNum
	 */
	public int getLevelNum()
	{
		return levelNum;
	}
	/**
	 * @param levelNum the levelNum to set
	 */
	public void setLevelNum(int levelNum)
	{
		this.levelNum = levelNum;
	}
	/**
	 * @return the levelHammer
	 */
	public Hammer getLevelHammer()
	{
		return levelHammer;
	}
	/**
	 * @param levelHammer the levelHammer to set
	 */
	public void setLevelHammer(Hammer levelHammer)
	{
		this.levelHammer = levelHammer;
	}
	/**
	 * @return the moleSpeed
	 */
	public int getMoleSpeed()
	{
		return moleSpeed;
	}
	/**
	 * @param moleSpeed the moleSpeed to set
	 */
	public void setMoleSpeed(int moleSpeed)
	{
		this.moleSpeed = moleSpeed;
	}
	/**
	 * @return the moleNum
	 */
	public int getMoleNum()
	{
		return moleNum;
	}
	/**
	 * @param moleNum the moleNum to set
	 */
	public void setMoleNum(int moleNum)
	{
		this.moleNum = moleNum;
	}
	/**
	 * @return the maxMoles
	 */
	public int getMaxMoles()
	{
		return maxMoles;
	}
	/**
	 * @param maxMoles the maxMoles to set
	 */
	public void setMaxMoles(int maxMoles)
	{
		this.maxMoles = maxMoles;
	}
}
