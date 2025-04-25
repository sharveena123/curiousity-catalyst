
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import SubjectSelection from "./pages/SubjectSelection";
import LearningExperience from "./pages/LearningExperience";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/subject-selection" element={<SubjectSelection />} />
      <Route path="/learning-experience" element={<LearningExperience />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
