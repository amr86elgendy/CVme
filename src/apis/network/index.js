import axios from 'apis/axios';
import { useQuery, useQueryClient, useMutation } from 'react-query';

// Get pending requests  ##################################
const fetchPendingRequests = async () => {
  const { data } = await axios.get('/peopleMayKnow');
  return data.response.data;
};

export const useGetPendingRequests = () => {
  return useQuery('pending-requests', fetchPendingRequests);
};

// Get people you may know  ##################################
const fetchPeopleYMK = async () => {
  const { data } = await axios.get('/peopleMayKnow');
  return data.response.data;
};

export const useGetPeopleYMK = () => {
  return useQuery('people-you-may-know', fetchPeopleYMK);
};

// Get people in same industry ##################################
const fetchPeopleSameIndustry = async () => {
  const { data } = await axios.get('/all_industryuser?page=1');
  return data.response.data;
};

export const useGetPeopleSameIndustry = () => {
  return useQuery('people-same-industry', fetchPeopleSameIndustry);
};

// Get recommended companies ##################################
const fetchRecommendedCompanies = async () => {
  const { data } = await axios.get('/all_industrycompany?page=1');
  return data.response.data;
};

export const useGetRecommendedComps = () => {
  return useQuery('recommended-companies', fetchRecommendedCompanies);
};