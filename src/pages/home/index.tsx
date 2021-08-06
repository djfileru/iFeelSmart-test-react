import React from 'react';
import styles from './style.module.css';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchChannels, fetchMovies, fetchSchedules, selectors } from '../../redux/schedule';
import { AppDispatch } from '../../redux';
import Schedule from '../../containers/schedule';
import Movie from '../../containers/movie';
import { Channel, Page } from '../../types';
import { emptyList } from '../../helpers';

const Home: React.FC = () => {
    const { t } = useTranslation();

    const dispatch: AppDispatch = useAppDispatch();

    const {
        schedules,
        movies,
        isChannelsLoading,
        isSchedulesLoading,
        isMoviesLoading,
        isChannelsSuccess,
        isSchedulesSuccess,
        isMoviesSuccess,
    } = useAppSelector(selectors);

    React.useEffect(() => {
        (async () => {
            const { payload } = await dispatch(fetchChannels());
            await Promise.all([
                await dispatch(
                    fetchSchedules({
                        channel: (payload as Page<'channels', Channel>).channels?.[6]?.id,
                    }),
                ),
                await dispatch(fetchMovies({})),
            ]);
        })();
    }, []);

    console.log(movies);

    const scheduleList = schedules?.contents ?? [];
    const movieList = movies?.contents ?? [];

    return (
        <main className={styles.page}>
            <section className={styles.top}>
                <div className={styles.welcome}>
                    <h1>
                        <span>John Doe,</span>
                        {t('welcomeBack')}
                    </h1>
                </div>
                {/* todo add menu component */}
                <button type="button" className={styles.menu} />
            </section>
            <div className={styles.content}>
                <section className={styles.section}>
                    <div className={styles.heading}>
                        <h2>{t('schedule')}</h2>
                        {/* todo replace with Link */}
                        <button type="button" className={styles.seeAll}>
                            {t('seeAll')}
                        </button>
                    </div>
                    {isChannelsLoading || isSchedulesLoading ? (
                        <div className={styles.schedules}>
                            {emptyList(4).map((item) => (
                                <div key={`schedule_skeleton_${item}`} className={styles.item}>
                                    <div className={styles.skeleton} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className={styles.schedules}>
                            {/* todo add slider, tmp solution */}
                            {scheduleList.map((item) => (
                                <div key={item.id} className={styles.item}>
                                    <Schedule
                                        name={item.title}
                                        src={item.pictures?.thumbnails?.[0]}
                                        categories={item.category}
                                        startDateTime={item.broadcast_datetime}
                                        endDateTime={item.broadcast_end_datetime}
                                    />
                                </div>
                            ))}
                            {isChannelsSuccess && isSchedulesSuccess && scheduleList.length === 0 && (
                                <div className={styles.empty}>{t('empty')}</div>
                            )}
                        </div>
                    )}
                </section>
                <section className={styles.section}>
                    <div className={styles.heading}>
                        <h2>{t('movies')}</h2>
                        {/* todo replace with Link */}
                        <button type="button" className={styles.seeAll}>
                            {t('seeAll')}
                        </button>
                    </div>
                    {isMoviesLoading ? (
                        <div className={styles.movies}>
                            {emptyList(15).map((item) => (
                                <div key={`schedule_skeleton_${item}`} className={styles.item}>
                                    <div className={styles.skeleton} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className={styles.movies}>
                            {movieList.map((item) => (
                                <div key={item.id} className={styles.item}>
                                    <Movie
                                        name={item.title}
                                        desc={item.short_summary}
                                        src={item.pictures?.thumbnails?.[0]}
                                        year={item?.year > 0 ? item.year : undefined}
                                    />
                                </div>
                            ))}
                            {isMoviesSuccess && movieList.length === 0 && (
                                <div className={styles.empty}>{t('empty')}</div>
                            )}
                        </div>
                    )}
                </section>
            </div>
        </main>
    );
};

export default Home;
