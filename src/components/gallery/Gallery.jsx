import x from './Gallery.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
export const Gallery = ({ natureInfo }) => {
    return (
        <div className={x.gall}>
            <div className="container">
                <h2 className={x.gall__title}>Beautiful nature</h2>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    spaceBetween={-60}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 250,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    {natureInfo.map((img) => (
                        <SwiperSlide key={img.id}>
                            <div className="slide-wrapper">
                                <img className={x.gall__img} src={img.largeImageURL} alt={img.tags} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}