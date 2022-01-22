import React from "react"
import {getDatabase, ref, onValue, set} from "firebase/database"
import {View, Text} from "react-native"
import styles from "../styles"
export default function ListItem (props:any) {
return (
<View key={"listitems"} style={styles.ListItem}>
{/*<Text>{this.props.body}</Text>*/}
</View>
);
}
