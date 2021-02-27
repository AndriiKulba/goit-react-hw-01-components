import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ title, stats }) => (
  <section className={s.statistics}>
    {title ? <h2 className={s.title}>{title}</h2> : false}
    <ul className={s.statlist}>
      {stats.map(stat => {
        return (
          <li
            key={stat.id}
            className={s.item}
            style={{ backgroundColor: rgb() }}
          >
            <span className={s.label}>.{stat.label}</span>
            <span className={s.percentage}>{stat.percentage + '%'}</span>
          </li>
        );
      })}
    </ul>
  </section>
);

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
const rgb = () => {
  const randomColor = (min, max) =>
    min + Math.floor(Math.random() * (max - min + 1));
  const r = randomColor(0, 255);
  const g = randomColor(0, 255);
  const b = randomColor(0, 255);
  const color = `rgb(${r},${g},${b})`;
  return color;
};

export default Statistics;
