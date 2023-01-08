import Button from '@components/button'
import PlusIcon from '@icons/plusIcon'
import MainLayout from '@layout/main'
import { NextPageWithLayout } from '@pages/_app'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'

const MyClasses: NextPageWithLayout = () => {
  const router = useRouter()

  return (
    <div>
      <div className="flex justify-end">
        <Button
          variant="secondary"
          onClick={() => router.push('/app/trainer/add-class')}
        >
          <PlusIcon />
        </Button>
      </div>
    </div>
  )
}

MyClasses.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout title="My Classes">{page}</MainLayout>
}

export default MyClasses
