import React, {useContext, useEffect, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Text from '../../components/ui/text';
import Title from '../../components/ui/title';
import {useNavigation} from '@react-navigation/native';
import Screen from '../../components/ui/screens/screen';
import BottomActionsBar from '../../components/BottomActionsBar';
import DateText from '../../components/ui/date/DateText';
import {GrowsContext} from '../../providers/grows';
import {isAfter} from '../../utils/dateHandler';

const Grows = () => {
  const {grows, isLoading} = useContext(GrowsContext);
  const navigation = useNavigation();

  const onPress = (growId = '') =>
    navigation.navigate('Detalles', {growId: growId});

  if (isLoading) {
    return (
      <Screen>
        <Text>Cargando...</Text>
      </Screen>
    );
  }

  return (
    <View style={{height: '100%'}}>
      <Screen scroll={true}>
        {grows
          .sort((a, b) => {
            return isAfter(b.updatedAt, a.updatedAt);
          })
          .map((grow) => (
            <TouchableOpacity
              key={grow.id}
              style={styles.item}
              onPress={() => onPress(grow.id)}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={{
                    uri: `file://${grow.image}`,
                  }}
                />
              </View>
              <View style={styles.basicInfo}>
                <Title>{grow.title}</Title>
                <Text>{grow.strain}</Text>
                <DateText date={grow.createdAt} />
              </View>
            </TouchableOpacity>
          ))}
      </Screen>
      <BottomActionsBar />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 20,
  },
  item: {
    height: 350,
    width: '90%',
    margin: 10,
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    borderTopLeftRadius: 20,
  },
  imageContainer: {
    flex: 3,
  },
  image: {
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  basicInfo: {
    flex: 2,
    marginTop: -20,
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#CBCBCB',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderLeftColor: '#CBCBCB',
    borderLeftWidth: 1,
    borderRightColor: '#CBCBCB',
    borderRightWidth: 1,
  },
});

export default Grows;
