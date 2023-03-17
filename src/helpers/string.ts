import moment from 'moment';

export const getPostParams = (postUrl: string) => {
    const decoded = decodeURIComponent(postUrl);
    const postId = decoded.slice(decoded.length - 24, decoded.length);
    const postTitle = decoded.slice(0, decoded.indexOf(postId) - 1);
    return { postTitle, postId };
};

export const capitalizeFirstLetter = (str: string) => {
    return (str).charAt(0).toUpperCase() + (str).slice(1);
};
export const unCapitalizeFirstLetter = (str: string) => {
    return (str).charAt(0).toLowerCase() + (str).slice(1);
};

export const createPostUrl = (postTitle: string, postId: string) => {
    return encodeURIComponent(`${postTitle}-${postId}`);
};

export const formatDate = (timestamp: string | number | Date, momented = true) => {
    const date = new Date(timestamp).toLocaleDateString('en-us', {
        month: 'short',
        day: 'numeric',
        year: momented ? undefined : '2-digit',
    });
    return momented ? `${date} (${moment(timestamp).startOf('seconds').fromNow()})` : date;
};
