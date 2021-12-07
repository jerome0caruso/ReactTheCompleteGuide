import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
    return (
        <div className='Chart'>
            {props.dataPoints.map(dp => <ChartBar key={dataPoint.label} value={dp.value} maxValue={null} label={db.label} />)}
        </div>
    )
}

export default Chart;