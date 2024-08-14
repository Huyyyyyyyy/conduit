import UserContext, { UserContextType } from "../../context/UserContext";
import { TUserLogin, TCreateUser } from "../../types/user";
import Banner from "../layout/Container/Banner/Banner";
import Content from "../layout/Container/Content/Content";
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";

const currentUser: UserContextType = {
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
  get: function (userLoginType: TUserLogin): void {
    throw new Error("Function not implemented.");
  },
  create: function (userType: TCreateUser): void {
    throw new Error("Function not implemented.");
  },
  status: "idle",
};

const App = () => {
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
