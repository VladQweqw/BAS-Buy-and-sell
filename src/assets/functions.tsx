export function getTime(time: number): string {
    const months = ['Dec', 'Jun', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov']
    const date = new Date(time);
    
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    
    const day = date.getDate();
    const month = months[date.getMonth()];
    
    
    let formatedTime = `${day} ${month} ${hours}:${minutes}`
    return formatedTime;
}

export function capitalize(str: string) {
    return str[0].toUpperCase() + str.slice(1);
}

export function titleToUrl(title: string) {
    return title.toLocaleLowerCase().trim().split(' ').join('-')
} 