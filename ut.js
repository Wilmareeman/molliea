// Save state
function saveState(key, state) {
  localStorage.setItem(key, JSON.stringify(state));
}

// Restore state
function restoreState(key) {
  const savedState = localStorage.getItem(key);
  return savedState ? JSON.parse(savedState) : null;
}

// Example usage
const currentState = { user: 'John Doe', loggedIn: true };
saveState('appState', currentState);

// Later, restore the state
const restoredState = restoreState('appState');
console.log(restoredState); // { user: 'John Doe', loggedIn: true }
