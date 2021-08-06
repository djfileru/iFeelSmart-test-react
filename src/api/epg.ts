import axios, { AxiosPromise } from 'axios';
import { BASE_URL } from '../../src/constants/api';
import { Page, Program, Channel, Movie } from '../../src/types';

// todo add request params
export const getChannels = (): AxiosPromise<Page<'channels', Channel>> =>
    axios
        .get(`${BASE_URL}/epg/channels`, {
            params: {
                limit: 8,
            },
        })
        .then((res) => res.data);

type ProgramsRequest = Partial<{
    device: number | number[];
    locale: string;
    page: number;
    limit: number;
    date: string;
    channel: number;
    dataset: string;
    order: string; // todo add keywords
}>;

export const getPrograms = ({ channel, limit, dataset, ...params }: ProgramsRequest = {}): AxiosPromise<
    Page<'contents', Program>
> =>
    axios
        .get(`${BASE_URL}/epg/programs`, {
            params: {
                ...params,
                channel,
                limit: limit ?? 8,
                dataset: dataset ?? 'flex',
            },
        })
        .then((res) => res.data);

type MoviesRequest = Partial<{
    device: number | number[];
    locale: string;
    page: number;
    limit: number;
    query: string;
    order: string; // todo add keywords
    population: string;
    no_empty: boolean;
    extended_data: string;
    dataset: string;
}>;

export const getMovies = ({ limit, dataset, ...params }: MoviesRequest = {}): AxiosPromise<Page<'contents', Movie>> =>
    axios
        .get(`${BASE_URL}/vod/contents?in_type=1`, {
            params: {
                ...params,
                limit: limit ?? 15,
                dataset: dataset ?? 'flex',
            },
        })
        .then((res) => res.data);
