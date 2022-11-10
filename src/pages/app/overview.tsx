import MainLayout from '@layout/main'
import { NextPage } from 'next'

const Overview: NextPage = () => {
  return (
    <MainLayout title="Overview">
      <div className="h-full">Overview page</div>
    </MainLayout>
  )
}

export default Overview
