import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import ExpenseOutput from "../components/ExpenseOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from '../utils/DateUtils';

const RecentExpenses = () => {
    const expenseCtx = useContext(ExpensesContext);

    const recentExpenses = expenseCtx.expenses.filter((expense) => {
        const today = new Date();
         const date7DayAgo = getDateMinusDays(today, 7);
         return (expense.created_date > date7DayAgo);
    });

      return (
          <View style={styles.container}>
              <ExpenseOutput expenses={ recentExpenses }/>
        </View>
    );
    
}
export default RecentExpenses;
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});