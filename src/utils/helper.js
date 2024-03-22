import moment from "moment-timezone";

export const getTimezoneDateTime = (
  dateTime,
  format = "MM/DD/YYYY hh:mm A"
) => {
  const systemTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return moment.utc(dateTime).tz(systemTimeZone).format(format);
};

export const getTimezoneDate = (dateTime, format = "MM/DD/YYYY") => {
  const systemTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return moment.utc(dateTime).tz(systemTimeZone).format(format);
};
