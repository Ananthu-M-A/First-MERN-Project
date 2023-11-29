// import { apiASlice } from './apiASlice';
// const ADMIN_URL = '/api/admin';

// export const adminApiSlice = apiASlice.injectEndpoints({
//   endpoints: (builder) => ({
//     adminLogin: builder.mutation({
//       query: (data) => ({
//         url: `${ADMIN_URL}/adminLogin`,
//         method: 'POST',
//         body: data
//       }),
//     }),
//     adminSignup: builder.mutation({
//       query: (data) => ({
//         url: `${ADMIN_URL}/adminSignup`,
//         method: 'POST',
//         body: data
//       }),
//     }),
//     adminLogout: builder.mutation({
//       query: () => ({
//         url: `${ADMIN_URL}/adminLogout`,
//         method: 'POST',
//       }),
//     }),
//   }),
// });

// export const { useAdminLoginMutation, useAdminLogoutMutation, useAdminSignupMutation } = adminApiSlice;