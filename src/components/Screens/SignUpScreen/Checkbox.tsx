import React, { ReactNode } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import theme from '../../../theme';

type CheckboxProps = {
  isChecked: boolean;
  LabelText: ReactNode;
  toggleCheckbox: () => void;
};

const Checkbox: React.FC<CheckboxProps> = ({
  isChecked,
  LabelText,
  toggleCheckbox,
}) => {
  return (
    <View style={styles.checkboxContainer}>
      <TouchableOpacity style={styles.checkbox} onPress={toggleCheckbox}>
        {isChecked && <Text>✔</Text>}
      </TouchableOpacity>
      <View style={styles.labelContainer}>{LabelText}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    width: '100%',
    gap: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: theme.colors.grey300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelContainer: {
    flex: 1,
  },
});

export default Checkbox;
