import {
  Component,
  bootstrap
} from 'jinge';
import $ from 'jquery';
import echarts from 'echarts';
import _tpl from './app.html';

class App extends Component {
  static get template() {
    return _tpl;
  }
  constructor(args) {
    super(args);
    this.btnHandler = this.onButtonClick.bind(this);
    this.chart = null;
  }
  afterRender() {
    $(this.getChild('btn')).on('click', this.btnHandler);
  }
  beforeDestroy() {
    $(this.getChild('btn')).off('click', this.btnHandler);
    this.chart && this.chart.dispose();
  }
  onButtonClick($evt) {
    console.log($evt);
    if (!this.chart) {
      this.chart = echarts.init(this.getChild('chart'));
    }
    // use configuration item and data specified to show chart
    this.chart.setOption({
      title: {
        text: 'ECharts entry example'
      },
      tooltip: {},
      legend: {
        data: ['Sales']
      },
      xAxis: {
        data: ["shirt", "cardign", "chiffon shirt", "pants", "heels", "socks"]
      },
      yAxis: {},
      series: [{
        name: 'Sales',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    });
  }
}

bootstrap(App, document.getElementById('root-app'));
