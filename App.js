
import React, { PureComponent } from "react";
import { StyleSheet, Dimensions, Text, View } from "react-native";
import { AppLoading, Font, Icon, ScreenOrientation } from "expo";

class App extends PureComponent {
  state = {
    orientation: ScreenOrientation.Orientation.LANDSCAPE
  };

  layoutHandler = ({ window: { width, height } }) => {
    let orientation;
    if (width > height) {
      orientation = ScreenOrientation.Orientation.LANDSCAPE;
    } else {
      orientation = ScreenOrientation.Orientation.PORTRAIT;
    }

    this.setState({ orientation });
  };

  componentDidMount() {
    Dimensions.addEventListener("change", this.layoutHandler);
  }
  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.layoutHandler);
  }

  render = () => {
    ScreenOrientation.allowAsync(ScreenOrientation.Orientation.ALL);
    
    const { orientation, loadingIsComplete } = this.state;

    console.log(orientation);

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{orientation}</Text>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 40,
    color: "#ccc",
    textTransform: "uppercase"
  }
});

export default App;
