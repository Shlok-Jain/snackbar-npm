# snackbar-notification-js

This is an amazing nodejs module which can be used to show notifications in your web apps. This looks like snackbar used in android.

## Installation

Use the package manager [npm](https://nodejs.org) to install foobar.

```bash
npm install snackbar-notification-js
```

## Usage

```jsx
import './App.css';
const snackBar = require('snackbar-notification-js')

function App() {

  window.onload = () => {
    snackBar('window loaded', 3000)
  }
  return (
    <>
      {/*Your HTML Here*/}
    </>
  );
}

export default App;

```
## Parameters
There are two params for snackBar function
- message (type: String) - contains the message to display
- duration (type: Int) - time for which snackbar is visible in milliseconds(ms)
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Creator
Shlok Nilesh Jain