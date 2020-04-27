import React, {useEffect, useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import Fab from '~/components/Fab';
import RegisterFruit from '~/components/RegisterFruit';
import FruitImage from '~/components/FruitImage';
import {useDispatch, useSelector} from 'react-redux';
import {Actions} from '~/store/ducks/fruit';
import {Container} from './styles';

const Map = () => {
  const [coordinates, setCoordinates] = useState();
  const [showAddButton, setShowAddButton] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.fruit.loading);
  const fruits = useSelector((state) => state.fruit.fruits);
  const categories = useSelector((state) => state.fruit.categories);
  const onAddPress = () => {
    setShowAddModal(true);
  };

  const onAddFruit = (category) => {
    const fruit = {};
    fruit.coordinates = coordinates;
    fruit.category = category.code;
    dispatch(Actions.createFruit(fruit));
    setCoordinates();
    setShowAddButton(false);
    setShowAddModal(false);
    dispatch(Actions.getFruits());
  };

  const onCancel = () => {
    setShowAddModal(false);
  };

  const onMapPress = (coords) => {
    if (showAddButton) {
      setShowAddButton(false);
      setShowAddModal(false);
      return;
    }

    setCoordinates(coords);
    setShowAddButton(true);
  };

  useEffect(() => {
    dispatch(Actions.getFruits());
    dispatch(Actions.getCategories());
  }, []);

  return (
    <Container>
      <MapView
        onPress={(event) => onMapPress(event.nativeEvent.coordinate)}
        style={{flex: 1}}
        initialRegion={{
          latitude: -23.544294,
          longitude: -46.632797,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {showAddButton && <Marker coordinate={coordinates} />}
        {fruits.map((fruit) => {
          return (
            <Marker key={`${fruit.coordinates.latitude}${fruit.coordinates.longitude}`} coordinate={fruit.coordinates}>
              <FruitImage
                category={fruit.category}
              />
            </Marker>
          );
        })}
      </MapView>
      <Fab show={showAddButton} onPress={() => onAddPress()} />
      <RegisterFruit
        categories={categories}
        show={showAddModal}
        onCancelPress={onCancel}
        onConfirmPress={onAddFruit}
      />
    </Container>
  );
};

export default Map;
