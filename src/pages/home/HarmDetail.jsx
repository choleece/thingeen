import React from 'react';

import { Carousel, WingBlank } from 'antd-mobile';

import './styles/caroursel.css';

/**
 * 琴行详情
 */
class HarmDetail extends React.Component {

    state = {
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
        imgHeight: 176,
    };

    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }

    render() {
        return (
            <WingBlank size='sm'>
                <Carousel className="space-carousel"
                          frameOverflow="visible"
                          cellSpacing={10}
                          slideWidth={0.8}
                          autoplay
                          infinite
                          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                          afterChange={index => this.setState({ slideIndex: index })}
                >
                    {this.state.data.map((val, index) => (
                        <div
                            key={val}
                            style={{
                                display: 'block',
                                position: 'relative',
                                top: this.state.slideIndex === index ? -10 : 0,
                                height: this.state.imgHeight,
                                boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                            }}
                        >
                            <img
                                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </div>
                    ))}
                </Carousel>
            </WingBlank>
        );
    }
}

export default HarmDetail;