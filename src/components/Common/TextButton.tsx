import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import theme from '../../theme';

interface TextButtonProps extends TouchableOpacityProps {
  noBackground?: boolean;
}

const TextButton: React.FC<TextButtonProps> = ({
  children,
  noBackground = false,
  ...props
}) => {
  const buttonStyle = {
    ...styles.button,
    backgroundColor: noBackground ? 'transparent' : theme.colors.primaryLight,
  };
  return (
    <TouchableOpacity style={buttonStyle} {...props}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 9,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    borderRadius: 4,
  },
});

export default TextButton;
