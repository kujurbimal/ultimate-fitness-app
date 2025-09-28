# Mobile - React Native Starter Notes

This folder contains notes to start a React Native app (Expo recommended):

## Using Expo
```bash
npm install -g expo-cli
expo init ultimate-fitness-mobile
cd ultimate-fitness-mobile
expo start
```

## Key native integrations
- HealthKit (iOS) via `react-native-health` or `expo-health` (if available)
- Google Fit via `react-native-google-fit`
- GPS/Location via `expo-location` or `react-native-location`

## Tips
- Use Redux or Zustand for state management
- Use react-navigation for routing
- Implement background tracking carefully with foreground services on Android
