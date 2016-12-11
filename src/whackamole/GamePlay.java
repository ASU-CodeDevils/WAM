package whackamole;
import javafx.stage.*;
import javafx.scene.*;
import javafx.scene.layout.*;
import javafx.scene.control.*;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.geometry.*;

public class GamePlay {

	public static void display(String title, String message) {

		Stage MainPage = new Stage();

		MainPage.initModality(Modality.APPLICATION_MODAL);
		MainPage.setTitle("Game Title");

		Label score = new Label();
		score.setText(message);

		/**
		 * Adds image for background.
		 */
		ImageView gamePic = new ImageView();
		Image bckGrd = new Image(WAM.class.getResourceAsStream("Background2.png"));
		gamePic.setImage(bckGrd);

		Button pause = new Button("Pause");
		pause.setOnAction(e -> PauseWindow.display("Pause"));

		HBox gameWin = new HBox(25);
		gameWin.getChildren().addAll(score, pause);
		gameWin.setAlignment(Pos.TOP_RIGHT);

		StackPane game = new StackPane();
		game.getChildren().addAll(gameWin, gamePic);

		Scene gameBoard = new Scene(game);
		MainPage.setScene(gameBoard);
		MainPage.showAndWait();

		/**
		 * The following will be where main play action takes place. Also, need
		 * to add in background png file. This will set mole holes in random
		 * spaces, separate out the "play field" into 9 spaces to be filled
		 * randomely. 5 for first level, and add x holes at each new level.
		 */

	}

}
