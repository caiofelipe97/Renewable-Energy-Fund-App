import { useMemo } from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  Text,
} from 'react-native';
import theme from '../../theme';
import { RFValue } from 'react-native-responsive-fontsize';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant: 'primary' | 'secondary' | 'outlined';
}

const Button: React.FC<ButtonProps> = ({ title, variant, ...props }) => {
  const buttonStyle = useMemo(() => {
    let backgroundColor;
    let borderWidth = 0;
    if (variant === 'primary') {
      backgroundColor = theme.colors.primary;
    } else if (variant === 'secondary') {
      backgroundColor = theme.colors.green;
    } else {
      backgroundColor = 'transparent';
      borderWidth = 1;
    }
    return {
      ...styles.buttonContainer,
      backgroundColor,
      borderWidth,
    };
  }, [variant]);

  const textStyle = useMemo(() => {
    let color;
    if (variant === 'primary' || variant === 'secondary') {
      color = theme.colors.white;
    } else {
      color = theme.colors.primary;
    }
    return { ...styles.buttonText, color };
  }, [variant]);

  return (
    <TouchableOpacity style={buttonStyle} {...props}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: theme.colors.grey500,
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: RFValue(16),
    fontFamily: theme.fonts.medium,
  },
});

export default Button;
