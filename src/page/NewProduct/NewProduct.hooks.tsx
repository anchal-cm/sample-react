import { FormEvent, useCallback, useState } from 'react'
import { z } from 'zod'
import { ProductUsecase } from '../../features/usecase/ProductUsecase'

const NewProductModel = z.object({
  title: z.string().min(2),
  description: z.string(),
})

type NewProductForm = z.infer<typeof NewProductModel>

export const useNewProductPage = () => {
  const [form, setForm] = useState<NewProductForm>({ title: '', description: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const updateForm = useCallback(
    (data: Partial<NewProductForm>) => {
      setForm((prev) => {
        return { ...prev, ...data }
      })
    },
    [setForm],
  )

  const onClickSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      //Validate
      const valid = NewProductModel.safeParse(form)
      if (!valid.success) {
        setError(valid.error.message)
        return
      }

      try {
        setLoading(true)
        await ProductUsecase.postProduct(valid.data)
      } catch (error) {
        return
      } finally {
        setLoading(false)
        setError('')
        setForm({ title: '', description: '' })
      }
    },
    [form],
  )

  return { form, updateForm, onClickSubmit, error, loading }
}
