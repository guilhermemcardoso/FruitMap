import firestore from '@react-native-firebase/firestore';

export const get = async (uid) => {
  const DocumentSnapshot = await firestore().collection('Users').doc(uid).get();
  if (!DocumentSnapshot.exists) return null;

  return DocumentSnapshot.data();
};

export const createUser = async (data) => {
  await firestore().collection('Users').doc(data.id).set(data);
};
