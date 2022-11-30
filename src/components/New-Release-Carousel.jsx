import React from "react";
import Carousel from 'react-grid-carousel'

function NewReleaseCarousel() {
    const b = 6;
    return (
        <>
        <h1 className="font-bold text-xl text-left text-white">New releases.</h1>
        <div className="mt-4 text-white text-left">
            <Carousel cols={b} rows={1}>
                <Carousel.Item>
                    <img src="./images/Rectangle 14 (1).png" alt="" />
                    <div>Mountain</div>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="./images/Rectangle 14 (2).png" alt="" />
                    <div>Limits</div>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="./images/Rectangle 14 (3).png" alt="" />
                    <div>Everything's black</div>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="./images/Rectangle 14 (4).png" alt="" />
                    <div>Cancelled</div>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="./images/Rectangle 14 (5).png" alt="" />
                    <div>Namari</div>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="./images/Rectangle 14.png" alt="" />
                    <div>Life in a bubble</div>
                </Carousel.Item>
            </Carousel>
        </div>
        </>
    )
}

export default NewReleaseCarousel