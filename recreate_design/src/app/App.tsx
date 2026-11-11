import { Routes, Route, Navigate } from 'react-router';
import { Layout } from './components/Layout';
import { ScrollToTop } from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import CaseStudyPage from './pages/CaseStudyPage';
import BuyerPage from './pages/BuyerPage';

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/for/:slug" element={<BuyerPage />} />
        <Route path="/customers/statewide-university" element={<CaseStudyPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}
