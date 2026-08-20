import { useEffect, useState } from 'react';
import { FALLBACK_PORTFOLIO_DATA } from '../data/fallbackPortfolioData';
import { getPortfolioData } from '../services/portfolioService';
import { ProfileData } from '../types';

export const usePortfolio = () => {
  const [data, setData] = useState<ProfileData>(FALLBACK_PORTFOLIO_DATA);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    getPortfolioData()
      .then((portfolioData) => {
        if (isMounted) setData(portfolioData);
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { data, isLoading };
};
