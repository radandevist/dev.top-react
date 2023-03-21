import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
// import { ProtectedRoute } from "./components/routes/ProtectedRoute"
import Home from "./pages/home/Home"
import { Page404 } from "./pages/errors/Page404";
import Layout from "./components/layout/Layout";
import Tags from "./pages/tags/Tags";
import Search from "./pages/search/Search";
import Login from "./pages/login/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Guest Routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}/>
        <Route path="search" element={<Search />} />
        {/* <Route path="/latest" element={<Home/>} /> */}
        {/* <Route path="/top/*" element={<Home/>} /> */}

        <Route path="tags">
          <Route index element={<Tags />} />
        </Route>

        <Route path="*" element={<Page404 />} />

        {/* User related routes */}
        {/* <Route path=":username" element={<Profile />} /> */}
        
        {/* Post related routes */}
        {/* <Route path=":slug" element={<PostPage />} />
        <ProtectedRoute  path=":slug/edit" element={<EditPost/>} />
        <ProtectedRoute  path="new" element={<EditPost/>} /> */}

        {/* <Route path=":slug">
          <Route index element={<PostPage />} />
          <ProtectedRoute path="edit" element={<EditPost/>} />
        </Route>
        <ProtectedRoute  path="new" element={<EditPost/>} /> */}

        {/* User Dashboard */}
        {/* Place here if routes have the same layout */}


        <Route path="/login" element={<Login />} />
      </Route>

      {/* Login and register pages for example might be placed outside like here */}

      {/* User Dashboard */}
      {/* Place here if routes does not have the same layout */}

      {/*
        User dashboards could requires you to be authed for example
        and could have a very different layout from the guest routes
      */}
      {/* <ProtectedRoute path="/dashboard" element={<DashBoardLayout />} >
        <Route index element={<OverView />} />
      </ProtectedRoute> */}
    </>
  )
);

export const AppRoutes = () => <RouterProvider router={router} />