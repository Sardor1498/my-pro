import React from "react";
import { Card, Carousel, Rate } from 'antd'
const contentStyle = {
    height: '300px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#002140',
};
const Home = () => {
    return (
        <div>
            <Carousel autoplay>
                <div>
                    <h1 style={contentStyle}>Salom</h1>
                </div>
                <div>
                    <h1 style={contentStyle}>Salom</h1>
                </div>
                <div>
                    <h1 style={contentStyle}>Salom</h1>
                </div>
            </Carousel>
            <br />
            <Card title="Rate Us" style={{ width: 300 }}>
                <Rate allowHalf />
            </Card>
        </div>
    )
}

export default Home