import axios from "axios";

export async function alphaVantage(
  payload: string,
  dataPosition: number = -1
): Promise<any> {
  try {
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${payload}.SA&apikey=QUDT2RRX5P8KO4ZZ`;
    const req = await axios.get(url);

    if (req === undefined) {
      throw new Error("FII not founded");
    }

    const reqData = req.data;
    const timeSeries = Object.keys(reqData)[1];
    const timeSeriesData = reqData[timeSeries];

    const mostRecentValue = Object.keys(timeSeriesData)[0];
    const mostRecentValueData = timeSeriesData[mostRecentValue];

    const selectedValue = Object.keys(mostRecentValueData)[dataPosition];

    if (selectedValue === undefined) {
      return { ...mostRecentValueData };
    }

    const selectedValueData = mostRecentValueData[selectedValue];
    return parseFloat(selectedValueData || 0);
  } catch (err) {
    console.error(err);
  }
}
