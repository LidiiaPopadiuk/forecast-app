// import Chart from 'chart.js/auto';
// import x from './HourlyForecast.module.scss'
// import { useRef, useEffect, useState } from 'react';

// export const HourlyForecast = ({ hourlyWeather }) => {

//     const chartRef = useRef(null)
//     const chartInstance = useRef(null);


//     const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

//     useEffect(() => {
//         const onResize = () => {
//             setIsMobile(window.innerWidth < 768);
//         };

//         window.addEventListener('resize', onResize);
//         return () => window.removeEventListener('resize', onResize);
//     }, []);



//     useEffect(() => {
//         if (!hourlyWeather || hourlyWeather.length === 0) return null

//         if (chartInstance.current) {
//             chartInstance.current.destroy();
//         }

//         const next24hours = isMobile
//             ? hourlyWeather.slice(0, 3)
//             : hourlyWeather.slice(0, 8)

//         const labels = next24hours.map(item => {
//             const date = new Date(item.dt * 1000)
//             return date.getHours() + ":00"
//         })

//         const temps = next24hours.map(item => item.main.temp)

//         const rawMin = Math.min(...temps);
//         const rawMax = Math.max(...temps);

//         const padding = isMobile ? 1 : 2;

//         const yMin = Math.floor(rawMin) - padding;
//         const yMax = Math.ceil(rawMax) + padding;
//         // const rawMin = Math.min(...temps);
//         // const rawMax = Math.max(...temps);
//         // let STEP = isMobile ? 1 : 2;
//         // let yMin = Math.floor(rawMin / STEP) * STEP - STEP;
//         // let yMax = Math.ceil(rawMax / STEP) * STEP + STEP;
//         // let ticksCount = (yMax - yMin) / STEP;
//         // if (ticksCount > 6) {
//         //     STEP = 2;
//         // }
//         // if (ticksCount > 8) {
//         //     STEP = 3;
//         // }
//         // yMin = Math.floor(rawMin / STEP) * STEP - STEP;
//         // yMax = Math.ceil(rawMax / STEP) * STEP + STEP;


//         // const minTemp = Math.min(...temps);
//         // const maxTemp = Math.max(...temps);
//         // let yMin, yMax;
//         // if (isMobile) {
//         //     const center = Math.round((minTemp + maxTemp) / 2);
//         //     yMin = center - 2;
//         //     yMax = center + 2;
//         // } else {
//         //     yMin = Math.floor(minTemp) - 3;
//         //     yMax = Math.ceil(maxTemp) + 3;
//         // }

//         // const minTemp = Math.min(...temps);
//         // const maxTemp = Math.max(...temps);

//         // const padding = isMobile ? 1 : 3;

//         // const yMin = Math.floor(minTemp) - padding;
//         // const yMax = Math.ceil(maxTemp) + padding;

//         const chart = new Chart(chartRef.current, {
//             type: 'line',
//             data: {
//                 labels: labels,
//                 datasets: [{
//                     data: temps,
//                     borderColor: '#ff8c00',
//                     backgroundColor: '#ff8c00',
//                     tension: 0.3,
//                     pointRadius: isMobile ? 0 : 5,
//                     pointBackgroundColor: '#e27c00',
//                     pointBorderWidth: 0,
//                     borderWidth: isMobile ? 2 : 3,
//                     borderCapStyle: 'round',
//                     borderJoinStyle: 'round',
//                 }]
//             },
//             options: {
//                 responsive: true,
//                 maintainAspectRatio: false,
//                 animation: {
//                     y: {
//                         from: (ctx) => {
//                             if (ctx.type === 'data') {
//                                 return ctx.chart.scales.y.getPixelForValue(rawMin);
//                             }
//                         }
//                     },
//                     duration: 1200,
//                     easing: 'easeOutCubic',
//                 },
//                 layout: {
//                     padding: {
//                         top: 5,
//                         left: 5,
//                         right: 5,
//                         bottom: 20
//                     }
//                 },
//                 plugins: {
//                     legend: {
//                         display: false
//                     }
//                 },
//                 scales: {
//                     x: {
//                         position: 'top',
//                         grid: {
//                             color: '#b5b5b5',
//                             drawBorder: false
//                         },
//                         ticks: {
//                             padding: 15,
//                             color: '#000',
//                             font: {
//                                 weight: "500",
//                                 size: 14,
//                             }
//                         }
//                     },
//                     y: {
//                         min: Math.floor(rawMin) - 1,
//                         max: Math.ceil(rawMax) + 1,
//                         grace: '10%',

//                         beginAtZero: false,
//                         grid: {
//                             color: '#b5b5b5',
//                             drawBorder: false
//                         },
//                         ticks: {
//                             maxTicksLimit: isMobile ? 5 : 6,
//                             // stepSize: STEP,
//                             padding: 15,
//                             color: '#000',
//                             // maxTicksLimit: isMobile ? 4 : 8,
//                             callback: (value) => {
//                                 const rounded = Math.round(value);
//                                 return Number.isInteger(rounded) ? `${rounded}°C` : '';
//                             },
//                             font: {
//                                 size: 14,
//                                 weight: '500'
//                             }
//                         }
//                     }
//                 }
//             }

//         });


//         return () => chart.destroy()

//     }, [hourlyWeather, isMobile])

//     return (
//         <div className={x.hour}>
//             <div className='container'>
//                 <div className={x.hour__wrapper}>
//                     <h2 className={x.hour__title}>Hourly forecast</h2>
//                     <div className={x.hour__chart}>
//                         <canvas ref={chartRef}></canvas></div>
//                 </div>
//             </div>
//         </div>
//     )
// } 










import Chart from 'chart.js/auto';
import x from './HourlyForecast.module.scss'
import { useRef, useEffect, useState } from 'react';

export const HourlyForecast = ({ hourlyWeather }) => {
    const [screen, setScreen] = useState({
        isMobile: window.innerWidth < 768,
        isTablet: window.innerWidth >= 768 && window.innerWidth < 1200,
    });

    useEffect(() => {
        const onResize = () => {
            setScreen({
                isMobile: window.innerWidth < 768,
                isTablet: window.innerWidth >= 768 && window.innerWidth < 1200,
            });
        };

        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);
    // const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    // useEffect(() => {
    //     const onResize = () => {
    //         setIsMobile(window.innerWidth < 768);
    //     };

    //     window.addEventListener('resize', onResize);
    //     return () => window.removeEventListener('resize', onResize);
    // }, []);

    const chartRef = useRef(null)

    useEffect(() => {

        if (!hourlyWeather || hourlyWeather.length === 0) return null

        // if (!hourlyWeather) return
        const next24hours = screen.isMobile
            ? hourlyWeather.slice(0, 3)
            : screen.isTablet
                ? hourlyWeather.slice(0, 6)
                : hourlyWeather.slice(0, 8)

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
                maintainAspectRatio: false,
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
                            maxTicksLimit: screen.isMobile ? 5 : screen.isTablet ? 6 : 10,
                            padding: 15,
                            color: '#000',
                            font: {
                                weight: "500",
                                size: 14,
                            },
                            callback: function (value) {
                                return Number(value).toFixed(1) + '°C';
                            }
                        }
                    }
                }
            }

        });


        return () => chart.destroy()

    }, [hourlyWeather, screen])

    return (
        <div className={x.hour}>
            <div className='container'>
                <div className={x.hour__wrapper}>

                    <h2 className={x.hour__title}>Hourly forecast</h2>
                    <div className={x.hour__chart}>
                        <canvas ref={chartRef}></canvas></div>
                </div>
            </div>
        </div>
    )
} 