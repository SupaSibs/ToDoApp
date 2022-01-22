import { StatusBar } from 'expo-status-bar';
import * as React from "react"
import { StyleSheet, Text, View, TextInput, Image, AppRegistry} from 'react-native';
import styles from "./styles";
import axios from "axios";
class App extends React.Component {
constructor(props: any) {
super(props);
this.state = {
profile: axios.get("/api/auth").
then(res => this.setState({loggedIn: res.profile})).
catch(err => console.error(err)),
}
}
render() {
  return(
<View style={styles.container}>

</View>
  );
}
}

AppRegistry.registerComponent("App", () => App);
