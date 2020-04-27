import firestore from '@react-native-firebase/firestore';

export const list = async () => {
  const DocumentSnapshot = await firestore().collection('Fruits').get();
  if (!DocumentSnapshot.exists) return null;

  return DocumentSnapshot.data();
};

export const createFruitListener = async (onResult, onError) => {
  return firestore()
		.collection('Fruits')
		.onSnapshot(querySnapshot => {
            querySnapshot.forEach(doc => {
                onResult(doc.data());
            });
        }, error => {
            onError(error);
        });
};