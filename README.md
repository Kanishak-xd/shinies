# Shinies

npx create-expo-app@latest metals-demo
cd metals-demo
npx expo start
npm install nativewind react-native-reanimated@~3.17.4 react-native-safe-area-context@5.4.0
npm install --dev tailwindcss@^3.4.17 prettier-plugin-tailwindcss@^0.5.11
npx tailwindcss init
replace * in ``tailwind.config.js`` with:
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
``babel.config.js`` at root and add:
```
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
```
add this in _layout.tsx:
```
import "../global.css";
```
metro.config.js at root:
```
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
 
const config = getDefaultConfig(__dirname)
 
module.exports = withNativeWind(config, { input: './global.css' })
```
global.css at root:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
``nativewind-env.d.ts`` at root:
```
/// <reference types="nativewind/types" />
```
``app.json``:
```
{
  "expo": {
    "web": {
      "bundler": "metro"
    }
  }
}
```
npm install react-native-dotenv


## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```


