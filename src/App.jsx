import AppRouter from "./router/AppRouter";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import AuthState from "./context/AuthState";
import ProductState from "./context/ProductState";

const App = () => {
  return (
    <>
    <AuthState>
      <ProductState>     
        <AppRouter />
      </ProductState>
    </AuthState>
    </>
  );
};

export default App;
