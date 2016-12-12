package whackamole;

import java.net.URL;
import java.util.ResourceBundle;

import javafx.fxml.Initializable;
import javafx.scene.control.Button;

public class WhackController implements Initializable{
	
	public Button start;
	public Button resume;

	
	public void initialize(URL location, ResourceBundle resources) {
		
		
	}
	
	/**
	 * Listener for button presses
	 */
	public void startPress(){
		System.out.println("I pressed a button!");
		
		//start.setOnAction(e -> MainWhack.display());
		
	}
	
	/**
	 * Listener for resume presses.
	 */
	public void resumePress(){
		System.out.println("I pressed another Button!");
		
		//resume.setOnAction(e -> MainWhack.display());
	}
}
