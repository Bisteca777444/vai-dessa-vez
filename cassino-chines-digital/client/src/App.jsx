import React from 'react';
export default function App() {
  return (
    <div className="min-h-screen bg-redasiatic flex flex-col items-center font-asian text-gold">
      <header className="w-full p-6 border-b border-gold flex justify-between items-center">
        <h1 className="text-3xl font-bold">Cassino Asiático</h1>
        <nav>
          <ul className="flex gap-8 text-lg">
            <li><a href="#" className="hover:underline">Início</a></li>
            <li><a href="#" className="hover:underline">Jogos</a></li>
            <li><a href="#" className="hover:underline">Promoções</a></li>
            <li><a href="#" className="hover:underline">Minha Conta</a></li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow flex flex-col justify-center items-center px-6 text-center max-w-4xl">
        <h2 className="text-5xl font-extrabold mb-6">Bem-vindo ao Cassino Asiático</h2>
        <p className="mb-10 text-xl max-w-3xl">
          Explore os melhores jogos de bacará, roleta, pôquer e muito mais com um toque asiático autêntico.  
          Aproveite bônus diários, torneios exclusivos e pagamentos rápidos em criptomoedas.
        </p>
        <button className="bg-gold text-redasiatic font-bold py-3 px-10 rounded-lg shadow-lg hover:brightness-90 transition">
          Começar a Jogar
        </button>
      </main>

      <footer className="w-full p-6 border-t border-gold text-center text-sm">
        © 2025 Cassino Asiático - Todos os direitos reservados.
      </footer>
    </div>
  );
}

