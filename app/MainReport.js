'use client'

import { useState, useEffect } from "react"

export default function MainReport() {
    const [index, setIndex] = useState(0);

    const data = [
        { title: "제목1", description: "부제목1" },
        { title: "제목2", description: "부제목2" },
        { title: "제목3", description: "부제목3" },
        { title: "제목4", description: "부제목4" },
        { title: "제목5", description: "부제목5" },
    ];

    useEffect(() => {
        // 이미지 프리로드
        const preloadedImages = data.map(item => {
            const img = new Image();
            img.src = "logo.png"; // 이 부분에 필요한 다른 이미지 경로를 추가할 수 있습니다.
            return img;
        });
        // (Optional) Preload Arrow Image
        const arrowImg = new Image();
        arrowImg.src = "arrow-resized.png";
    }, []); // 빈 배열은 컴포넌트가 처음 렌더링될 때만 실행됩니다.

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
    };

    return (
        <div className="content_report">
            <div className="slide_control">
                <div className="slide-arrow">
                    <button className="arrow" onClick={prevSlide}>
                        <img src="arrow-resized.png" style={{ transform: "rotate(180deg)" }} alt="이전 슬라이드" />
                    </button>
                </div>
                <div className="ctrl">
                    <div className="slide-button">
                        {data.map((_, i) => (
                            <button
                                key={i}
                                className={`slide ${index === i ? "select" : ""}`}
                                onClick={() => setIndex(i)}
                            ></button>
                        ))}
                    </div>
                </div>
                <div className="slide-arrow">
                    <button className="arrow" onClick={nextSlide}>
                        <img src="arrow-resized.png" alt="다음 슬라이드" />
                    </button>
                </div>
            </div>
            <div style={{ overflow: "hidden" }}>
                <div className="report_post_cover" style={{ transform: `translateX(calc(${index} * -100vw))` }}>
                    {data.map((item, i) => (
                        <div className="report_post_inner" key={i}>
                            <div className="report_content">
                                <h4>이주의 굿즈 리포트</h4>
                                <h1>{item.title}</h1>
                                <h3>{item.description}</h3>
                            </div>
                            <div className="report_img">
                                <div className="img_area">
                                    <img src="logo.png" alt="로고" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
