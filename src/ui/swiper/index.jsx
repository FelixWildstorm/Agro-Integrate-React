
// Swiper
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Thumbs, EffectFade} from "swiper"

const Slider = ({children, animate, settings, className}) => {
    const sliderOptions = {
        slidesPerView: 1,
        pagination: true,
        navigation: true,
        ...settings
    }
    
    return (
        <SliderWrap
            animate={animate}
            dots={sliderOptions?.pagination}
            arrows={sliderOptions?.navigation}
        >
            <Swiper {...sliderOptions} className={cn(className)}>{children}</Swiper>
        </SliderWrap>
    );
};

export {SwiperSlide as Slide};
export default Slider;
