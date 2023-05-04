import * as React from 'react';
import {StyleService,useStyleSheet,TopNavigation,Button} from '@ui-kitten/components';

import {Container, Content, NavigationAction} from 'components';
import { navigate } from 'navigation/RootNavigation';

const NewsIntro = React.memo(() => {
  const styles = useStyleSheet(themedStyles);

  return (
    <Container style={styles.container}>
      <TopNavigation title={'News'} accessoryLeft={<NavigationAction />} />
      <Content contentContainerStyle={styles.content}>
        <Button children={'News 01'} style={styles.button} onPress={()=>{navigate('News01')}} />
        <Button children={'News 02'} style={styles.button} onPress={()=>{navigate('News02')}}/>
        <Button children={'News 03'} style={styles.button} onPress={()=>{navigate('News03')}}/>
        <Button children={'News 04'} style={styles.button} onPress={()=>{navigate('News04')}}/>
        <Button children={'News 05'} style={styles.button} onPress={()=>{navigate('News05')}} />
        <Button children={'News 06'} style={styles.button} onPress={()=>{navigate('News06')}}/>
        <Button children={'News 07'} style={styles.button} onPress={()=>{navigate('News07')}}/>
        <Button children={'News 08'} style={styles.button} onPress={()=>{navigate('News08')}}/>
        <Button children={'News 09'} style={styles.button} onPress={()=>{navigate('News09')}}/>
        <Button children={'News 10'} style={styles.button} onPress={()=>{navigate('News10')}}/>
        <Button children={'News 11'} style={styles.button} onPress={()=>{navigate('News11')}}/>
        <Button children={'News 12'} style={styles.button} onPress={()=>{navigate('News12')}}/>
      </Content>
    </Container>
  );
});

export default NewsIntro;

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
