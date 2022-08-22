import { Text, View, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";
import ExpenseList from "./ExpenseList";
import ExpenseSummary from "./ExpenseSummary";

const ExpenseOutput = ({ expenses }) => {
    console.log('ExpenseOutput', expenses)
    return (
        <View style={styles.container}>
            <ExpenseSummary expenses={expenses} />
            <View style={{ marginVertical:20}}>
                <ExpenseList expenses={expenses} />
            </View>
        </View>
    );
}
export default ExpenseOutput;
const styles = StyleSheet.create({
    container: {
       flex: 1,
        padding: 16,
        backgroundColor: GlobalStyles.colors.tertiary,
    },
   
});