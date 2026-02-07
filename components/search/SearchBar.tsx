'use client';

import { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  isLoading?: boolean;
}

export default function SearchBar({ onSearch, isLoading = false }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
      <div className="relative flex items-center bg-white rounded-full shadow-lg overflow-hidden border-2 border-piko-primary/20 hover:border-piko-primary/40 transition-colors">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask Piko anything..."
          disabled={isLoading}
          className="flex-1 px-6 py-4 text-lg outline-none disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <button
          type="submit"
          disabled={!query.trim() || isLoading}
          className="px-8 py-4 bg-piko-primary hover:bg-piko-accent text-white font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </div>
      
      {!query && (
        <div className="mt-4 text-center text-sm text-gray-500">
          <p>Try: "How do red pandas survive?" or "Best pizza recipes"</p>
        </div>
      )}
    </form>
  );
}
