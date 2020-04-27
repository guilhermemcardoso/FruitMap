import React, {useState} from 'react';
import {Switch} from 'react-native';
import {primaryLight} from '~/themes/index';

const NotificationSwitch = () => {
  const [value, setValue] = useState(true);
  return (
    <Switch
      value={value}
      onValueChange={setValue}
      trackColor={{true: primaryLight}}
    />
  );
};

export default NotificationSwitch;
