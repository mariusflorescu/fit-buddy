import MainLayout from '@layout/main'
import { ReactElement, useState } from 'react'
import z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Input from '@components/input'
import Textarea from '@components/textarea'
import Button from '@components/button'
import { trpc } from '@utils/trpc'
import { useRouter } from 'next/router'

export const addClassSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters long'),
  description: z
    .string()
    .min(24, 'Description must be at least 24 characters long'),
  maxSlots: z
    .number()
    .min(0, 'Slots must be greater than 0')
    .max(64, 'The Gym is not allowed to have more than 64 people in a class')
})

export type AddClassSchema = z.infer<typeof addClassSchema>

const AddClass = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<AddClassSchema>({
    defaultValues: {
      name: '',
      description: '',
      maxSlots: 0
    },
    resolver: zodResolver(addClassSchema)
  })

  const { mutateAsync } = trpc.trainer.createClass.useMutation()

  const onSubmit = async ({ name, description, maxSlots }: AddClassSchema) => {
    const slots = Number(maxSlots)
    try {
      const res = await mutateAsync({ name, description, maxSlots: slots })
      if (res.success) {
        router.back()
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit, (err) => console.error(err))}
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
      {/* <div className="flex gap-4">
        <span className="font-semibold">Interval:</span>
        <Controller
          name="type"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <RadioGroupRoot
              aria-label="Class Interval"
              className="flex gap-8"
              {...field}
              onValueChange={(e) => field.onChange(e)}
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem value="EVERY" id="r1">
                  <RadioGroupIndicator />
                </RadioGroupItem>
                <Label htmlFor="r1">Repeated</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="ONCE" id="r2">
                  <RadioGroupIndicator />
                </RadioGroupItem>
                <Label htmlFor="r2">Once</Label>
              </div>
            </RadioGroupRoot>
          )}
        />
      </div> */}
      <Button>Add class</Button>
    </form>
  )
}

AddClass.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout title="Add Class">{page}</MainLayout>
}

export default AddClass
