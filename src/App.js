import AdminDashboard from "./pages/admin/AdminDashboard";
import UserManagement from "./pages/admin/manage/UserManagement";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import RootRoutes from "./routes/rootRoutes";


function App() {
    return (
        // <SignIn></SignIn>
        // <AdminDashboard/>
        // <UserManagement></UserManagement>
        <RootRoutes></RootRoutes>
//   <Signup></Signup>
    );
}

export default App;
