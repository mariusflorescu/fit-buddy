import { NextPageWithLayout } from '@pages/_app'
import type { ReactElement } from 'react'
import MainLayout from '@layout/main'

const Classes: NextPageWithLayout = () => {
  return <div>Classes page</div>
}

Classes.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout title="Classes">{page}</MainLayout>
}

export default Classes
