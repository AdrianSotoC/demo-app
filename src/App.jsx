import AppRouter from "./router/AppRouter";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import AuthState from "./context/AuthState";

const App = () => {
  return (
    <>
    <AuthState>
      <AppRouter />
    </AuthState>
    </>
  );
};

export default App;
