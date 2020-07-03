import React from "react";

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <h1>App</h1>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
