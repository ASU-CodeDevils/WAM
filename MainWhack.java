package whackamole;

import java.io.IOException;

import javafx.application.Application;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.scene.layout.AnchorPane;
import javafx.stage.Stage;

public class MainWhack extends Application{

	@FXML public AnchorPane root;
	@FXML public AnchorPane play;
	@FXML public AnchorPane hammers;
	Stage window;
	Scene img, gameImg, hammerImg;
	
	public static void main(String[] args) {
		launch(args);
	}

	@Override
	public void start(Stage primaryStage) throws Exception {
		window = primaryStage;
		window.setTitle("WAM WINDOW");
		
		showMainWindow();
		
	}
	
	/**
	 * This will be the display method used by lambdas
	 * to call other methods/
	 */
	public void display(){
		
	}
	
	/**
	 * This initializes the root layout.
	 */
	public void showMainWindow() {
		FXMLLoader loader = new FXMLLoader();
		loader.setLocation(getClass().getResource("WelcomeView.fxml"));
		//loader.setRoot(this);
		try {
			root = (AnchorPane)loader.load();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		img = new Scene(root);
		window.setScene(img);
		window.show();
		
	}
	
	/**
	 * This will initialize the gamePlay window.
	 */
	public void showPlayWindow(){
		FXMLLoader loader = new FXMLLoader();
		loader.setLocation(getClass().getResource("GameView.fxml"));
		try{
			play = (AnchorPane)loader.load();
		}catch(IOException e){
			e.printStackTrace();
		}
		
		gameImg = new Scene(play);
		window.setScene(gameImg);
		window.show();
		
	}
	
	/**
	 * This will be the weapon selection window
	 */
	public void showHammerWindow(){
		
		FXMLLoader loader = new FXMLLoader();
		loader.setLocation(getClass().getResource("GameView.fxml"));
		try{
			hammers = (AnchorPane)loader.load();
		}catch(IOException e){
			e.printStackTrace();
		}
		
		gameImg = new Scene(hammers);
		window.setScene(hammerImg);
		window.show();
	}
}
