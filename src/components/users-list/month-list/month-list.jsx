import React from 'react';

import './month-list.css';

const MonthsList = (props) => {
    const months = [
        'january',
        'february',
        'march',
        'april',
        'may',
        'june',
        'july',
        'august',
        'september',
        'october',
        'november',
        'december'
    ];

    const Month = () =>
        months.map((item, index) => {
            const styles = [
                'list-group-item',
                'd-flex',
                'justify-content-between',
                'align-items-center',
                'big'
            ];

            const toArray = Object.entries(props.state);
            let count;
            let users;

            toArray.map((i) => {
                if (item === i[0]) {
                    count = i[1].length;
                    users = i[1];
                    return [count, users];
                }

                return null;
            });

            if (count <= 2) {
                styles.push('grey');
            } else if (count <= 6) {
                styles.push('blue');
            } else if (count <= 10) {
                styles.push('green');
            } else {
                styles.push('red');
            }

            return (
                <li
                    key={index}
                    className={styles.join(' ')}
                    data-toggle="tooltip"
                    data-html="true"
                    title={users.map((item) => {
                        return JSON.stringify(item);
                    })}
                >
                    {item}
                    <span className="badge badge-primary badge-pill">
                        {count}
                    </span>
                </li>
            );
        });

    return (
        <div className="jumbotron border-0">
            <h1 className="display-5 text-center">Months</h1>
            <ul className="list-group">
                <Month />
            </ul>
        </div>
    );
};

export default MonthsList;
