export const parseText = (text: string, slices: [number, number]) => {
    const paragraphText1 = text.slice(0, slices[0]);
    const spanText = text.slice(slices[0], slices[1] + 1);
    const paragraphText2 = text.slice(slices[1] + 1);

    return `<p>${paragraphText1}<span>${spanText}</span>${paragraphText2}</p>`;
}