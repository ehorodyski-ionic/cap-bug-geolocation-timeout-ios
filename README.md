# Capacitor Bug (iOS): Geolocation Times Out

This sample repository is a reproduction of Capacitor Issue [#3789](https://github.com/ionic-team/capacitor/issues/3789).

## Issue

The method `getCurrentPosition` times out from the iOS native side if the user does not complete the permission prompt (either accepting or denying Geolocation permission) within an indeterminate amount of time (appears to be a few seconds).

## Relevant Code

Relevant code can be found in `/src/ExploreContainer.tsx`. For test purposes, the Geolocation `timeout` option has been set to 10 seconds.
