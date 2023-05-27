import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeScreen from "./pages/home.tsx";
import ProductsScreen from "./pages/products.tsx";
import ProductIdScreen from "./pages/product/productId.tsx";
import StatsRankScreen from "./pages/stats-rank.tsx";
import StatsActivityScreen from "./pages/stats-activity.tsx";
import BlogsScreen from "./pages/blogs.tsx";
import ErrorPage from "./pages/error-page.tsx";
import GuidesCategoryBlog from "./children-pages/blogs/guides.tsx";
import GuestPostsBlogCategory from "./children-pages/blogs/guest-posts.tsx";
import SpotlightsBlogCategory from "./children-pages/blogs/spotlights.tsx";
import SafetySecurityBlogCategory from "./children-pages/blogs/safety-security.tsx";
import AnnouncementsBlogCategory from "./children-pages/blogs/announcements.tsx";
import BlogIdScreen from "./pages/blogs/blogId.tsx";
import ProfileScreen from "./pages/profile.tsx";
import ProfileSettingsScreen from "./pages/profile-settings.tsx";
import ProfileCategory from "./children-pages/profile-settings/profile.tsx";
import LinksCategory from "./children-pages/profile-settings/links.tsx";
import NotificationsCategory from "./children-pages/profile-settings/notifications.tsx";
import OffersCategory from "./children-pages/profile-settings/offers.tsx";
import ApperanceCategory from "./children-pages/profile-settings/apperance.tsx";
import SupportCategory from "./children-pages/profile-settings/support.tsx";
import App from "./App.tsx";
import CreateScreen from "./pages/create.tsx";
import ConnectWalletScreen from "./pages/connect-wallet.tsx";
import CreateItemScreen from "./pages/create-item.tsx";
import LoginScreen from "./pages/login.tsx";
import RegisterScreen from "./pages/register.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomeScreen />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/explore",
        element: <ProductsScreen />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/explore/:productId",
        element: <ProductIdScreen />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/stats-rank",
        element: <StatsRankScreen />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/stats-activity",
        element: <StatsActivityScreen />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/blogs",
        element: <BlogsScreen />,
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <GuidesCategoryBlog /> },
          {
            path: "guides",
            element: <GuidesCategoryBlog />,
          },
          {
            path: "guest-posts",
            element: <GuestPostsBlogCategory />,
          },
          {
            path: "spotlights",
            element: <SpotlightsBlogCategory />,
          },
          {
            path: "safety-security",
            element: <SafetySecurityBlogCategory />,
          },
          {
            path: "announcements",
            element: <AnnouncementsBlogCategory />,
          },
        ],
      },
      {
        path: "/blogs/:blogId",
        element: <BlogIdScreen />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/profile",
        element: <ProfileScreen />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/profile-settings",
        element: <ProfileSettingsScreen />,
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <ProfileCategory /> },
          {
            path: "profile",
            element: <ProfileCategory />,
          },
          {
            path: "links",
            element: <LinksCategory />,
          },
          {
            path: "notifications",
            element: <NotificationsCategory />,
          },
          {
            path: "offers",
            element: <OffersCategory />,
          },
          {
            path: "appearance",
            element: <ApperanceCategory />,
          },
          {
            path: "support",
            element: <SupportCategory />,
          },
        ],
      },
      {
        path: "/create",
        element: <CreateScreen />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/connect-wallet",
        element: <ConnectWalletScreen />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/create-item",
        element: <CreateItemScreen />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/register",
        element: <RegisterScreen />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/login",
        element: <LoginScreen />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
