import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Svg, Path, Circle } from 'react-native-svg';

interface PieChartProps {
  width: number;
  height: number;
  victoryPercentage: number; // 승리 비율 (0에서 1 사이의 값)
}

const PieChart: React.FC<PieChartProps> = ({ width, height, victoryPercentage }) => {
  const radius = Math.min(width, height) / 2;
  const innerRadius = radius / 1.5; // 중앙의 비워진 원의 반지름
  const gap = 0.05; // 각 세그먼트 사이의 간격을 라디안으로 표현

  // 승리 세그먼트의 시작과 끝 각도
  const victoryStartAngle = gap / 2;
  const victoryEndAngle = victoryPercentage * 2 * Math.PI - gap / 2;

  // 패배 세그먼트의 시작과 끝 각도
  const defeatStartAngle = victoryPercentage * 2 * Math.PI + gap / 2;
  const defeatEndAngle = 2 * Math.PI - gap / 2;

  // 원형 세그먼트 경로 생성 함수
  const describeArc = (
    x: number,
    y: number,
    radius: number,
    innerRadius: number,
    startAngle: number,
    endAngle: number,
  ) => {
    const startOuter = polarToCartesian(x, y, radius, endAngle);
    const endOuter = polarToCartesian(x, y, radius, startAngle);
    const startInner = polarToCartesian(x, y, innerRadius, endAngle);
    const endInner = polarToCartesian(x, y, innerRadius, startAngle);
    const largeArcFlag = endAngle - startAngle <= Math.PI ? '0' : '1';

    return [
      'M',
      startOuter.x,
      startOuter.y,
      'A',
      radius,
      radius,
      0,
      largeArcFlag,
      0,
      endOuter.x,
      endOuter.y,
      'L',
      endInner.x,
      endInner.y,
      'A',
      innerRadius,
      innerRadius,
      0,
      largeArcFlag,
      1,
      startInner.x,
      startInner.y,
      'L',
      startOuter.x,
      startOuter.y,
      'Z',
    ].join(' ');
  };

  // 극좌표계를 카테시안 좌표계로 변환하는 함수
  const polarToCartesian = (centerX: number, centerY: number, radius: number, angle: number) => {
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    };
  };

  return (
    <View style={styles.container}>
      <Svg width={width} height={height}>
        <Circle
          cx={width / 2}
          cy={height / 2}
          r={radius}
          fill="transparent"
          stroke="#ccc"
          strokeWidth={0.5}
        />
        <Path
          d={describeArc(
            width / 2,
            height / 2,
            radius,
            innerRadius,
            victoryStartAngle,
            victoryEndAngle,
          )}
          fill="#1abc9c"
        />
        <Path
          d={describeArc(
            width / 2,
            height / 2,
            radius,
            innerRadius,
            defeatStartAngle,
            defeatEndAngle,
          )}
          fill="#3498db"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PieChart;
