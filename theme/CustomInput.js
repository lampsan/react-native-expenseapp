import { TextInput, Text, View, StyleSheet } from "react-native";

const CustomInput = ({ label, textInputConfig}) => {
    return (
        <View style={styles.container}>
            <Text>{label}</Text>
            <TextInput
                style={styles.inputText}
                {...textInputConfig}
            />
        </View>
    );
}
export default CustomInput;
const styles = StyleSheet.create({
    container: {
     //   flex: 1,
        //  flexDirection: 'row',
        // justifyContent: 'center',
        //   alignItems:'center',
        marginVertical:8,
    },
    inputText: {
        borderWidth: 1,
        borderColor: '#fff',
        paddingHorizontal:10,
    }
})