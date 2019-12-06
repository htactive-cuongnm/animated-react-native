import React from 'react';
import {Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const iconMap = {
  home: 'home',
  search: 'search1',
  favorites: 'star',
  profile: 'meho',
};

const Icon = ({name, color, style, ...props}) => {
  const icon = iconMap[name];
  return <AntDesign name={icon} size={26} color={color} />;
  // return <Text style={[{fontSize: 26, color}, style]}>{icon}</Text>;
};

export default Icon;
