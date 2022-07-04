import common from './common'

export default {
  ...common.button,
  color: `black`,
  bg: `white`,
  borderColor: `black`,
  ':hover': {
    borderColor: `yellowImmo`,
    color: `yellowImmo`
  },
}
