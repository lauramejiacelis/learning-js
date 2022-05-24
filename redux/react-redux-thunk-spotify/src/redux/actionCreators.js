import {
    GET_LOADING,
    GET_FAILURE,
    GET_ARTISTS_SUCCESS,
    GET_ALBUMS_SUCCESS,
} from './types';

export const getArtistsSuccess = (artists) => ({
    type: GET_ARTISTS_SUCCESS,
    payload: {artists}
});

export const getError = (error) => ({
    type: GET_FAILURE,
    payload: error,
});

export const getLoading = () => ({
    type: GET_LOADING,
});

export const getAlbumsSuccess = (albums) => ({
    type: GET_ALBUMS_SUCCESS,
    payload: {albums}
});