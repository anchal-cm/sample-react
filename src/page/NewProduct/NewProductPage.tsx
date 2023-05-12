import { FC } from 'react'
import { useNewProductPage } from './NewProduct.hooks'
import { Input } from '../../components/Input/Input'

export const NewProductPAge: FC = () => {
  const { form, onClickSubmit, updateForm, error, loading } = useNewProductPage()

  return (
    <div>
      {error}
      {loading && <p>Loading...</p>}
      <form onSubmit={onClickSubmit}>
        <div>
          <label htmlFor='input-title'>Title</label>
          <Input
            label='name'
            value={form.title}
            type='text'
            onChange={(e) => updateForm({ title: e })}
          />
        </div>
        <div>
          <label htmlFor='input-desc'>Description</label>
          <input
            id='input-desc'
            type='text'
            value={form.description}
            onChange={(e) => {
              updateForm({ description: e.target.value })
            }}
          />
        </div>
        {/* <input type={'submit'} value='Submit' /> */}
        <button>Submit</button>
      </form>
    </div>
  )
}
