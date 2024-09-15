import { type ECharts, init as initEcharts } from 'echarts';
import { ref } from 'jinge';

export function App() {
  const chart = ref<HTMLDivElement>();
  let chartGraph: ECharts;
  const renderEcharts = () => {
    if (!chart.value) return;
    if (!chartGraph) {
      chartGraph = initEcharts(chart.value);
    }
    // use configuration item and data specified to show chart
    chartGraph.setOption({
      title: {
        text: 'ECharts entry example',
      },
      tooltip: {},
      legend: {
        data: ['Sales'],
      },
      xAxis: {
        data: ['shirt', 'cardign', 'chiffon shirt', 'pants', 'heels', 'socks'],
      },
      yAxis: {},
      series: [
        {
          name: 'Sales',
          type: 'bar',
          data: new Array(6).fill(0).map(() => (Math.random() * 10) | (0 + 4)),
        },
      ],
    });
  };
  return (
    <>
      <h2>jQuery & echarts integration</h2>
      <p>
        <div style='width: 500px; height: 300px;' ref={chart}></div>
      </p>
      <p>
        <button
          onClick={() => {
            renderEcharts();
          }}
        >
          Render Chart
        </button>
      </p>
    </>
  );
}
