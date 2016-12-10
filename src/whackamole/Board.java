package whackamole;
/**
 * @author CodeDevils
 *
 */

public class Board{
	//private int hCoord, wCoord;
	private char[][] boardArray;
	
	Board(){
		boardArray = new char[4][3];  // 4 rows HIGH, 3 columns WIDE
		for(int i = 0; i < boardArray.length; i++){
			for(int j = 0; j < boardArray[i].length; j++){
				boardArray[i][j] = 'e';  // e => hole is empty; use m for mole in hole
			}
		}
	}
	
	/**
	 * @param int h 
	 * @param int w
	 * @purpose Sets the state of the hole from 'e' to 'm'
	 * Indicates presence of a mole.
	 */
	public void putMoleInHole(int h, int w){
		boardArray[h][w] = 'm';
	}
	
	/**
	 * @param h
	 * @param w
	 * @return The char indicating the current state of the hole: 'm' indicates mole, 'e' indicates empty
	 */
	public char getState(int h, int w){
		return boardArray[h][w];
	}
}
