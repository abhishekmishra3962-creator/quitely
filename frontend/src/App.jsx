import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Journal from "./pages/Journal";
import Write from "./pages/Write";
import Discover from "./pages/Discover";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import Loading from "./pages/Loading";

function App() {
  return (
    <div className="app">

      <header className="topbar">
        <h2>quietly</h2>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/journal">My Journal</Link>
          <Link to="/write">Write</Link>
          <Link to="/discover">Discover</Link>
          <Link to="/profile">Profile</Link>
        </nav>
      </header>

      <main className="content">
        <Routes>

          {/* Landing page */}
          <Route path="/landing" element={<Landing />} />

          {/* Main pages */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/write" element={<Write />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/profile" element={<Profile />} />

          {/* Authentication */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Loading */}
          <Route path="/loading" element={<Loading />} />

        </Routes>
      </main>

    </div>
  );
}

export default App;