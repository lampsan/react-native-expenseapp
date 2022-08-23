import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expenses-context";
import IconButton from "../theme/IconButton";
import { getFormattedDate } from "../utils/DateUtils";
import ExpenseForm from "./ExpenseForm";

const ManageExpense = ({ route, navigation }) => {
    const [expenseInfo, setExpenseInfo] = useState([]);
    const expensesCtx = useContext(ExpensesContext);

    const expenseId = route.params?.expenseId;
    const isExpenseEditAction = !!expenseId;  //convert to o bool
   
    const selectedExpense = expensesCtx.expenses.find((expense) => expense.id === expenseId);

    const deleteExpenseHandler = () => {
        console.log('deleteExpense')
        expensesCtx.deleteExpense(expenseId);
        navigation.goBack();
    }
    const cancelHandler = () => {
        console.log('cancelHandler')
        // expensesCtx.deleteExpense(expenseId);
        navigation.goBack();
    }

    const confirmHandler = (expenseData) => {
        alert("hereree" + expenseId);
        console.log("isExpenseEditAction ==", isExpenseEditAction);
        if (isExpenseEditAction && expenseId) {

            expensesCtx.updateExpense(expenseId, expenseData);
        }
        else {

            expensesCtx.addExpense(expenseData);
        }
        navigation.goBack();

    }
    // useEffect(() => {
       
    //     console.log(selectedExpense);
    //     setExpenseInfo(selectedExpense)   

    //     if (isExpenseEditAction) {
            
    //     }
    // },[])
    useLayoutEffect(() => {
        navigation.setOptions({
            title: isExpenseEditAction ? 'Edit Expense' : 'Add Expense'
        }); 
    }, [navigation, isExpenseEditAction ]);
    
    return (
        <View style={styles.container}>
           
            <ExpenseForm
                expense={selectedExpense}
                onSubmit={confirmHandler}
                cancelHandler=  { cancelHandler}
            />
            {isExpenseEditAction &&
                (
                    <IconButton
                        icon={'trash'}
                        color={'red'}
                        size={24}
                        onPress={deleteExpenseHandler}
                    />
                )
            }

        </View>
    );
}
export default ManageExpense;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: GlobalStyles.colors.tertiary
    },
    
});