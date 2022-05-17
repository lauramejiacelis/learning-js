import {
    GET_ARTIST_LOADING,
    GET_ARTIST_SUCCESS,
    GET_ARTIST_FAILURE,
  } from './types';

export const getArtistSuccess = (artist) => ({
    type: GET_ARTIST_SUCCESS,
    payload: artist,
});

export const getArtistError = (error) => ({
    type: GET_ARTIST_FAILURE,
    payload: error,
});

export const getArtistLoading = () => ({
    type: GET_ARTIST_LOADING,
});