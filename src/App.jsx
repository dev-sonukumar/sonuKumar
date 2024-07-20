import AllComponents from "./AllComponents";
import Nav from "./Components/nav/Nav";
import AllRoutes from "./routeComponent/AllRoutes";

const App = () => {
  return (
    <div>
      <Nav />
      <AllRoutes />
      <AllComponents />
    </div>
  );
};

export default App;
