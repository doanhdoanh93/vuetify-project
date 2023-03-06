import dayjs from "dayjs";

export class DateUtil {
  public static formatToYearmonth = (date: Date, iso8601 = false): string => {
    let template = "YYYY/MM";
    if (iso8601) {
      template = "YYYY---MM";
    }
    return dayjs(date).format(template);
  };

  public static formatToDate = (date: Date, iso8601 = false): string => {
    let template = "YYYY/MM/DD";
    if (iso8601) {
      template = "YYYY-MM-DD";
    }
    return dayjs(date).format(template);
  };
}
