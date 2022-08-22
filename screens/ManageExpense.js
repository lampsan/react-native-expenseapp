import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import IconButton from "../theme/IconButton";

const ManageExpense = ({ route, navigation }) => {
    const expenseId = route.params?.expenseId;
    const isExpenseEditAction = !!expenseId;  //convert to o bool
    console.log("isExpenseEditAction ==", isExpenseEditAction);

    const deleteExpenseHandler = () => {
        console.log('deleteExpense')
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            title: isExpenseEditAction ? 'Edit Expense' : 'Add Expense'
        }); 
    }, [navigation, isExpenseEditAction ]);
    
    return (
        <View style={styles.container}>
            
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
    }
});