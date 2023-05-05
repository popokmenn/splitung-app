import * as React from 'react';
import {useLayout} from 'hooks';
import {Layout, StyleService, useStyleSheet} from '@ui-kitten/components';

import {Container} from 'components';
import Color from 'utils/color';

const Scan = React.memo(() => {
  const {top} = useLayout();
  const styles = useStyleSheet(themedStyles);

  return (
    <Container style={styles.container} useSafeArea={false}>
      <Layout style={[styles.header, {paddingTop: top + 8}]} level="9" />
    </Container>
  );
});

export default Scan;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  header: {
    paddingBottom: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    backgroundColor: Color.white,
    color: Color.black,
  },
});
