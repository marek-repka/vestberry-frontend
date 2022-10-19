import ReactECharts from "echarts-for-react";
import { COLOR_PALETTE } from "./colorPalette";

interface Props {
  chartData: any[];
  nameField: string;
  valueField: string;
}

export const CircleChart = ({ chartData, nameField, valueField }: Props) => (
  <ReactECharts
    style={{ height: "274px", width: "100%" }}
    notMerge
    option={{
      grid: {
        top: 0,
        left: 0,
        right: 0,
      },
      color: COLOR_PALETTE,
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "center",
        left: 340,
        height: 150,
        orient: "vertical",
        icon: "circle",
        itemHeight: 15,
        itemWidth: 15,
        itemGap: 15,
        textStyle: {
          fontWeight: 700,
          color: "white",
          fontSize: 14,
          lineHeight: 18,
          overflow: "truncate",
          padding: [0, 40, 0, 5],
          width: 150,
        },
      },
      series: [
        {
          name: "Companies",
          type: "pie",
          radius: ["64%", "90%"],
          width: 246,
          tooltip: {
            formatter({ name, value }: any) {
              return `<div>${name}: ${value} EUR</div>`;
            },
          },
          label: {
            show: false,
          },
          emphasis: {
            label: {
              show: false,
            },
          },
          labelLine: {
            show: false,
          },
          data: chartData.map((item) => ({
            value: Number(item[valueField]),
            name: item[nameField],
          })),
        },
      ],
    }}
  />
);
