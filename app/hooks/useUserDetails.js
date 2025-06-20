import { useState, useEffect } from 'react';
import { fetchUserById } from '../api/api';

export default function useUserDetails(userId) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUserById(userId)
      .then(data => setUser(data))
      .catch(() => setError('Failed to load user'))
      .finally(() => setLoading(false));
  }, [userId]);

  return { user, loading, error };
}
