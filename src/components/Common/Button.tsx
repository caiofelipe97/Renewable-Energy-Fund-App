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
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  loading = false,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      {...props}
      disabled={loading}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    backgroundColor: theme.colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: RFValue(16),
    fontFamily: theme.fonts.regular,
  },
});

export default Button;
