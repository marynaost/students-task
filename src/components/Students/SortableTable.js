import { useState } from 'react'
import s from './Students.module.scss'
import { nanoid } from 'nanoid'
import StudentInfo from './StudentInfo'
import ArchivedTable from './ArchivedTable'
export default function SortableTable({
  checked,
  changeCheckbox,
  students,
  toggleSelectStudent,
  archivedStudents,
  cancelArchive,
  changeSort,
}) {
  const [checkedbutton, setCheckedbutton] = useState(false)

  const sortOptions = ['name', 'class', 'score', 'speed']
  const handleClick = field => {
    if (sortOptions.includes(field)) {
      changeSort(field)
    }
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
            id="name"
            onClick={e => handleClick(e.target.id)}
          >
            Name
          </th>
          <th className={s.th}>
            <span>ID</span>
          </th>
          <th
            className={s.th}
            id="class"
            onClick={e => handleClick(e.target.id)}
          >
            Class
          </th>
          <th
            className={s.th}
            id="score"
            onClick={e => handleClick(e.target.id)}
          >
            Av.Score, %
          </th>
          <th
            className={s.th}
            id="speed"
            onClick={e => handleClick(e.target.id)}
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
        {students &&
          students.map(student => (
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
