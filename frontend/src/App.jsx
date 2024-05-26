import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useImmerReducer } from "use-immer";

// components
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import Footer from "./components/Footer";
import HomeGuest from "./components/HomeGuest";
import Jobs from "./pages/Jobs";
import Apply from "./components/Apply";
import Categories from "./pages/Categories";
import PostJob from "./components/PostJob";

// context
import StateContext from "./StateContext";
import DispatchContext from "./DispatchContext";
import SinglePost from "./components/SinglePost";

const App = () => {
  const isActive = false;

  const initialState = {
    loggedIn: false,
  };

  function ourReducer(draft, action) {
    switch (action.type) {
      case "login":
        draft.loggedIn = true;
        return;
      case "logout":
        draft.loggedIn = false;
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomeGuest />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/post-job" element={<PostJob />} />
            <Route path="/single-post/:id" element={<SinglePost />} />
          </Routes>
          {isActive && <Apply />}
          <Footer />
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default App;
