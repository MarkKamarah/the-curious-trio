'use client';

export interface SearchResult {
  title: string;
  url: string;
  snippet: string;
  source?: string;
}

interface SearchResultsProps {
  results: SearchResult[];
  query: string;
  isLoading: boolean;
}

export default function SearchResults({ results, query, isLoading }: SearchResultsProps) {
  if (isLoading) {
    return (
      <div className="w-full max-w-4xl mx-auto mt-8">
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-piko-primary border-t-transparent"></div>
          <p className="mt-4 text-gray-600">Piko is searching...</p>
        </div>
      </div>
    );
  }

  if (!query) {
    return null;
  }

  if (results.length === 0) {
    return (
      <div className="w-full max-w-4xl mx-auto mt-8">
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <p className="text-xl text-gray-600">No results found for "{query}"</p>
          <p className="mt-2 text-sm text-gray-500">Try different keywords or check your spelling</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 space-y-4">
      <div className="text-sm text-gray-600 mb-4">
        Found {results.length} results for "{query}"
      </div>
      
      {results.map((result, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
        >
          <a
            href={result.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <h3 className="text-xl font-semibold text-piko-primary group-hover:text-piko-accent transition-colors mb-2">
              {result.title}
            </h3>
            <p className="text-sm text-green-700 mb-2 break-all">
              {result.url}
            </p>
            <p className="text-gray-700 line-clamp-3">
              {result.snippet}
            </p>
            {result.source && (
              <p className="text-xs text-gray-500 mt-2">
                Source: {result.source}
              </p>
            )}
          </a>
        </div>
      ))}
    </div>
  );
}
