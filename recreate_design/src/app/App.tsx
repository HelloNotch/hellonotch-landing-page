import { Routes, Route } from 'react-router';
import { Layout } from './components/Layout';
import { ScrollToTop } from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import CaseStudyPage from './pages/CaseStudyPage';

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/customers/statewide-university" element={<CaseStudyPage />} />
      </Routes>
    </Layout>
  );
}
