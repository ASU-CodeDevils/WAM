
import javafx.stage.*;
import javafx.scene.*;
import javafx.scene.layout.*;
import javafx.scene.control.*;
import javafx.geometry.*;

public class PauseWindow {

	public static void display(String title) {
		Stage pauseWin = new Stage();
		Button save, goBack;

		pauseWin.initModality(Modality.APPLICATION_MODAL);

		save = new Button();
		save.setText("Save");
		// save.setOnAction(e -> SAVE GAME PROGRESS);

		goBack = new Button();
		goBack.setText("Resume");
		// This needs to return to the state of GamePlay at the time of
		// selecting pause.
		goBack.setOnAction(e -> GamePlay.display(title, "Things")); // < This is
																	// opening a
																	// new
																	// gamewindow,
																	// not
																	// returning.

		VBox win = new VBox(25);
		win.getChildren().addAll(save, goBack);
		win.setAlignment(Pos.CENTER);

		Scene pauseScene = new Scene(win);
		pauseWin.setScene(pauseScene);
		pauseWin.show();

	}

}
