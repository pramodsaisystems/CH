import moment from "moment-timezone";

export const getTimezoneDateTime = (
  dateTime,
  format = "MM/DD/YYYY hh:mm A"
) => {
  const systemTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return moment.utc(dateTime).tz(systemTimeZone).format(format);
};

// custom history object to allow navigation outside react components
export const history = {
  navigate: null,
  location: null,
};
