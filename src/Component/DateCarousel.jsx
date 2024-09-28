import React, { useState } from "react";
import { format, addDays, subDays } from 'date-fns';

const DateCarousel = ({ setDate }) => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const handleNext = () => {
        setCurrentDate(addDays(currentDate, 1));
    };

    const handlePrevious = () => {
        setCurrentDate(subDays(currentDate, 1));
    };

    // Function to generate the range of dates (2 previous and 5 next)
    const generateDateRange = () => {
        let dates = [];

        // Get 2 previous dates
        for (let i = 2; i > 0; i--) {
            dates.push(subDays(currentDate, i));
        }

        // Add the current date
        dates.push(currentDate);

        // Get 5 next dates
        for (let i = 1; i <= 5; i++) {
            dates.push(addDays(currentDate, i));
        }

        return dates;
    };
    const handleDateClick = (date) => {
        setCurrentDate(date);  // Set the selected date as the current date
        setDate(format(date, 'yyyy-MM-dd'));  // Pass the selected date to ModifySearchDetails
    };

    return (
        <div className=" container border border-dark rounded mt-2 date-carousel d-flex w-100">
            <button className="btn btn-outline-success rounded-0" onClick={handlePrevious}>&lt;</button>
            <div className="date-display d-flex">
                {generateDateRange().map((date, index) => (
                    <div
                        key={index}
                        style={{
                            margin: "0 10px",
                            fontWeight: date === currentDate ? "bold" : "normal",// Highlight current date
                            color: date === currentDate ? "green" : "normal",
                            cursor: "pointer"
                        }}
                        onClick={() => handleDateClick(date)}  // Handle date click
                    >
                        {format(date, 'MMMM d, yyyy')}
                    </div>
                ))}
            </div>
            <button className="btn btn-outline-success rounded-0" onClick={handleNext}>&gt;</button>
        </div>
    );
};

export default DateCarousel;

