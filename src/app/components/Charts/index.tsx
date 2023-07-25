import React from 'react';
import {ProgressChart} from 'react-native-chart-kit';

export default function Charts() {
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
    // labels: ['Swim', 'Bike', 'Run'],
    data: [0.9, 0.3, 0.8],
  };

  return (
    <ProgressChart
      data={data}
      width={140}
      height={140}
      strokeWidth={4}
      radius={12}
      chartConfig={chartConfig}
      hideLegend={true}
    />
  );
}
