import { View, StyleSheet, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from '@expo/vector-icons/Feather';

import theme from '../../theme';

interface VariationProps {
  percentage: number;
  value?: number;
}

const Variation: React.FC<VariationProps> = ({ percentage, value }) => {
  const textColor = percentage < 0 ? theme.colors.red : theme.colors.green;

  const variationStyle = {
    color: textColor,
    ...styles.variationText,
  };

  const variationIconName =
    percentage < 0 ? 'arrow-down-right' : 'arrow-up-right';

  return (
    <View style={styles.variationContainer}>
      <Icon name={variationIconName} size={14} color={textColor} />
      <Text style={variationStyle}>{Math.abs(percentage)}%</Text>
      {value && <Text style={variationStyle}>(${value})</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  variationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1,
  },
  variationText: {
    fontSize: RFValue(14),
    fontFamily: theme.fonts.regular,
  },
});

export default Variation;
