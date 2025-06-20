import { useState, useEffect } from 'react';
import { fetchAlbums } from '../api/api';

export default function useAlbums() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAlbums()
      .then(setAlbums)
      .catch(() => setError('Failed to load albums'))
      .finally(() => setLoading(false));
  }, []);

  return { albums, loading, error };
}
