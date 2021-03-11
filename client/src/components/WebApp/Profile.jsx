import React from 'react'
import ProfileCard from './webapp-components/ProfileCard'
import Bio from './webapp-components/BioCard'
function Profile() {
    return (
        <div className="pt-4 pb-5">
            <ProfileCard />
            <br/>
            <Bio />
        </div>
    )
}

export default Profile
