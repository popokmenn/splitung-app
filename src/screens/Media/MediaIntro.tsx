import * as React from 'react';
import {StyleService,useStyleSheet,TopNavigation,Button} from '@ui-kitten/components';
import {Container, Content, NavigationAction} from 'components';
import { navigate } from 'navigation/RootNavigation';

const MediaIntro = React.memo(() => {
  const styles = useStyleSheet(themedStyles);

  return (
    <Container style={styles.container}>
      <TopNavigation title={'Media'} accessoryLeft={<NavigationAction />} />
      <Content contentContainerStyle={styles.content}>
        <Button children={'Media 01'} style={styles.button} onPress={()=>{navigate('Media01')}} />
        <Button children={'Media 02'} style={styles.button} onPress={()=>{navigate('Media02')}}/>
        <Button children={'Media 03'} style={styles.button} onPress={()=>{navigate('Media03')}}/>
        <Button children={'Media 04'} style={styles.button} onPress={()=>{navigate('Media04')}}/>
        <Button children={'Media 05'} style={styles.button} onPress={()=>{navigate('Media05')}} />
        <Button children={'Media 06'} style={styles.button} onPress={()=>{navigate('Media06')}}/>
        <Button children={'Media 07'} style={styles.button} onPress={()=>{navigate('Media07')}}/>
        <Button children={'Media 08'} style={styles.button} onPress={()=>{navigate('Media08')}}/>
        <Button children={'Media 09'} style={styles.button} onPress={()=>{navigate('Media09')}}/>
        <Button children={'Media 10'} style={styles.button} onPress={()=>{navigate('Media10')}}/>
      </Content>
    </Container>
  );
});

export default MediaIntro;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  content: {
    padding: 24,
  },
  button: {
    marginBottom: 12
  },
});
