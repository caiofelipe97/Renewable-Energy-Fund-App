import { ReactNode } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TextInputProps,
} from 'react-native';
import theme from '../../theme';
import { RFValue } from 'react-native-responsive-fontsize';

type InputProps = TextInputProps & {
  label: string;
  Icon?: ReactNode;
};

const Input: React.FC<InputProps> = ({ label, Icon, ...props }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} {...props} />
        {Icon}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 5,
  },
  label: {
    color: theme.colors.grey700,
    fontSize: RFValue(11),
    fontFamily: theme.fonts.medium,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.grey100,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  input: {
    color: theme.colors.black,
    backgroundColor: theme.colors.grey100,
    borderRadius: 4,
    paddingVertical: 15,
    fontFamily: theme.fonts.regular,
    fontSize: RFValue(14),
    flex: 1,
  },
});

export default Input;
