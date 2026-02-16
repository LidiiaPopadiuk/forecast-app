import Chart from 'chart.js/auto';
import x from './HourlyForecast.module.scss'
import { useRef, useState, useEffect } from 'react';

export const HourlyForecast = ({ hourlyWeather }) => {

    const chartRef = useRef(null)

    useEffect(() => {

        if (!hourlyWeather) return

        const next24hours = hourlyWeather.slice(0, 8)

        const labels = next24hours.map(item => {
            const date = new Date(item.dt * 1000)
            return date.getHours() + ":00"
        })

        const temps = next24hours.map(item => item.main.temp)

        const chart = new Chart(chartRef.current, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    data: temps,
                    borderColor: '#ff8c00',
                    backgroundColor: '#c36c01',
                    tension: 0.4,
                    pointRadius: 4
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        position: 'top'
                    },
                    y: {
                        beginAtZero: false
                    }
                }
            }
        });


        return () => chart.destroy()

    }, [hourlyWeather])

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