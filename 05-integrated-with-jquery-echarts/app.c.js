import {
  Component
} from 'jinge';
import $ from 'jquery';
import echarts from 'echarts';
import _tpl from './app.c.html';

export default class App extends Component {
  static get template() {
    return _tpl;
  }
  constructor(args) {
    super(args);
    this._btnHandler = this.onButtonClick.bind(this);
    this._chart = null;
  }
  __afterRender() {
    $(this.__getRef('btn')).on('click', this._btnHandler);
  }
  __beforeDestroy() {
    $(this.__getRef('btn')).off('click', this._btnHandler);
    this._chart && this._chart.dispose();
  }
  onButtonClick($evt) {
    console.log($evt);
    if (!this._chart) {
      this._chart = echarts.init(this.__getRef('chart'));
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
        data: (new Array(6)).fill(0).map(() => Math.random() * 10 | 0 + 4)
      }]
    });
  }
}
