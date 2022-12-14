import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button, Alert } from "react-native";
import { GlobalStyles } from "../constants/styles";
import CustomInput from "../theme/CustomInput";
import { getFormattedDate } from "../utils/DateUtils";

const ExpenseForm = ({ expense, cancelHandler, onSubmit }) => {
    // const { amount, description, created_date } = expense;
    const [inputValues, setInputValues] = useState({
        amount: expense ? expense.amount.toString() : '',
        description: expense ? expense.description.toString() : '',
        created_date: expense ? getFormattedDate(expense.created_date).toString() : '',
        
    });
    const inputChangeHandler = (inputIdentifier, enteredValye) => {
        setInputValues((currentInput) => {
            return {
                ...currentInput,
                [inputIdentifier]: enteredValye
            }            
        });
    }
    
    const submitHandler = () => {
        const expenseData = {
            amount: +inputValues.amount,
            description:inputValues.description,
            created_date: new Date(inputValues.created_date)
        }

        const amountValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const dateValid = expenseData.created_date.toString() !== 'Invalid Date';
        const descriptionValid = expenseData.description.trim().length > 0;

        if (!amountValid || !dateValid || !descriptionValid) {
            //display feedback or error message.
            Alert.alert('Invalid input', 'Please check your input data');
            return;
        }
        
        console.log("expenseData", expenseData);
        onSubmit(expenseData);
    }
    


    return (
        <View style={styles.container}>
            <CustomInput
                label='Amount'
                textInputConfig={{
                    name:'amount',
                    placeholder: "Enter Amount",
                    keyboardType: "decimal-pad",
                    value: inputValues.amount,
                    
                    onChangeText: inputChangeHandler.bind(this, 'amount')
                }}

            />

            <CustomInput
                label='Description'
                textInputConfig={{
                    placeholder: "Enter Description",
                    multiline: true,
                    value: inputValues.description,
                    onChangeText: inputChangeHandler.bind(this, 'description')
                 }}
            />

            <CustomInput
                label='Date'
                textInputConfig={{
                    placeholder: "YYYY-MM-DD",
                    maxLength: 10,
                    value: inputValues.created_date,
                    onChangeText: inputChangeHandler.bind(this, 'created_date')
                }}
            />
                
           
            <View style={styles.buttonContainer}>
                <Button title="Cancel" onPress={cancelHandler} color={GlobalStyles.colors.success} />
                <Button title="Save" onPress={submitHandler} />
            </View>
           
        </View>
    );
}
export default ExpenseForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',


    },
    buttonCancel: {
        color: 'red'
    }
})