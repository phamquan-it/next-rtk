import { useCallback } from 'react';
import { platformApi } from '../store/example/platform.enpoints';
import { PlatformResponse } from '../models/platform.model';

export const usePlatformList = (searchTerm: string = '', page: number = 1, pageSize: number = 10) => {
  // Fetch platform list with dynamic parameters
  const { data: response, isFetching:isFetchingData, isLoading } = platformApi.useFetchPlatformListQuery({
    language: 'en', // Adjust as needed
    keyword: searchTerm,
    offset: page
  });

  // Return the response data, loading state, and helper functions
  return {
    platforms: response?.data || [],
    total: response?.total || 0,
    isFetchingData:( isFetchingData),
    refetch: () => {}, // No-op refetch function, manage state updates in component
  };
};
