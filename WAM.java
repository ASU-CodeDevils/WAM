
import javafx.application.Application;
import javafx.stage.*;
import javafx.geometry.Insets;
import javafx.geometry.Pos;
import javafx.scene.Group;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.layout.GridPane;
import javafx.scene.layout.HBox;
import javafx.scene.layout.StackPane;
import javafx.scene.layout.VBox;
import javafx.scene.paint.Color;
import javafx.scene.text.FontWeight;
import javafx.scene.text.Text;
import javafx.scene.text.Font;

@SuppressWarnings("unused")
public class WAM extends Application {

	Stage window;
	Scene begin, hammers;

	ToggleButton startButton, resumeButton, hammerButton, whackButton;

	public static void main(String[] args) {
		launch(args);
	}

	/**
	 * This is the opening page
	 */
	public void start(Stage primaryStage) throws Exception {
		window = primaryStage;
		window.setMaxHeight(750);
		window.setMinHeight(200);
		;
		window.setMaxWidth(1250);
		window.setMinWidth(700);

		/**
		 * These make use of Lamda's for button events. e is the handler. This
		 * lambda take the user from opening window, to the next window.
		 */
		// Opening window, with two buttons.
		Text welcome = new Text("Welcome to WAM! Let's get whacking!");
		welcome.setFill(Color.BLUEVIOLET);
		welcome.setFont(Font.font(null, FontWeight.BOLD, 26));
		// welcome.setX(10.0f);
		// welcome.setY(10.0f);
		startButton = new ToggleButton();
		startButton.setText("Start New Game");
		startButton.setOnAction(e -> window.setScene(hammers));

		resumeButton = new ToggleButton();
		resumeButton.setText("Resume");
		resumeButton.setOnAction(e -> PopUpWindow.display("New Win", "Awsome popup!"));

		/**
		 * The following adds an image to the openening page.
		 */

		VBox buttons = new VBox(25);
		buttons.getChildren().addAll(welcome, startButton, resumeButton);
		buttons.setAlignment(Pos.CENTER);

		ImageView openingPic = new ImageView();
		Image bckGrd = new Image(WAM.class.getResourceAsStream("Background2.png"));
		openingPic.setFitHeight(650);
		openingPic.setFitWidth(1250);
		openingPic.setImage(bckGrd);

		/**
		 * VBox Mole = new VBox(25); ImageView mole = new ImageView(); Image Moe
		 * = new Image(WAM.class.getResourceAsStream("leftMole.png"));
		 * mole.setFitHeight(100); mole.setFitWidth(75); mole.setImage(Moe);
		 * Mole.getChildren().add(mole); Mole.setAlignment(Pos.CENTER_RIGHT);
		 */

		StackPane stack = new StackPane();
		stack.getChildren().addAll(openingPic, buttons);

		VBox baseWindow = new VBox();
		baseWindow.getChildren().add(stack);

		begin = new Scene(baseWindow, Color.BLACK);

		// Window where hammer is chosen.
		Label choices = new Label("Choose your hammer!");
		hammerButton = new ToggleButton();
		hammerButton.setText("Hammers");
		hammerButton.setOnAction(e -> PopUpWindow.display("Select Your Hammer", "Choose Wisely!"));
		// Add functionality to come back to this window after selecting your
		// weapon. (PopUp Window)
		whackButton = new ToggleButton("Whack Moles!");
		whackButton.setOnAction(e -> GamePlay.display("Game Title", "SCORE: "));

		VBox weapons = new VBox(20);
		weapons.getChildren().addAll(choices, hammerButton, whackButton);
		weapons.setAlignment(Pos.TOP_CENTER);

		hammers = new Scene(weapons, 250, 250);

		// This sets the opening scene, it must come after all buttons are laid
		// out.
		window.setTitle("WAM screen");
		window.setScene(begin);
		window.show();

	}

}