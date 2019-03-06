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
    this._btnHandler = this.onButtonClick.bind(this);
    this._chart = null;
  }
  afterRender() {
    $(this.getChild('btn')).on('click', this._btnHandler);
  }
  beforeDestroy() {
    $(this.getChild('btn')).off('click', this._btnHandler);
    this._chart && this._chart.dispose();
  }
  onButtonClick($evt) {
    console.log($evt);
    if (!this._chart) {
      this._chart = echarts.init(this.getChild('chart'));
    }
    // use configuration item and data specified to show chart
    this._chart.setOption({
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
