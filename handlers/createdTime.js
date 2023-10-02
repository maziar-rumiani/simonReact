export const createdTime = () => {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      
      const createdDate = new Date();
      const month = months[createdDate.getMonth()];
      let day = createdDate.getDate();
      return " " + day + " " + month 
  }