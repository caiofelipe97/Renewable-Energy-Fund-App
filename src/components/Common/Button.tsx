import { useMemo } from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  Text,
  ViewStyle,
} from 'react-native';
import theme from '../../theme';
import { RFValue } from 'react-native-responsive-fontsize';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant: 'primary' | 'secondary' | 'outlined';
  style?: ViewStyle;
}

const Button: React.FC<ButtonProps> = ({
  title,
  variant,
  style = {},
  ...props
}) => {
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
      ...style,
      backgroundColor,
      borderWidth,
    };
  }, [style, variant]);

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
    width: '100%',
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
