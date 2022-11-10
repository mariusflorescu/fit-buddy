import Button from '@components/button'
import MainLayout from '@layout/main'
import { NextPageWithLayout } from '@pages/_app'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'

const History: NextPageWithLayout = () => {
  const router = useRouter()

  return <div>History</div>
}

History.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout title="History">{page}</MainLayout>
}

export default History
