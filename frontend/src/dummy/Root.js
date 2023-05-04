import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  //   const navigation = useNavigation();
  return (
    <>
      <MainNavigation />
      <main>
        {/* when need use navigataion  import useNavigataion */}
        {/* {navigation.state === "loading" && <p>loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
