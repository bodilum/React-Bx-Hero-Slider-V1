// function to shorten text, add elipsis if too long, and capitalize first character
export const shortenTxt = (text, len = 10) => {

    if(!text) return;

    text = text.trim();

    let shortenedTxt = ( text.length > len) ? `${text.slice(0, len)}...` : text;
    
    if( shortenedTxt.length > 0 ) {
        // capitalize the first character
        shortenedTxt = shortenedTxt.charAt(0).toUpperCase() + shortenedTxt.slice(1);
    }

    return shortenedTxt;

}