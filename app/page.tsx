'use client';

import { useState } from 'react';
import SearchBar from '@/components/search/SearchBar';
import SearchResults, { SearchResult } from '@/components/search/SearchResults';
import PikoCharacter from '@/components/characters/PikoCharacter';

export default function Home() {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [characterState, setCharacterState] = useState<'idle' | 'listening' | 'searching' | 'success' | 'error'>('idle');

  const handleSearch = async (searchQuery: string) => {
    setQuery(searchQuery);
    setIsLoading(true);
    setCharacterState('searching');
    setResults([]);

    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: searchQuery }),
      });

      if (!response.ok) {
        throw new Error('Search failed');
      }

      const data = await response.json();
      setResults(data.results || []);
      setCharacterState(data.results && data.results.length > 0 ? 'success' : 'error');
    } catch (error) {
      console.error('Search error:', error);
      setResults([]);
      setCharacterState('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen p-8 pb-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <h1 className="text-5xl font-bold mb-4 text-piko-primary">
            The Curious Trio
          </h1>
          <p className="text-lg text-gray-600">
            A personality-driven search engine
          </p>
        </div>

        {/* Character Display */}
        <PikoCharacter state={characterState} />

        {/* Search Interface */}
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        </div>

        {/* Search Results */}
        <SearchResults 
          results={results} 
          query={query} 
          isLoading={isLoading}
        />
      </div>
    </main>
  );
}
