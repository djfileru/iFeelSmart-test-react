import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './style.module.css';
import { useTranslation } from 'react-i18next';

interface Props {
    name: string;
    startDateTime: string;
    endDateTime: string;
    categories: string;
    src: string;
}

const Schedule: React.FC<Props> = ({ name, src, startDateTime, endDateTime, categories }: Props) => {
    const { t } = useTranslation();

    const formatStrDate = (str: string): [string, string, string] => {
        const dateObj = new Date(str);
        const [date, time] = dateObj.toLocaleDateString('en-UK', { hour: 'numeric', minute: 'numeric' }).split(', ');
        const weekday = dateObj.toLocaleDateString('en-UK', { weekday: 'long' });
        return [date, time, weekday];
    };

    const [startDate, startTime, startWeekday] = formatStrDate(startDateTime);
    const [endDate, endTime, endWeekday] = formatStrDate(endDateTime);

    return (
        <div className={styles.item}>
            <div className={styles.img}>
                <LazyLoadImage alt={name} src={src} effect="opacity" />
            </div>
            <div className={styles.content}>
                <div className={styles.name}>{name}</div>
                <div className={styles.time}>
                    <time dateTime={startTime}>
                        {startDate}
                        <span>
                            {t('from')} {startTime}
                        </span>
                        {startWeekday}
                    </time>
                    <time dateTime={endTime}>
                        {endDate}
                        <span>
                            {t('till')} {endTime}
                        </span>
                        {endWeekday}
                    </time>
                </div>
                <div className={styles.category}>
                    {categories.split(',').map((category, index) => (
                        // using index cause parsing from string, won't update
                        <span key={`${category}_${index}`}>{category}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Schedule;
