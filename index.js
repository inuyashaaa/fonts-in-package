import { NativeModules, View, Text } from 'react-native';
import React from "react";
const { AIAFontPackage } = NativeModules
const CusFont = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontFamily: 'AIAEverest-CondensedMedium' }}>Huy Manh</Text>
    </View>
  )
}

export default AIAFontPackage;
export {
  CusFont
}
