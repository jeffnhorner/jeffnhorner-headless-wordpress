export default function normalizeTime (date) {
    const options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    };

    date = new Date(date);

    const time = date.toLocaleString('en-US', options);

    return `${String(date).split(' ').splice(1, 3).join(' ')} ${time}`;
}
