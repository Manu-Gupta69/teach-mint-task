export const getPostCollection = (posts) => {
  return posts.reduce((acc, item) => {
    if (!acc.hasOwnProperty(item.userId)) {
      acc[item.userId] = [];
    }
    acc[item.userId].push(item);
    return acc;
  }, {});
};

export const extractTime = (isoString) => {
  const parts = isoString.split("T");
  if (parts.length === 2) {
    const timeString = parts[1].split(".")[0];
    const actualTime = timeString.split(":").map((item) => parseInt(item));
    return { hour: actualTime[0], min: actualTime[1], sec: actualTime[2] };
  } else {
    return { hour: 0, min: 0, sec: 0 };
  }
  // const date = new Date(countryTimeDetails.unixtime * 1000); // Convert Unix timestamp to milliseconds
  // const options = {
  //   timeZone: countryTimeDetails.timezone,
  //   hour: "2-digit",
  //   minute: "2-digit",
  //   second: "2-digit",
  //   hour12: false,
  // };
  // const time = new Intl.DateTimeFormat("en-US", options).format(date);
  // console.log(time);
  // const actualTime = time.split(":").map((item) => parseInt(item));
  // return { hour: actualTime[0], min: actualTime[1], sec: actualTime[2] };
};
