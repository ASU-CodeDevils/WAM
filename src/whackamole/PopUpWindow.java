package whackamole;
import javafx.stage.*;
import javafx.scene.*;
import javafx.scene.layout.*;
import javafx.scene.control.*;
import javafx.geometry.*;

public class PopUpWindow {

	public static void display(String title, String message) {
		Stage popWin = new Stage();

		popWin.initModality(Modality.APPLICATION_MODAL);
		popWin.setTitle(title);
		popWin.setMinWidth(250);

		Label label = new Label();
		label.setText(message);
		// This button will close the popup window. Refer to HammersWindow for
		// confirmations.
		Button weaponButton = new Button("Choose Mole Whacker");

		weaponButton.setOnAction(e -> HammersWindow.display("Weapon Selection", "Choose wisely"));
		// weaponButton.setOnAction(e -> window.WAM(begin));
		// Add functionality to go back to the WAM window.

		VBox layout = new VBox(25);
		layout.getChildren().addAll(label, weaponButton);
		layout.setAlignment(Pos.CENTER);

		Scene scene = new Scene(layout);
		popWin.setScene(scene);
		// This method has to be closed.
		popWin.showAndWait();

	}
}
