export default function normalizeTime (date) {
    date = new Date(date);
    const options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };

    const time = date.toLocaleString('en-US', options);

    return `${String(date).split(' ').splice(1, 3).join(' ')} ${time}`;
}
