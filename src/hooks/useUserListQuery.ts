import { useQuery } from '@tanstack/react-query';
import { getUserList } from '../apis/userApis.ts';

export const useUserListQuery = () => {
  return useQuery({
    queryKey: ['user-list'],
    queryFn: getUserList,
  });
};
