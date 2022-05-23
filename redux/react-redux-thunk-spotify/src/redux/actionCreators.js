import {
    GET_ARTISTS_LOADING,
    GET_ARTISTS_SUCCESS,
    GET_ARTISTS_FAILURE,
    GET_ALBUMS_SUCCESS,
} from './types';

export const getArtistsSuccess = (artists) => ({
    type: GET_ARTISTS_SUCCESS,
    payload: {artists}
});

export const getArtistsError = (error) => ({
    type: GET_ARTISTS_FAILURE,
    payload: error,
});

export const getArtistsLoading = () => ({
    type: GET_ARTISTS_LOADING,
});

export const getAlbumsSuccess = (albums) => ({
    type: GET_ALBUMS_SUCCESS,
    payload: {albums}
});