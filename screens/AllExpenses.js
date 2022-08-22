import { useContext, useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import ExpenseOutput from "../components/ExpenseOutput";
import { Ionicons } from '@expo/vector-icons';
import IconButton from "../theme/IconButton";
import { ExpensesContext } from "../store/expenses-context";

const AllExpenses = ({ navigation }) => {
    // const expenses = [];
    const expensesCtx = useContext(ExpensesContext);
    const expenses = expensesCtx.expenses;
    const addExpenseHandler = () => {
        navigation.navigate('ManageExpense')
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: ({ color, size }) => {
                return (
                    <IconButton
                        icon='add-outline' color={'white'} size={24}
                        onPress={addExpenseHandler}
                    />
                );
            }
        });

    }, [navigation]);

    // console.log("expensesCtx.expenses", expensesCtx.ctxexpenses)
    return (
        <View style={styles.container}>
             <ExpenseOutput expenses={expenses} />
        </View>
        
    );

}
export default AllExpenses;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});