export function formatISODate(isoDate: string): string {
    const date = new Date(isoDate);
  
    // Options for formatting the date
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    };
  
    const formattedDate = date.toLocaleDateString("en-US", options);
  
    return formattedDate;
  }