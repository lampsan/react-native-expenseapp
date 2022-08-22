import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { getFormattedDate } from '../utils/DateUtils';
const ExpenseItem = ({ item }) => {

    console.log("Exitems", item);
    
    const navigation = useNavigation();
    
    const expenseDetailHandler = () => {
        console.log('expenseDetailHandler', item.id);
        navigation.navigate('ManageExpense', {
            expenseId: item.id
        })
    }

    return (
        <Pressable onPress={expenseDetailHandler}
            android_ripple={{opacity:0.75}}
        >
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.column}></View>
                    <Text style={[styles.description,{fontSize:14, fontWeight:'bold'}]}>{item.description}</Text>
                    <Text style={styles.description}>{getFormattedDate(item.created_date)}</Text>
                </View>
                    
                <View style={styles.innerCard}>
                    <Text style={styles.text}>${item.amount}</Text>
                </View>
            </View>
        </Pressable>
    );
}
export default ExpenseItem;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 5,
        padding: 8,
        flexDirection: 'row',
        backgroundColor: GlobalStyles.colors.secondary,
        borderRadius: 8,
       marginBottom: 8,
        justifyContent: 'space-between',
    },
    card: {
       
    },
    description: {
        color: 'white',
    },
    text: {
        fontSize: 12,
        fontWeight: 'bold',
        // color: GlobalStyles.colors.info,
    },
    innerCard: {
        backgroundColor: GlobalStyles.colors.white,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 60,
        // padding: 5,

    }
});