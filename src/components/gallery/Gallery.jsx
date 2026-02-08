import x from './Gallery.module.scss'
import React from "react";
import Slider from "react-slick";
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"
export const Gallery = ({ natureInfo }) => {
    return (
        <div className={x.gall}>
            <div className="container">
                <h2 className={x.gall__title}>Beautiful nature</h2>
                {/* <Splide
                    options={{
                        type: "loop",
                        perPage: 3,
                        focus: "center",
                        gap: "-4rem",
                        arrows: false,
                        pagination: false,
                    }}
                >
                    {natureInfo.map(img => (
                        <SplideSlide key={img.id}>
                            <div className={x.slide}>
                                <img
                                    src={img.previewURL}
                                    alt={img.tags}
                                    className={x.gall__image}
                                />
                            </div>
                        </SplideSlide>
                    ))}
                </Splide> */}
            </div>
        </div>
    )
}