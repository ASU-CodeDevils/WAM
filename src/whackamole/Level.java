package whackamole;
/**
 * @author CodeDevils
 *
 */
public class Level
{
	private int levelNum;
	private Hammer levelHammer;
	private int moleSpeed, moleNum, maxMoles;
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
