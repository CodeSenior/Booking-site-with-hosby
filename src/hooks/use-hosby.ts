
import { useState, useEffect } from 'react';
import { hosby } from '../lib/hosby';
import { toast } from './use-toast';

interface UseHosbyOptions {
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
}

export const useHosby = (options?: UseHosbyOptions) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  const fetchConfiguration = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Using the getConfig method instead of getConfiguration
      const response = await hosby.getConfig();
      setData(response);
      
      if (options?.onSuccess) {
        options.onSuccess(response);
      }
      
      return response;
    } catch (err) {
      console.error('Error fetching Hosby configuration:', err);
      setError(err);
      
      toast({
        title: "Configuration Error",
        description: "Failed to load Hosby configuration",
        variant: "destructive",
      });
      
      if (options?.onError) {
        options.onError(err);
      }
      
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const updateConfiguration = async (config: any) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Using the updateConfig method instead of updateConfiguration
      const response = await hosby.updateConfig(config);
      setData(response);
      
      toast({
        title: "Success",
        description: "Hosby configuration updated",
      });
      
      if (options?.onSuccess) {
        options.onSuccess(response);
      }
      
      return response;
    } catch (err) {
      console.error('Error updating Hosby configuration:', err);
      setError(err);
      
      toast({
        title: "Update Error",
        description: "Failed to update Hosby configuration",
        variant: "destructive",
      });
      
      if (options?.onError) {
        options.onError(err);
      }
      
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    fetchConfiguration,
    updateConfiguration,
    isLoading,
    data,
    error,
  };
};
