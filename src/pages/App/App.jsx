import React, { useEffect, useState } from 'react';
import { Routes, Route,} from 'react-router-dom';
import './App.css';
import SneakerSearchForm from '../../components/Sneakers/SneakerSearch/SneakerSearchForm';
import SneakersCard from '../../components/SneakersCard/SneakersCard';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import AboutPage from '../AboutPage/AboutPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import Home from '../../components/Home/Home';

export default function App() {
  const [sneakers, setSneakers] = useState(null)
  const [user, setUser] = useState(getUser());


  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/about" element={<AboutPage sneakers = {sneakers} />}  />
            <Route path="/orders" element={<OrderHistoryPage />} />
            <Route path="sneaker/:styleID" element={<SneakersCard />} />
            <Route path="/sneakers" element={<SneakerSearchForm setSneakers = {setSneakers} />} />
            <Route path="/Home" element={<Home />} />
          </Routes>

        </>
        :
        <AuthPage setUser={setUser} />
      } 
      
    </main>
  );
}
