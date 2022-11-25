import Button from '@components/button'
import AuthLayout from '@layout/auth'
import { NextPageWithLayout } from '@pages/_app'
import { trpc } from '@utils/trpc'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'

const CreateEntry: NextPageWithLayout = () => {
  const { query } = useRouter()
  const { mutate: createEntry } = trpc.gym.createEntry.useMutation({
    retry: false
  })

  const handleCreateEntry = async () => {
    await createEntry({ userId: query.userId as string })
  }

  return <Button onClick={handleCreateEntry}>Create Entry</Button>
}

CreateEntry.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout title="Sign In">{page}</AuthLayout>
}

export default CreateEntry
