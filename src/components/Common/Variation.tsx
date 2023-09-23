import { View, StyleSheet, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from '@expo/vector-icons/Feather';

import theme from '../../theme';

interface VariationProps {
  variation: number;
}

const Variation: React.FC<VariationProps> = ({ variation }) => {
  const textColor = variation < 0 ? theme.colors.red : theme.colors.green;

  const variationStyle = {
    color: textColor,
    ...styles.variationText,
  };

  const variationIconName =
    variation < 0 ? 'arrow-down-right' : 'arrow-up-right';

  return (
    <View style={styles.variationContainer}>
      <Icon name={variationIconName} size={14} color={textColor} />
      <Text style={variationStyle}>{Math.abs(variation)}%</Text>
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
