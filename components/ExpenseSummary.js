import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";

const ExpenseSummary = ({ expenses }) => {
    console.log("heree>>",expenses);
    const expensesSum = expenses.reduce((sum, expense) => {
        console.log("heree>>", sum + expense.amount);
         return sum + expense.amount;
    }, 0);
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Last 7 Days</Text>
            <Text style={styles.text}>${expensesSum.toFixed(2)}</Text>
        </View>
       
    );

}
export default ExpenseSummary;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: GlobalStyles.colors.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 8,
        alignItems:'center',
    },
    text: {
        fontSize: 12,
        fontWeight: 'bold',
        color: GlobalStyles.colors.success,
    }
});