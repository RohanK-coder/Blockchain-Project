import { Navbar, Welcome, Footer, Services, Transactions, Items } from "./components";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Services />
    <Items/>
    <Transactions />
    <Footer />
  </div>
);

export default App;
