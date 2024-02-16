/* -------------------------------------------------------------------
|  🐼 Function findInputError
|
|  🐯 Purpose: GIVEN AN ERRORS OBJECT AND AN INPUT NAME, THIS FUNCTION
|              FILTERS THE ERRORS OBJECT AND RETURN THE ERROR OF THE
|              GIVEN INPUT.
|
|  🐸 Returns:  OBJECT
*------------------------------------------------------------------- */

import { type FieldErrors, type FieldValues } from 'react-hook-form'

export function findInputError(
  errors: FieldErrors<FieldValues>,
  name: string
): object {
  const filtered = Object.keys(errors)
    .filter((key) => key.includes(name))
    .reduce((cur, key) => {
      return Object.assign(cur, { error: errors[key] })
    }, {})
  return filtered
}
