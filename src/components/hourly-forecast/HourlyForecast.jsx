import Chart from 'chart.js/auto';
import x from './HourlyForecast.module.scss'
import { useRef, useEffect } from 'react';

export const HourlyForecast = ({ hourlyWeather }) => {

    const chartRef = useRef(null)

    useEffect(() => {
        
        if (!hourlyWeather || hourlyWeather.length === 0) return null

        // if (!hourlyWeather) return

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
                    backgroundColor: '#ff8c00',
                    tension: 0.9,
                    pointRadius: 5,
                    pointBackgroundColor: '#e27c00',
                    pointBorderWidth: 0,
                    borderWidth: 3,
                    borderCapStyle: 'round',
                    borderJoinStyle: 'round',
                }]
            },
            options: {
                responsive: true,
                layout: {
                    padding: {
                        top: 5,
                        left: 5,
                        right: 5,
                        bottom: 20
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        position: 'top',
                        grid: {
                            color: '#b5b5b5',
                            drawBorder: false
                        },
                        ticks: {
                            padding: 15,
                            color: '#000',
                            font: {
                                weight: "500",
                                size: 14,
                            }
                        }
                    },
                    y: {
                        beginAtZero: false,
                        grid: {
                            color: '#b5b5b5',
                            drawBorder: false
                        },
                        ticks: {
                            padding: 15,
                            color: '#000',
                            font: {
                                weight: "500",
                                size: 14,
                            },
                            callback: function (value) {
                                return value + '°C';
                            }
                        }
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