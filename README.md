# React Native orientation example

A simple example of handling orientation changes in React Native. Run the app [using Expo](https://exp.host/@calumjames/OrientationExample).

I've seen issues with the React Native `Dimensions` `"change"` event not firing sometimes in a more complex app, so I'm keeping this here to play around with whenever I see it not working, to see if I can figure out consistent reproduction steps.

If you'd like to play around with this, you can clone the repo, install the dependencies, run the `start` script, and rotate the simulator to see the text changing.

The [official Expo site](https://expo.io/learn) includes information on how to set up your iOS or Android simulator, along with installing the Expo CLI if you'd like to.

**NOTE**: When Expo supports React Hooks, I'll move the orientation piece to a hook.
