import scale from '../_lib/scale'

const makeScale = function (data, width) {
  // find max x
  let max = 0
  data.forEach((o) => {
    if (o.x > max) {
      max = o.x
    }
  })

  const xScale = function (val) {
    return scale(
      {
        world: [0, width],
        minmax: [0, max],
      },
      val
    )
  }
  return xScale
}
export default makeScale
