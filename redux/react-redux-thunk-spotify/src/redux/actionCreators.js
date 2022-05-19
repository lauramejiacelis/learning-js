import {
    GET_ARTISTS_LOADING,
    GET_ARTISTS_SUCCESS,
    GET_ARTISTS_FAILURE,
} from './types';

export const getArtistsSuccess = (artists, albums) => ({
    type: GET_ARTISTS_SUCCESS,
    payload: {artists, albums}
});

export const getArtistsError = (error) => ({
    type: GET_ARTISTS_FAILURE,
    payload: error,
});

export const getArtistsLoading = () => ({
    type: GET_ARTISTS_LOADING,
});