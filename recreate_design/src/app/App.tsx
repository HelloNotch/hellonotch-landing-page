import { Routes, Route } from 'react-router';
import { Layout } from './components/Layout';
import HomePage from './pages/HomePage';
import CaseStudyPage from './pages/CaseStudyPage';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/customers/statewide-university" element={<CaseStudyPage />} />
      </Routes>
    </Layout>
  );
}
