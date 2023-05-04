import * as React from 'react';
import {StyleService, useStyleSheet, Icon} from '@ui-kitten/components';
import {Text} from 'components';
import HStack, {HStackProps} from 'components/HStack';

interface IRateStarProps extends HStackProps {
  rate: string;
}

const RateStar = React.memo(({rate, ...rest}: IRateStarProps) => {
  const styles = useStyleSheet(themedStyles);
  return (
    <HStack justify="flex-start" itemsCenter {...rest}>
      <Icon pack="assets" name="award" style={styles.award} />
      <Text category="s2" status="warning">
        {rate}
      </Text>
    </HStack>
  );
});

export default RateStar;

const themedStyles = StyleService.create({
  award: {
    width: 16,
    height: 16,
  },
});
