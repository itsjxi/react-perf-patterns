import { useState, useEffect, useCallback } from 'react';
import Card from '../../components/Card/Card';
import './InfiniteScroll.css';

const InfiniteScroll = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const loadItems = useCallback(async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newItems = Array.from({ length: 10 }, (_, i) => ({
      id: (page - 1) * 10 + i + 1,
      title: `Item ${(page - 1) * 10 + i + 1}`,
      description: `This is the description for item ${(page - 1) * 10 + i + 1}`
    }));
    
    setItems(prev => [...prev, ...newItems]);
    setLoading(false);
  }, [page]);

  useEffect(() => {
    loadItems();
  }, [loadItems]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop 
          >= document.documentElement.offsetHeight - 1000) {
        if (!loading) {
          setPage(prev => prev + 1);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  return (
    <div className="infinite-scroll-container">
      <h2>Infinite Scroll</h2>
      <div className="items-grid">
        {items.map(item => (
          <Card key={item.id} className="scroll-item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Card>
        ))}
      </div>
      {loading && (
        <div className="loading">
          <div className="spinner"></div>
          Loading more items...
        </div>
      )}
    </div>
  );
};

export default InfiniteScroll;