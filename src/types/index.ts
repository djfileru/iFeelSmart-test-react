export enum FetchStatus {
    IDLE = 'IDLE',
    LOADING = 'LOADING',
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
}

export type Page<T extends string, K> = {
    pages: {
        current: number;
        total: number;
    };
    api_version: string;
} & { [category in T]: K[] };

export interface Channel {
    category: string;
    dataset: string;
    description: string;
    id: number;
    metatype: string;
    name: string;
    number: number;
    pictures: {
        logos: string[];
    };
    platform_id: string;
    rating_id: string;
    rights: {
        recordable: boolean;
        shareable: boolean;
        start_over: boolean;
    };
    subscription_id: string | null;
    type: number;
}

export interface Program {
    id: number;
    platform_id: string;
    channel_id: number;
    runtime: number;
    category: string;
    rights: {
        timeshift: {
            start_over: boolean;
            watch_again: boolean;
        };
        record: {
            capable: boolean;
        };
    };
    description: string;
    title: string;
    rating_id: string;
    broadcast_datetime: string;
    broadcast_end_datetime: string;
    playbacks: [
        {
            video_format: number;
            audio_format: number;
            uri: string;
            type: number;
        },
    ];
    short_description: string;
    pictures: {
        backdrops?: string[];
        thumbnails: string[];
    };
    source_id: string;
}

export interface Movie {
    availability: {
        start: string;
        end: string;
    };
    broadcast_datetime: string;
    cast: string[];
    content_provider: string;
    country: string;
    dataset: string;
    device_type: number;
    directors: string[];
    eligibility: null;
    genre: string;
    id: number;
    locale: string;
    metatype: string;
    nodes: {
        id: number;
        position: number;
    }[];
    pictures: {
        thumbnails: string[];
        backdrops: string[];
    };
    platform_id: string;
    producers: string[];
    purchase: {
        type: number;
    };
    rating_id: string;
    runtime: number;
    short_summary: string;
    subscription_id: number[];
    summary: string;
    title: string;
    trending_position: {
        top_sale: number;
        most_watched: number;
    };
    type: number;
    vodtype: number;
    year: number;
}
