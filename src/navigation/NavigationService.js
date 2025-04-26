// src/navigation/NavigationService.js
//import { createNavigationContainerRef, StackActions } from '@react-navigation/native';
import { createNavigationContainerRef, CommonActions } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

/**
 * Navigate to a specific screen.
 * @param {string} name - The name of the screen to navigate to.
 * @param {object} params - Optional parameters to pass to the screen.
 */
export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

/**
 * Go back to the previous screen.
 */
export function goBack() {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack();
  }
}

/**
 * Reset navigation stack and move to a specific screen.
 * This prevents the user from navigating back.
 * @param {string} name - The screen to reset to.
 * @param {object} params - Optional parameters.
 */
export function reset(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name, params }],
      })
    );
  }
}
