export function formatDate(inputDate: string | Date): string {
    const date = new Date(inputDate);
    
    const daysOfWeek: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthsOfYear: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
    const dayOfWeek: string = daysOfWeek[date.getDay()];
    const month: string = monthsOfYear[date.getMonth()];
    const day: number = date.getDate();
  
    let daySuffix: string;
    if (day === 1 || day === 21 || day === 31) {
        daySuffix = "st";
    } else if (day === 2 || day === 22) {
        daySuffix = "nd";
    } else if (day === 3 || day === 23) {
        daySuffix = "rd";
    } else {
        daySuffix = "th";
    }
  
    return `${dayOfWeek}, ${month} ${day}${daySuffix}`;
}

export function formatTime(timeString: string | undefined): string | undefined {
    if (timeString) {
        const [hour] = timeString.split(":").map(Number);
        let period: string = "am";
        let formattedHour: number = hour;
      
        if (hour >= 12) {
            period = "pm";
            formattedHour = hour === 12 ? 12 : hour - 12;
        } else if (hour === 0) {
            formattedHour = 12;
        }
      
        return `${formattedHour}${period}`;
    }
    return undefined;
}
