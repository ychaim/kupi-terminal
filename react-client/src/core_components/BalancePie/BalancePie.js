import React from 'react'
import { observer } from 'mobx-react'
import Preloader from '../Preloader'
import ReactEcharts from 'echarts-for-react'

import BalanceStore from 'stores/BalanceStore'

@observer
class BalancePie extends React.Component {
  render() {
    const {type, stock} = this.props.data
    const key = `${type}--${stock}`
    if (
        BalanceStore.balance[key] === undefined
        || JSON.stringify(BalanceStore.balance[key]) === '{}'
        || JSON.stringify(BalanceStore.balance[key].data) === '[]'
      ) {
      return <Preloader />
    }
    var legendData = []
    var seriesData = []
    var selected = {}
    var totalUSD = BalanceStore.balance[key].totalUSD
    var otherUSD = 0
    BalanceStore.balance[key].data.forEach(function(coin){
      if (coin.totalUSD !== 0) {
        if ( (coin.totalUSD/totalUSD*100 ) > 5) {
          seriesData.push({
            name: coin.shortName,
            value: coin.totalUSD.toFixed(8)
          })
          legendData.push(coin.shortName)
          selected[coin.shortName] = true
        } else {
          otherUSD += coin.totalUSD
        }
      }
    })
    if (otherUSD !==0) {
      seriesData.push({
        name: 'Other',
        value: otherUSD.toFixed(8)
      })
    }
    selected['Other'] = true
    legendData.push('Other')
    var optionData = {
      legendData,
      seriesData,
      selected
    }
    var option = {
      tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
          type: 'scroll',
          orient: 'vertical',
          right: 10,
          top: 20,
          bottom: 20,
          data: optionData.legendData,
          selected: optionData.selected
      },
      series : [
          {
              name: 'balance',
              type: 'pie',
              radius : '55%',
              center: ['40%', '50%'],
              data: optionData.seriesData,
              itemStyle: {
                  emphasis: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
              }
          }
      ]
    }
    return (
      <ReactEcharts
        option={option}
        style={{width: '100%', height: '100%', position: 'absolute'}}
        className='react_for_echarts'
        theme={'light'}
      />
    )
  }
  componentDidMount() {
    BalanceStore.count(1, this.props.data)
    // TODO: fix thix hack
    setTimeout(()=>{
      this.forceUpdate()
    }, 2000)
  }
  componentDidUpdate() {
    BalanceStore.count(1, this.props.data)
  }
  componentWillUnmount() {
    BalanceStore.count(-1, this.props.data)
  }
  componentWillUpdate() {
    BalanceStore.count(-1, this.props.data)
  }
}

export default BalancePie
