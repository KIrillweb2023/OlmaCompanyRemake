import Image from "next/image";
import { useState } from "react";
import "./main.scss";

export function Questions() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const questions = [
        {
            question: "Can I change my subscription plan at any time?",
            answer: "Yes, you can upgrade or downgrade your subscription plan at any time. Changes will be reflected in your next billing cycle."
        },
        {
            question: "How does the refund policy work?",
            answer: "We offer a 30-day money-back guarantee for all annual plans. If you're not satisfied, you can request a full refund within the first 30 days."
        },
        {
            question: "Is there a limit to the number of projects I can create?",
            answer: "The number of projects depends on your subscription tier. Basic plan allows up to 3 projects, while Premium offers unlimited projects."
        },
        {
            question: "Do you offer technical support?",
            answer: "Yes, we provide 24/7 technical support for all customers. Premium users get priority support with faster response times."
        }

    ];

    const toggleQuestion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="app-question">
            <div className="container">
                <div className="app-question-wrapper">
                    {/* Баннер секции */}
                    <div className="app-question-banner">
                        <div className="app-question-banner__overlay"></div>
                        <div className="app-question-banner__text">
                            <h3>Frequently asked app-questions</h3>
                            <p>Find out how your work is being handled by the developers of your business product</p>
                            <button className="app-question-banner__consult">
                                <p>Watch demo</p>
                                <Image width={20} height={20} alt="консультация" src={"/icons/consultIcons/playIcon.svg"} />
                            </button>
                        </div>
                    </div>

                    <div className="app-question-list">
                        {questions.map((item, index) => (
                            <div key={index} className="app-question-list__item">
                                <div
                                    className={`app-question-list__item_quest ${activeIndex === index ? 'active' : ''}`}
                                    onClick={() => toggleQuestion(index)}
                                >
                                    <p>{item.question}</p>
                                    <Image
                                        width={20}
                                        height={20}
                                        alt="open"
                                        src={"/icons/questions-icons/Frame.svg"}
                                        className={`toggle-icon ${activeIndex === index ? 'rotated' : ''}`}
                                    />
                                </div>
                                <div className={`app-question-list__item_answer ${activeIndex === index ? 'visible' : ''}`}>
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}