import NewTaskDescription from './NewTaskDescription'

const BoxThree = (): JSX.Element => {
  const newTaskNameProps = {
    name: 'description',
    validation: {
      required: {
        value: true,
        message: 'لطفا عنوان تسک را خالی نگذارید'
      }
    },
    id: 'text',
    placeholder: 'عنوان تسک',
    inputDir: 'rtl'
  }
  return <NewTaskDescription {...newTaskNameProps} />
}

export default BoxThree
