import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardsListComponent from './components/CardListComponent';
import CardDetailComponent from './components/CardDetailComponent';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CardsListComponent />} />
        <Route path="/card/:id" element={<CardDetailComponent />} />
      </Routes>
    </Router>
  );
};

export default App;

