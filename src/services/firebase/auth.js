import auth from '@react-native-firebase/auth';

export const sendCode = async phone => {
  const result = await auth().signInWithPhoneNumber(phone);
  return result;
};

export const validateCode = async (verification, code) => {
  const result = await verification.confirm(code);
  return result;
};

export const logout = async () => {
  await auth().signOut();
}
