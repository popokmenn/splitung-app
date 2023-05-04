import * as React from 'react';
import {StyleService,useStyleSheet,TopNavigation,Button} from '@ui-kitten/components';
import {Container, Content, NavigationAction} from 'components';
import { navigate } from 'navigation/RootNavigation';

const StaticsIntro = React.memo(() => {
  const styles = useStyleSheet(themedStyles);

  return (
    <Container style={styles.container}>
      <TopNavigation title={'Statics'} accessoryLeft={<NavigationAction />} />
      <Content contentContainerStyle={styles.content}>
        <Button children={'Statics 01'} style={styles.button} onPress={()=>{navigate('Statics01')}} />
        <Button children={'Statics 02'} style={styles.button} onPress={()=>{navigate('Statics02')}}/>
        <Button children={'Statics 03'} style={styles.button} onPress={()=>{navigate('Statics03')}}/>
        <Button children={'Statics 04'} style={styles.button} onPress={()=>{navigate('Statics04')}}/>
        <Button children={'Statics 05'} style={styles.button} onPress={()=>{navigate('Statics05')}} />
        <Button children={'Statics 06'} style={styles.button} onPress={()=>{navigate('Statics06')}}/>
        <Button children={'Statics 07'} style={styles.button} onPress={()=>{navigate('Statics07')}}/>
        <Button children={'Statics 08'} style={styles.button} onPress={()=>{navigate('Statics08')}}/>
        <Button children={'Statics 09'} style={styles.button} onPress={()=>{navigate('Statics09')}}/>
        <Button children={'Statics 10'} style={styles.button} onPress={()=>{navigate('Statics10')}}/>
      </Content>
    </Container>
  );
});

export default StaticsIntro;

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
