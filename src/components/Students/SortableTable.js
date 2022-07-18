import { useState } from 'react'
import s from './Students.module.scss'
import { nanoid } from 'nanoid'
import StudentInfo from './StudentInfo'
import sortTableData from 'helpers/sortTableData'
import ArchivedTable from './ArchivedTable'
export default function SortableTable({
  checked,
  changeCheckbox,
  things,
  toggleSelectStudent,
  archivedStudents,
  cancelArchive,
}) {
  const [sortedItems, setSortedItems] = useState(things)
  const [checkedbutton, setCheckedbutton] = useState(false)
  const [direction, setDirection] = useState('ascending')
  const [sortby, setSortby] = useState()

  const handleClick = event => {
    const sortDir = direction === 'descending' ? 'ascending' : 'descending'
    setDirection(sortDir)
    setSortby(event.target.id)
    const sortConfig = { sortby: event.target.id, direction: sortDir }
    setSortedItems(sortTableData(things, sortConfig))
  }

  const showButtons = () => {
    setCheckedbutton(!checkedbutton)
  }

  return (
    <table className={s.table}>
      <thead className={s.thead}>
        <tr className={s.tr}>
          <th className={s.th} style={{ paddingLeft: '20px' }}>
            <input
              type="checkbox"
              name="check"
              checked={checked}
              onChange={changeCheckbox}
            />
          </th>
          <th
            className={s.th}
            onClick={handleClick}
            direction={direction}
            id="name"
            sortby={sortby}
          >
            Name
          </th>
          <th className={s.th}>
            <span>ID</span>
          </th>
          <th
            className={s.th}
            direction={direction}
            id="class"
            onClick={handleClick}
            sortby={sortby}
          >
            Class
          </th>
          <th
            className={s.th}
            direction={direction}
            id="score"
            onClick={handleClick}
            sortby={sortby}
          >
            Av.Score, %
          </th>
          <th
            className={s.th}
            direction={direction}
            id="speed"
            onClick={handleClick}
            sortby={sortby}
          >
            Av.Speed
          </th>
          <th className={s.th}>Parents</th>
          <th className={s.th} style={{ width: '133px' }}>
            Actions
          </th>
        </tr>
      </thead>
      <tbody className={s.tbody}>
        {things &&
          things.map(student => (
            <StudentInfo
              key={nanoid()}
              tests={student.tests}
              {...student}
              index={student.id}
              toggleSelectStudent={toggleSelectStudent}
              showButtons={showButtons}
              checkedbutton={false}
            ></StudentInfo>
          ))}
        {archivedStudents.length > 0 ? (
          <ArchivedTable
            archivedStudents={archivedStudents}
            cancelArchive={cancelArchive}
          />
        ) : null}
      </tbody>
    </table>
  )
}
