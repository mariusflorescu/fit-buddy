import Button from '@components/button'
import FailureIcon from '@icons/failure'
import LoadingSpinner from '@icons/loadingSpinner'
import SuccessIcon from '@icons/success'
import AuthLayout from '@layout/auth'
import { NextPageWithLayout } from '@pages/_app'
import { trpc } from '@utils/trpc'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'

const CreateEntry: NextPageWithLayout = () => {
  const { query } = useRouter()
  const {
    mutate: createEntry,
    isSuccess,
    isError,
    isLoading,
    isIdle
  } = trpc.gym.createEntry.useMutation({
    retry: false
  })

  const handleCreateEntry = async () => {
    await createEntry({ userId: query.userId as string })
  }

  return (
    <div className="flex flex-col items-center gap-4 text-sm text-gray-600">
      {isSuccess && (
        <>
          <SuccessIcon />
          Success
        </>
      )}
      {isError && (
        <>
          <FailureIcon />
          Failure
        </>
      )}
      {isLoading && <LoadingSpinner />}
      {(isIdle || isLoading) && (
        <Button onClick={handleCreateEntry} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Create Entry'}
        </Button>
      )}
    </div>
  )
}

CreateEntry.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout title="Sign In">{page}</AuthLayout>
}

export default CreateEntry
