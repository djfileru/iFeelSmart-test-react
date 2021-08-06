import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getChannels, getMovies, getPrograms } from '../../api/epg';
import { Channel, FetchStatus, Movie, Page, Program } from '../../types';
import { RootState } from '../../redux/index';

export const fetchChannels = createAsyncThunk('schedule/channels', getChannels);
export const fetchSchedules = createAsyncThunk('schedule/schedules', getPrograms);
export const fetchMovies = createAsyncThunk('schedule/movies', getMovies);

type ChannelsType = Page<'channels', Channel>;
type ProgramsType = Page<'contents', Program>;
type MoviesType = Page<'contents', Movie>;

interface ScheduleState {
    channels: ChannelsType;
    channelsStatus: FetchStatus;
    schedules: ProgramsType;
    schedulesStatus: FetchStatus;
    movies: MoviesType;
    moviesStatus: FetchStatus;
}

const initialState: ScheduleState = {
    channels: {} as ChannelsType,
    channelsStatus: FetchStatus.IDLE,
    schedules: {} as ProgramsType,
    schedulesStatus: FetchStatus.IDLE,
    movies: {} as MoviesType,
    moviesStatus: FetchStatus.IDLE,
};

export const schedule = createSlice({
    name: 'schedule',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchChannels.pending.type]: (state) => {
            state.channelsStatus = FetchStatus.LOADING;
        },
        [fetchChannels.fulfilled.type]: (state, { payload }) => {
            state.channels = payload;
            state.channelsStatus = FetchStatus.SUCCESS;
        },
        [fetchChannels.rejected.type]: (state) => {
            state.channels = {} as ChannelsType;
            state.channelsStatus = FetchStatus.ERROR;
        },
        [fetchSchedules.pending.type]: (state) => {
            state.schedulesStatus = FetchStatus.LOADING;
        },
        [fetchSchedules.fulfilled.type]: (state, { payload }) => {
            state.schedules = payload;
            state.schedulesStatus = FetchStatus.SUCCESS;
        },
        [fetchSchedules.rejected.type]: (state) => {
            state.schedules = {} as ProgramsType;
            state.schedulesStatus = FetchStatus.ERROR;
        },
        [fetchMovies.pending.type]: (state) => {
            state.moviesStatus = FetchStatus.LOADING;
        },
        [fetchMovies.fulfilled.type]: (state, { payload }) => {
            state.movies = payload;
            state.moviesStatus = FetchStatus.SUCCESS;
        },
        [fetchMovies.rejected.type]: (state) => {
            state.movies = {} as MoviesType;
            state.moviesStatus = FetchStatus.ERROR;
        },
    },
});

// export const {} = schedule.actions;

export const selectors = (
    state: RootState,
): RootState['schedule'] & {
    isChannelsIdle: boolean;
    isChannelsLoading: boolean;
    isChannelsSuccess: boolean;
    isChannelsError: boolean;
    isSchedulesIdle: boolean;
    isSchedulesLoading: boolean;
    isSchedulesSuccess: boolean;
    isSchedulesError: boolean;
    isMoviesIdle: boolean;
    isMoviesLoading: boolean;
    isMoviesSuccess: boolean;
    isMoviesError: boolean;
} => ({
    ...state.schedule,
    isChannelsIdle: state.schedule.channelsStatus === FetchStatus.IDLE,
    isChannelsLoading: state.schedule.channelsStatus === FetchStatus.LOADING,
    isChannelsSuccess: state.schedule.channelsStatus === FetchStatus.SUCCESS,
    isChannelsError: state.schedule.channelsStatus === FetchStatus.ERROR,
    isSchedulesIdle: state.schedule.schedulesStatus === FetchStatus.IDLE,
    isSchedulesLoading: state.schedule.schedulesStatus === FetchStatus.LOADING,
    isSchedulesSuccess: state.schedule.schedulesStatus === FetchStatus.SUCCESS,
    isSchedulesError: state.schedule.schedulesStatus === FetchStatus.ERROR,
    isMoviesIdle: state.schedule.moviesStatus === FetchStatus.IDLE,
    isMoviesLoading: state.schedule.moviesStatus === FetchStatus.LOADING,
    isMoviesSuccess: state.schedule.moviesStatus === FetchStatus.SUCCESS,
    isMoviesError: state.schedule.moviesStatus === FetchStatus.ERROR,
});

export default schedule.reducer;
