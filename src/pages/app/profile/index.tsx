import MainLayout from '@layout/main'
import { useUser } from '@lib/user-provider'
import { NextPageWithLayout } from '@pages/_app'
import { ReactElement } from 'react'

const Profile: NextPageWithLayout = () => {
  const { user } = useUser()

  return <h1>Profile page</h1>
}

Profile.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout title="Overview">{page}</MainLayout>
}

export default Profile
