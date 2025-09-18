import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MainPage from './MainPage';
import LabsPage from './LabsPage';
import LabPage from './LabPage';
import GoalPage from './LabContents/GoalPage';
import TaskPage from './LabContents/TaskPage';
import AnalysisPage from './LabContents/AnalysisPage';
import CodePage from './LabContents/CodePage';
import ScreenshotsPage from './LabContents/ScreenshotsPage';
import CheckPage from './LabContents/CheckPage';
import AiReviewPage from './LabContents/AiReviewPage';
import ConclusionPage from './LabContents/ConclusionPage';
import './styles.css'

function App(){
    return (
    <BrowserRouter basename="/fp-reports/">
      <Routes>
        <Route path="/" element={< MainPage/>} />
        <Route path="/labs" element={<LabsPage />} />
        <Route path="/labs/:labId" element={<LabPage />} />
        <Route path="/goal/:labId" element={<GoalPage />} />
        <Route path="/task/:labId" element={<TaskPage />} />
        <Route path="/analysis/:labId" element={<AnalysisPage />} />
        <Route path="/code/:labId" element={<CodePage />} />
        <Route path="/screenshot/:labId" element={<ScreenshotsPage />} />
        <Route path="/check/:labId" element={<CheckPage />} />
        <Route path="/ai-review/:labId" element={<AiReviewPage />} />
        <Route path="/conclusion/:labId" element={<ConclusionPage />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App