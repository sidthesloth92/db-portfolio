import { useState } from 'react';

import { API_URLS } from '../../constants';
import { Nugget } from '../../models/Nugget';

/**
 * Custom hook that fetches nuggets for a given page.
 * @param initialNuggets The set of initial nuggets.
 * @param tag The tag to filter the nuggets by.
 * @param nuggetsPerPage The number of nuggets per pave.
 */
export const useNuggets = (
  initialNuggets: Nugget[],
  tag = '',
  nuggetsPerPage = 10
): [Nugget[], boolean, () => void] => {
  const [page, setPage] = useState(1);

  const [nuggets, setNuggets] = useState(initialNuggets);
  const [hasMore, setHasMore] = useState(nuggets.length >= nuggetsPerPage);

  const fetchMoreNuggets: () => void = async () => {
    const params = new URLSearchParams({
      page: String(page + 1),
      per_page: String(nuggetsPerPage),
      tag
    });

    const url = `${API_URLS}?${params}`;

    console.log('Fetching more nuggets: ', url);
    const response = await fetch(url);
    const newNuggets = await response.json();

    setNuggets([...nuggets, ...newNuggets]);
    setHasMore(newNuggets.length >= nuggetsPerPage);
    setPage((page) => page + 1);
  };

  return [nuggets, hasMore, fetchMoreNuggets];
};
