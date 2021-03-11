import React from 'react'
import RecentActivity from './webapp-components/RecentActivity'
import LatestTests from './webapp-components/LatestTests'
import Stats from './webapp-components/MyStats'
function Dashboard() {
    return (
        <div className="pt-4">
            <RecentActivity />
            <br/>
            <LatestTests />
            <br/>
            <Stats />
        </div>
    )
}

export default Dashboard
