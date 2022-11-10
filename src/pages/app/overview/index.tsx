import Button from '@components/button'
import MainLayout from '@layout/main'
import { NextPageWithLayout } from '@pages/_app'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'

const Overview: NextPageWithLayout = () => {
  const router = useRouter()

  return (
    <div>
      Overview page
      <Button onClick={() => router.push('/app/overview/history')}>
        Go to history
      </Button>
    </div>
  )
}

Overview.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout title="Overview">{page}</MainLayout>
}

export default Overview
