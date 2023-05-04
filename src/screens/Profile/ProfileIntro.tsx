import * as React from 'react';
import {StyleService,useStyleSheet,TopNavigation,Button} from '@ui-kitten/components';

import {Container, Content, NavigationAction} from 'components';
import { navigate } from 'navigation/RootNavigation';

const ProfileIntro = React.memo(() => {
  const styles = useStyleSheet(themedStyles);

  return (
    <Container>
      <TopNavigation title={'Profile'} accessoryLeft={<NavigationAction />} />
      <Content contentContainerStyle={styles.content}>
        <Button children={'Profile 01'} style={styles.button} onPress={()=>{navigate('Profile01')}} />
        <Button children={'Profile 02'} style={styles.button} onPress={()=>{navigate('Profile02')}}/>
        <Button children={'Profile 03'} style={styles.button} onPress={()=>{navigate('Profile03')}}/>
        <Button children={'Profile 04'} style={styles.button} onPress={()=>{navigate('Profile04')}}/>
        <Button children={'Profile 05'} style={styles.button} onPress={()=>{navigate('Profile05')}} />
        <Button children={'Profile 06'} style={styles.button} onPress={()=>{navigate('Profile06')}}/>
        <Button children={'Profile 07'} style={styles.button} onPress={()=>{navigate('Profile07')}}/>
        <Button children={'Profile 08'} style={styles.button} onPress={()=>{navigate('Profile08')}}/>
        <Button children={'Profile 09'} style={styles.button} onPress={()=>{navigate('Profile09')}}/>
        <Button children={'Profile 10'} style={styles.button} onPress={()=>{navigate('Profile10')}}/>
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
