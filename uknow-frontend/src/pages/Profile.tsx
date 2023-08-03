import React from 'react'
import {ProfileForm} from '../components/forms/ProfileForm'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

function Profile() {
  return (
    <><Navbar />
    <ProfileForm />
    <Footer />
    </>
  )
}

export default Profile