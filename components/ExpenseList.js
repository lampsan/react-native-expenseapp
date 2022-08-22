import { FlatList, Text, View, StyleSheet } from "react-native";
import ExpenseItem from "./ExpenseItem";

const renderExpenseItem = (itemData) => {
    return (
       <ExpenseItem item={itemData.item} />
    );
}

const ExpenseList = ({ expenses }) => {
    return (
        <View>
            <FlatList
                data={expenses}
                keyExtractor={(expense) => {
                    return expense.id;
                }}
                renderItem={renderExpenseItem}
            />
        </View>
    );
}
export default ExpenseList;

const styles = StyleSheet.create({
    container: {
       
    },
   
});