import axios from 'apis/axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';

// Get pending requests  ##################################
const fetchPendingRequests = async ({ queryKey }) => {
  const { limit, page } = queryKey[1];
  const { data } = await axios.get(
    `/getfriendrequest?page=${page}&limit=${limit}`
  );
  return data.response.data;
};

export const useGetPendingRequests = (props) => {
  const queries = { limit: props?.limit || '', page: props?.page || 1 };
  return useQuery(['pending-requests', queries], fetchPendingRequests);
};

// Get people you may know  ##################################
const fetchPeopleYMK = async ({ queryKey }) => {
  const { limit, page } = queryKey[1];
  const { data } = await axios.get(`/peopleMayKnow?page=${page}&limit=${limit}`);
  return data.response.data;
};

export const useGetPeopleYMK = (props) => {
  const queries = { limit: props?.limit || '', page: props?.page || 1 };
  return useQuery(['people-you-may-know', queries], fetchPeopleYMK);
};

// Get people in same industry ##################################
const fetchPeopleSameIndustry = async ({ queryKey }) => {
  const { limit, page } = queryKey[1];
  const { data } = await axios.get(`/all_industryuser?page=${page}&limit=${limit}`);
  return data.response.data;
};

export const useGetPeopleSameIndustry = (props) => {
  const queries = { limit: props?.limit || '', page: props?.page || 1 };
  return useQuery(['people-same-industry', queries], fetchPeopleSameIndustry);
};

// Get recommended companies ##################################
const fetchRecommendedCompanies = async ({ queryKey }) => {
  const { limit, page } = queryKey[1];
  const { data } = await axios.get(`/all_industrycompany?page=${page}&limit=${limit}`);
  return data.response.data;
};

export const useGetRecommendedComps = (props) => {
  const queries = { limit: props?.limit || '', page: props?.page || 1 };
  return useQuery(['recommended-companies', queries], fetchRecommendedCompanies);
};

// Get all friends network ##################################
const fetchAllMyFriends = async () => {
  const { data } = await axios.get('/friends?page=1');
  return data.response.data;
};

export const useGetAllMyFriends = () => {
  return useQuery('all-my-friends', fetchAllMyFriends);
};

// Get all companies i follow ##################################
const fetchCompaniesIFollow = async () => {
  const { data } = await axios.get('/allfollowing_organizations?page=1');
  return data.response.data;
};

export const useGetCompaniesIFollow = () => {
  return useQuery('companies-i-follow', fetchCompaniesIFollow);
};

// ######################################################################

// FRIEND REQUEST ACTION
const friendReqAction = ({ id, status }) => {
  return axios.post('/friend_request', { id, status });
};

export const useFriendReqAction = () => {
  const queryClient = useQueryClient();
  return useMutation(friendReqAction, {
    onSuccess: () => {
      queryClient.invalidateQueries('pending-requests');
    }
  });
}