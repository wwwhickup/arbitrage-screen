import { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import io from 'socket.io-client';
import { option } from "./schema";

const socket = io('http://localhost:8080');

type seriesType = {
  series: {
    [key: string]: number[]
  },
  label: string[]
}

function ChartView() {
  return (
    <div id="chart">
      <Chart options={option} series={[]} type="line" height={350} />
    </div>
  );
}

export default function LiveChart() {
  const [data, setData] = useState<seriesType>({series: {}, label: []});

  useEffect(() => {

    socket.on('updated_arbitrage_window_data', (data) => {
      console.log('data: ', data)
      setData((prevData: seriesType) => {
        console.log('prevData: ', prevData)
        data.forEach((item: any) => {
          const key = [item.token0, item.token1].sort().join('/')
          if(prevData.series[key]) {
            prevData.series[key] = [...prevData.series[key], item['profit']]
          } else {
            prevData.series[key] = [item['profit']]
          }
        });
        prevData.label = [...prevData.label, new Date().toString()]
        ApexCharts.exec(
          'realtime',
          'updateOptions',
          { labels: prevData.label }
        );
        ApexCharts.exec(
          'realtime',
          'updateSeries',
          Object.keys(prevData.series).map(key => ({name: `${key} ${prevData.series[key][prevData.series[key].length - 1]}`, data: prevData.series[key]}))
        )
        return prevData
      })
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('updated_arbitrage_window_data');
    };
  }, []);

  return (
    <div className="App">
      <ChartView />
    </div>
  );
}