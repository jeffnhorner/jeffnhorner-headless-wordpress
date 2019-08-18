export default function truncateStringByWordCount (string, wordCount = 10) {
    return string.split(' ').splice(0, wordCount).join(' ') + '...';
}
