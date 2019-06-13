
import React from 'react';
import styles from './../../../sass/styles.scss';

export default function Person(props) {
  const { name, nikcname, lvl, online, Afk, Available_until, Party_name, Party_leader_name, Impact_points, Realized_points, Priority } = props.data;
  return (
    <div className={styles["person"]}>
      { Object.keys(props.data).map(key => <div key={key} className={styles["person__row"]}>{props.data[key]}</div>) }
      {/* {name}
      {nikcname}
      {lvl}
      {online}
      {Afk}
      {Available_until}
      {Party_name}
      {Party_leader_name}
      {Impact_points}
      {Realized_points}
      {Priority} */}
    </div>
  );
}
