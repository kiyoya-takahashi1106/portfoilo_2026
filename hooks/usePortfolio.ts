import { useEffect, useState } from 'react';
import { getPortfolioData } from '../services/portfolioService';
import { ProfileData } from '../types';

export const usePortfolio = () => {
  const [data, setData] = useState<ProfileData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    getPortfolioData()
      .then((portfolioData) => {
        if (!isMounted) return;
        setData(portfolioData);
        setError(null);
      })
      .catch((loadError: unknown) => {
        if (!isMounted) return;
        setError(loadError instanceof Error ? loadError.message : 'Failed to load portfolio data.');
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { data, error, isLoading };
};
