import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import QuizLibrary from './pages/QuizLibrary';
import Leaderboard from './pages/Leaderboard';
import CreateQuiz from './pages/CreateQuiz';
import QuizPlay from './pages/QuizPlay';
import QuizResults from './pages/QuizResults';

function App() {
  return (
    //<Router>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/library" element={<QuizLibrary />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/create" element={<CreateQuiz />} />
        <Route path="/play" element={<QuizPlay />} />
        <Route path="/results" element={<QuizResults />} />
      </Routes>
    </Router>
  );
}

export default App;
