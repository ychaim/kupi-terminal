module.exports = [
  {
    name: 'balance-pie',
    component: 'core_components/BalancePie/BalancePie.js',
    settings: 'core_components/BalancePie/Settings.js',
    settingsWidth: '300px',
    img: 'core_components/BalancePie/BalancePie.png',
    header: 'Total balance',
    customHeader: '',
    description: 'Pie chart view',
    author: '#core',
    authorLink: 'https://github.com/kupi-network/kupi-terminal',
    source: 'https://github.com/kupi-network/kupi-terminal/blob/master/react-client/src/core_components/BalancePie/BalancePie.js',
    data: {stock: 'TOTAL', stockTemp: 'BINANCE', total: true, type: 'now'}
  },
  {
    name: 'balance-pie',
    component: 'core_components/BalancePie/BalancePie.js',
    settings: 'core_components/BalancePie/Settings.js',
    settingsWidth: '300px',
    img: 'core_components/BalancePie/BalancePie.png',
    header: 'Balance',
    customHeader: '',
    description: 'Pie chart view',
    author: '#core',
    authorLink: 'https://github.com/kupi-network/kupi-terminal',
    source: 'https://github.com/kupi-network/kupi-terminal/blob/master/react-client/src/core_components/BalancePie/BalancePie.js',
    data: {stock: 'BINANCE', stockTemp: 'BINANCE', total: false, type: 'now'}
  }
]
