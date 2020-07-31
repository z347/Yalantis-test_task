export default function usersSort(users) {
    const months = {
        december: [],
        november: [],
        october: [],
        september: [],
        august: [],
        july: [],
        june: [],
        may: [],
        april: [],
        march: [],
        february: [],
        january: []
    };

    users.map((item) => {
        const date = item.dob;
        const month = date.slice(5, 7);

        switch (month) {
            case '12':
                months.december = [...months.december, item];
                break;
            case '11':
                months.november = [...months.november, item];
                break;
            case '10':
                months.october = [...months.october, item];
                break;
            case '09':
                months.september = [...months.september, item];
                break;
            case '08':
                months.august = [...months.august, item];
                break;
            case '07':
                months.july = [...months.july, item];
                break;
            case '06':
                months.june = [...months.june, item];
                break;
            case '05':
                months.may = [...months.may, item];
                break;
            case '04':
                months.april = [...months.april, item];
                break;
            case '03':
                months.march = [...months.march, item];
                break;
            case '02':
                months.february = [...months.february, item];
                break;
            case '01':
                months.january = [...months.january, item];
                break;
            default:
                break;
        }

        return months;
    });

    return months;
}
