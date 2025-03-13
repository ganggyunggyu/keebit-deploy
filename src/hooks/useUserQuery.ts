import {useQuery} from "@tanstack/react-query";
import {getUser} from "../apis/userApis.ts";

export const useUserQuery = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: getUser,
  });
};