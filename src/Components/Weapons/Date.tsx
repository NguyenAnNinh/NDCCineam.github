export const DateArg = (input: string): string => {
    let time = new Date(input);
    let dd = time.getDate().toString();
    let mm = (time.getMonth() + 1).toString();
    let yyyy = time.getFullYear().toString();

    if (dd.length < 2) dd = '0' + dd;
    if (mm.length < 2) mm = '0' + mm;

    return `${dd}/${mm}/${yyyy}`
}

export const ticketTime = (time:string):string => {
    const dd = time.slice(0, 2);
    const mm = time.slice(3, 5);
    const yyyy = time.slice(6);
    return `${yyyy}-${mm}-${dd}`
}