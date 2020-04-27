import firestore from '@react-native-firebase/firestore';

export const list = async () => {
  const DocumentSnapshot = await firestore().collection('Fruits').get();
  let fruits = [];
  DocumentSnapshot.forEach(fruit => {
    fruits.push(fruit.data());
  });

  return fruits;
};

export const listCategories = async () => {
  const DocumentSnapshot = await firestore().collection('Categories').get();
  let categories = [];
  DocumentSnapshot.forEach(category => {
    categories.push(category.data());
  });
  
  return categories;
};

export const add = async (fruit) => {
  await firestore().collection('Fruits').add(fruit);
};