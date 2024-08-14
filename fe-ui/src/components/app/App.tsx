import UserSigninContext, {
  UserSigninContextType,
} from "../../context/UserSigninContext";
import Banner from "../layout/Container/Banner/Banner";
import Content from "../layout/Container/Content/Content";
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";


const currentUser: UserSigninContextType = {
  user: {
    id: 1,
    email: "gia.huy@gmail.com",
    userName: "huy4902",
    avatar:
      "https://assets.codepen.io/1524299/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1507654440&width=512",
    shortBio: "Software Developer",
    password: "123456789",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  isLogin: true,
};

const App = () => {
  return (
    <>
      <div className="container">
        <UserSigninContext.Provider value={currentUser}>
          <Header></Header>
        </UserSigninContext.Provider>
        <Banner></Banner>
        <Content></Content>
        <Footer></Footer>
      </div>
    </>
  );
};

export default App;
