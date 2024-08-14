import UserContext, { UserContextType } from "../../context/UserContext";
import Banner from "../layout/Container/Banner/Banner";
import Content from "../layout/Container/Content/Content";
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";
import { useUser } from "../../hooks/useUser";

const App = () => {
  const currentUser: UserContextType = useUser();
  return (
    <>
      <div className="container">
        <UserContext.Provider value={currentUser}>
          <Header></Header>
        </UserContext.Provider>
        <Banner></Banner>
        <Content></Content>
        <Footer></Footer>
      </div>
    </>
  );
};

export default App;
