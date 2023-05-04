import * as React from 'react';
import {
  StyleService,
  useStyleSheet,
  TopNavigation,
  Button,
} from '@ui-kitten/components';

import {Container, Content, NavigationAction} from 'components';
import {navigate} from 'navigation/RootNavigation';

const ProfileIntro = React.memo(() => {
  const styles = useStyleSheet(themedStyles);

  return (
    <Container>
      <TopNavigation title={'Profile'} accessoryLeft={<NavigationAction />} />
      <Content contentContainerStyle={styles.content}>
        <Button
          children={'Profile 05'}
          style={styles.button}
          onPress={() => {
            navigate('Profile05');
          }}
        />
      </Content>
    </Container>
  );
});

export default ProfileIntro;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 24,
  },
  button: {
    marginBottom: 12,
  },
});
