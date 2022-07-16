export default function sortTableData(array, { sortby, direction }) {
  return array.sort((a, b) => {
    if (a[sortby] < b[sortby]) return direction === 'ascending' ? -1 : 1
    if (a[sortby] > b[sortby]) return direction === 'ascending' ? 1 : -1
    return 0
  })
}
