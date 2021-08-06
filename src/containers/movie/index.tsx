import React from 'react';
import styles from './style.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface Props {
    name: string;
    desc: string;
    src: string;
    year?: number;
}

const Movie: React.FC<Props> = ({ name, desc, src, year }: Props) => {
    return (
        <div className={styles.item}>
            <div className={styles.img}>
                <LazyLoadImage alt={name} src={src} effect="opacity" />
            </div>
            <div className={styles.content}>
                <div className={styles.year}>{year}</div>
                <div className={styles.name}>{name}</div>
                <div className={styles.desc}>{desc}</div>
            </div>
        </div>
    );
};

export default Movie;
