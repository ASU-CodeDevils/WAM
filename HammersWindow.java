
import javafx.stage.*;
import javafx.scene.*;
import javafx.scene.layout.*;
import javafx.scene.control.*;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.beans.binding.Bindings;
import javafx.geometry.*;

public class HammersWindow {

	static boolean choice;

	static ToggleButton toy, fist, mallet, hammer, fryingpan;

	public static boolean display(String title, String message) {
		Stage HammerChoice = new Stage();

		HammerChoice.initModality(Modality.APPLICATION_MODAL);
		HammerChoice.setTitle(title);
		HammerChoice.setMinWidth(450);

		Label label = new Label();
		label.setText(message);
		toy = new ToggleButton("Toy");
		ImageView toyImage = new ImageView();
		Image Timg = new Image(WAM.class.getResourceAsStream("ToyHammer1.png"));
		toy.setGraphic(toyImage);
		toyImage.setFitHeight(60);
		toyImage.setFitWidth(45);
		toyImage.imageProperty().bind(Bindings.when(toy.selectedProperty()).then(Timg).otherwise(Timg));

		fist = new ToggleButton("Fist");
		ImageView fistImage = new ImageView();
		Image Fimg = new Image(WAM.class.getResourceAsStream("Hand1.png"));
		fist.setGraphic(fistImage);
		fistImage.setFitHeight(65);
		fistImage.setFitWidth(45);
		fistImage.imageProperty().bind(Bindings.when(fist.selectedProperty()).then(Fimg).otherwise(Fimg));

		mallet = new ToggleButton("Mallet");
		ImageView malletImage = new ImageView();
		Image Mimg = new Image(WAM.class.getResourceAsStream("CrouqetteMallet1.png"));
		mallet.setGraphic(malletImage);
		malletImage.setFitHeight(65);
		malletImage.setFitWidth(45);
		malletImage.imageProperty().bind(Bindings.when(fist.selectedProperty()).then(Mimg).otherwise(Mimg));

		hammer = new ToggleButton("Hammer");
		ImageView hammerImage = new ImageView();
		Image Himg = new Image(WAM.class.getResourceAsStream("Hammer1.png"));
		hammer.setGraphic(hammerImage);
		hammerImage.setFitHeight(65);
		hammerImage.setFitWidth(45);
		hammerImage.imageProperty().bind(Bindings.when(fist.selectedProperty()).then(Himg).otherwise(Himg));

		fryingpan = new ToggleButton("Pan");
		ImageView FryingImage = new ImageView();
		Image fYimg = new Image(WAM.class.getResourceAsStream("FryingPan1.png"));
		fryingpan.setGraphic(FryingImage);
		FryingImage.setFitHeight(75);
		FryingImage.setFitWidth(55);
		FryingImage.imageProperty().bind(Bindings.when(fist.selectedProperty()).then(fYimg).otherwise(fYimg));

		// functionality
		toy.setOnAction(e -> {
			choice = true;
			HammerChoice.close();

		});
		fist.setOnAction(e -> {
			choice = true;
			HammerChoice.close();

		});
		mallet.setOnAction(e -> {
			choice = true;
			HammerChoice.close();

		});
		hammer.setOnAction(e -> {
			choice = true;
			HammerChoice.close();

		});
		fryingpan.setOnAction(e -> {
			choice = true;
			HammerChoice.close();

		});

		VBox layout = new VBox(25);
		layout.getChildren().addAll(label, toy, fist, mallet, hammer, fryingpan);
		// Below will be the box layout for the hammer choices.
		layout.setAlignment(Pos.CENTER);

		Scene scene = new Scene(layout);
		HammerChoice.setScene(scene);
		// This method has to be closed.
		HammerChoice.showAndWait();

		return choice;

	}
}