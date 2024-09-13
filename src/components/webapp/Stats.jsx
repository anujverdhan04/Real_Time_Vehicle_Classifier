import React, { useState } from 'react'
import Ministats from './Ministats';


function Stats() {

    // ch
    const [showAll, setShowAll] = useState(false);
    const handleSeeAllClick = () => {
        setShowAll(true);
    };
    const handleHide = () => {
        setShowAll(false);
    };
    // Sample data for Ministats
    const ministatsData = [
        { vehiClass: "Car", vehiCount: "1", },
        { vehiClass: "Bus", vehiCount: "2", },
        { vehiClass: "Truck", vehiCount: "3", },
        { vehiClass: "Bike", vehiCount: "4", },
        { vehiClass: "Mini truck", vehiCount: "5", },
        { vehiClass: "Ambulance", vehiCount: "6", },
        { vehiClass: "Car", vehiCount: "7", },
        { vehiClass: "Car", vehiCount: "8", },
        { vehiClass: "Car", vehiCount: "9", },
        { vehiClass: "Car", vehiCount: "10", },
        { vehiClass: "Car", vehiCount: "11", },
        { vehiClass: "Car", vehiCount: "12", }
    ];

    // Filter ministats to display initially
    const displayedMinistats = showAll ? ministatsData : ministatsData.slice(0, 6);
    return (
        <div>
            <div className="stats">
                {showAll ? <div onClick={handleHide} className='hideStats'>Hide</div>:<div className="totalStats">Total Vehicles <p>100</p></div>}
    
                <div className="someStats">
                    {displayedMinistats.map((ministat, index) => (
                        <Ministats key={index} vehiClass={ministat.vehiClass} vehiCount={ministat.vehiCount} />
                    ))}
                    {!showAll && (
                        <div className="seeMore" onClick={handleSeeAllClick}>
                            <div className="SMText">See All</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Stats