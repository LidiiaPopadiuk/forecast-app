import Chart from 'chart.js/auto';
import x from './HourlyForecast.module.scss'
import { useRef, useState, useEffect } from 'react';

export const HourlyForecast = () => {

    const chartRef = useRef(null)

    useEffect(() => {
        const chart = new Chart(chartRef.current, {
            type: 'line',
            data: {
                labels: ['11 pm', 'Oct 14', '1 am', '2 am', '3 am', '4 am', '5 am', '6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm'],
                datasets: [{
                    // label: 'Hourly forecast',
                    data: ['5℃', '10℃', '15℃', '20℃', '25℃'],
                    fill: false,
                    borderColor: '#ffb36c;',
                    tension: 0.1,
                    backgroundColor: '#e8e8e8',
                }]
            }
        })
        return () => chart.destroy()
    }, [])

    return (
        <div className={x.hour}>
            <div className='container'>
                <div className={x.hour__wrapper}>
                    <h2 className={x.hour__title}>Hourly forecast</h2>
                    <canvas ref={chartRef}></canvas></div>
            </div>
        </div>
    )
} 