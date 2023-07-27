import React from 'react';
import {Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

export default function LineCharts() {
  const chartConfig = {
    backgroundGradientFrom: '#272a34',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#272a34',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2,
      },
    ],
    legend: ['Rainy Days'],
  };

  const screenWidth = Dimensions.get('window').width;

  return (
    <LineChart
      data={data}
      width={330}
      height={256}
      verticalLabelRotation={30}
      chartConfig={chartConfig}
      bezier
    />
  );
}
