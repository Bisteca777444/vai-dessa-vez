import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Games from './pages/Games';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-redasiatic flex flex-col font-asian text-gold">
        <header className="w-full p-6 border-b border-gold flex justify-between items-center">
          <h1 className="text-3xl font-bold">Cassino Asiático</h1>
          <nav>
            <ul className="flex gap-8 text-lg">
              <li><Link to="/" className="hover:underline">Início</Link></li>
              <li><Link to="/games" className="hover:underline">Jogos</Link></li>
              <li><a href="#" className="hover:underline">Promoções</a></li>
              <li><a href="#" className="hover:underline">Minha Conta</a></li>
            </ul>
          </nav>
        </header>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <div className="flex flex-col items-center justify-center p-16 text-center max-w-4xl mx-auto">
                <h2 className="text-5xl font-extrabold mb-6">Bem-vindo ao Cassino Asiático</h2>
                <p className="mb-10 text-xl">
                  Explore os melhores jogos de bacará, roleta, pôquer e muito mais com um toque asiático autêntico.
                </p>
                <Link to="/games" className="bg-gold text-redasiatic font-bold py-3 px-10 rounded-lg shadow-lg hover:brightness-90 transition">
                  Começar a Jogar
                </Link>
              </div>
            } />
            <Route path="/games" element={<Games />} />
          </Routes>
        </main>

        <footer className="w-full p-6 border-t border-gold text-center text-sm">
          © 2025 Cassino Asiático - Todos os direitos reservados.
        </footer>
      </div>
    </Router>
  );
}
