import MainLayout from '@layout/main'
import { ReactElement } from 'react'

const AddClass = () => {
  return <div>Add Class</div>
}

AddClass.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout title="Add Class">{page}</MainLayout>
}

export default AddClass
