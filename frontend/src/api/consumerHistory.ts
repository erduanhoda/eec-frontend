import axios from "axios";
import { BaseUrl } from "../enums/BaseUrl";
import { BatteryInfo } from "../types/BatteryInfo";
import { Overview } from "../types/overview";
import { TotalEnergySoldWeekly } from "../types/totalEnergySold";
import { TotalConsumptionToday } from "../types/totalTodayConsumption";

export const getOverview = async (): Promise<Overview> => {
    const { data } = await axios.get(`${BaseUrl.DEVELOPMENT}/history`);
    return data;
};

export const getTodayConsumption = async (): Promise<TotalConsumptionToday[]> => {
  const { data } = await axios.get(`${BaseUrl.DEVELOPMENT}/history/consumption/today`);
  return data;
}

export const getTotalEnergySoldWeekly = async (): Promise<TotalEnergySoldWeekly[]> => {
  const { data } = await axios.get(`${BaseUrl.DEVELOPMENT}/history/energy/sold`);
  return data;
}

export const getBatteryInfo = async (): Promise<BatteryInfo> => {
  const { data } = await axios.get(`${BaseUrl.DEVELOPMENT}/history/battery/info`);
  return data;
}