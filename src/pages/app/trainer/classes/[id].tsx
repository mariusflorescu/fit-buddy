import Button from '@components/button'
import Textarea from '@components/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import CalendarIcon from '@icons/calendar'
import PenIcon from '@icons/pen'
import MainLayout from '@layout/main'
import { NextPageWithLayout } from '@pages/_app'
import { trpc } from '@utils/trpc'
import { useRouter } from 'next/router'
import Input from '@components/input'
import { ReactElement, useState } from 'react'
import { useForm } from 'react-hook-form'
import { AddClassSchema, addClassSchema } from '../add-class'
import XCircle from '@icons/x-circle'

const Class: NextPageWithLayout = () => {
  const { query } = useRouter()
  const { data, isLoading, refetch } = trpc.trainer.getClass.useQuery({
    id: query.id as string
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<AddClassSchema>({
    defaultValues: {
      name: data?.cls?.name,
      description: data?.cls?.description,
      maxSlots: data?.cls?.maxSlots
    },
    resolver: zodResolver(addClassSchema)
  })
  const { mutateAsync } = trpc.trainer.updateClass.useMutation()

  const [viewMode, setViewMode] = useState<'normal' | 'edit'>('normal')

  const onEditClick = () =>
    setViewMode((prev) => (prev === 'normal' ? 'edit' : 'normal'))

  const onSubmit = async (data: AddClassSchema) => {
    try {
      await mutateAsync({ id: query.id as string, data })
      await refetch()
      setViewMode('normal')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <Button variant="secondary" icon={<CalendarIcon />}>
          Add Timeslot
        </Button>
        <Button
          icon={viewMode === 'normal' ? <PenIcon /> : <XCircle />}
          onClick={onEditClick}
        >
          {viewMode === 'normal' ? 'Edit' : 'Cancel Edit'}
        </Button>
      </div>
      {viewMode === 'normal' && (
        <div className="mt-8 flex flex-col gap-2">
          <h1 className="text-xl font-semibold text-gray-900">
            {data?.cls?.name}
          </h1>
          <p className="text-gray-600">{data?.cls?.description}</p>
          <p className="text-gray-600">
            <b className="text-gray-900">Max Slots</b>: {data?.cls?.maxSlots}
          </p>
        </div>
      )}

      {viewMode === 'edit' && (
        <form
          className="mt-8 flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            id="name"
            labelMessage="Name"
            error={!!errors.name?.message}
            errorMessage={errors.name?.message}
            {...register('name')}
          />
          <Textarea
            id="description"
            rows={5}
            labelMessage="Description"
            error={!!errors.description?.message}
            errorMessage={errors.description?.message}
            {...register('description')}
          />
          <Input
            type="number"
            id="maxSlots"
            labelMessage="Maximum Slots"
            error={!!errors.name?.message}
            errorMessage={errors.name?.message}
            {...register('maxSlots', { valueAsNumber: true })}
          />
          <Button>Add class</Button>
        </form>
      )}
    </div>
  )
}

Class.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout title="Add Class">{page}</MainLayout>
}

export default Class
