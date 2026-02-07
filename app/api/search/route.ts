import { NextRequest, NextResponse } from 'next/server';

interface SearchResult {
  title: string;
  url: string;
  snippet: string;
  source?: string;
}

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json();

    if (!query || typeof query !== 'string') {
      return NextResponse.json(
        { error: 'Invalid query' },
        { status: 400 }
      );
    }

    // TODO: Replace with actual search API (SearXNG or Brave Search)
    // For now, return mock results
    const mockResults: SearchResult[] = [
      {
        title: `Everything you need to know about: ${query}`,
        url: `https://example.com/search?q=${encodeURIComponent(query)}`,
        snippet: `This is a comprehensive guide about ${query}. Learn everything from basics to advanced topics, with expert insights and practical examples.`,
        source: 'Mock Search Engine',
      },
      {
        title: `${query} - Complete Guide`,
        url: `https://guide.example.com/${query.toLowerCase().replace(/\s+/g, '-')}`,
        snippet: `Discover the best practices, tips, and tricks related to ${query}. Our in-depth article covers all aspects you need to know.`,
        source: 'Mock Search Engine',
      },
      {
        title: `Top 10 Facts About ${query}`,
        url: `https://facts.example.com/top-10-${query.toLowerCase().replace(/\s+/g, '-')}`,
        snippet: `Explore fascinating facts and interesting information about ${query}. You won't believe fact number 7!`,
        source: 'Mock Search Engine',
      },
    ];

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json({
      results: mockResults,
      query,
      totalResults: mockResults.length,
    });

  } catch (error) {
    console.error('Search API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
