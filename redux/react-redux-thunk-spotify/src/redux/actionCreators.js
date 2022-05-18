import {
    GET_ARTISTS_LOADING,
    GET_ARTISTS_SUCCESS,
    GET_ARTISTS_FAILURE,
} from './types';

export const getArtistsSuccess = (artist) => ({
    type: GET_ARTISTS_SUCCESS,
    payload: artist,
});

export const getArtistsError = (error) => ({
    type: GET_ARTISTS_FAILURE,
    payload: error,
});

export const getArtistsLoading = () => ({
    type: GET_ARTISTS_LOADING,
});