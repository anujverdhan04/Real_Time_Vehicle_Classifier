import React from 'react'
import '../../assets/Css/webapp.css'
function Ministats({ vehiClass, vehiCount }) {
  return (
    <div>
        <div className="miniStats">
            <div title={vehiClass} className="clsName">{vehiClass}</div>
            <div className="ClsCount">{vehiCount}</div>
        </div>
    </div>
  )
}

export default Ministats