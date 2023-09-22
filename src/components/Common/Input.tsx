import { ReactNode, forwardRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TextInputProps,
} from 'react-native';
import theme from '../../theme';
import { RFValue } from 'react-native-responsive-fontsize';

interface InputProps extends TextInputProps {
  label: string;
  Icon?: ReactNode;
}

const Input = forwardRef<TextInput, InputProps>(
  ({ label, Icon, ...props }, ref) => {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} {...props} ref={ref} />
          {Icon}
        </View>
      </View>
    );
  },
);

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

Input.displayName = 'Input';
export default Input;
