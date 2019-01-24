export default function flattenArray(arr) {
  return arr.reduce(function(flat, toFlatten) {
    return flat.concat(
      Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten,
    )
  }, [])
}
