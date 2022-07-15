import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import * as API from 'services/api'
import StudentInfo from './StudentInfo'
import s from './Students.module.scss'
// import Icon from 'components/Icon'

import TablePagination from '@mui/material/TablePagination'

export default function Students() {
  const [students, setStudents] = useState([])
  const [page, setPage] = useState(1)
  const [paginationPage, setPaginarionPage] = useState(0)
  const [size, setSize] = useState(5)
  const [totalCount, setTotalCount] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [checked, setChecked] = useState(false)
  const [sort, setSort] = useState(false)
  const [test, setTest] = useState(false)

  useEffect(() => {
    API.fetchStudentsData(page, size)
      .then(response => {
        setSize(response.data.length)
        setTotalCount(response.totalCount)
        setPage(page)
        setStudents(response.data)
      })
      .catch(error => console.error())
  }, [page, size])

  const changeCheckbox = () => {
    setChecked(!checked)
  }

  const handleClick = () => {
    setSort(!sort)
  }
  const onDetailsClick = () => {
    setTest(!test)
  }

  const handleChangePage = (e, newPage) => {
    setPaginarionPage(newPage)
    setPage(newPage + 1)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value))
    setSize(event.target.value)
    setPaginarionPage(0)
    setPage(1)
  }

  return (
    <div className={s.container}>
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
            <th className={s.th}>
              <span className={s.name}>Name</span>
              {/* <button onClick={handleClick}></button> */}
            </th>
            <th className={s.th}>
              <span>ID</span>
            </th>
            <th className={s.th}>Class</th>
            <th className={s.th}>
              <span> Av.Score, %</span>
            </th>
            <th className={s.th}>
              <span>Av.Speed</span>
            </th>
            <th className={s.th}>Parents</th>
          </tr>
        </thead>
        <tbody className={s.tbody}>
          {students &&
            students.map(student => (
              <StudentInfo
                key={nanoid()}
                changeCheckbox={changeCheckbox}
                checked={checked}
                tests={student.tests}
                {...student}
              />
            ))}
        </tbody>
      </table>

      <TablePagination
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '16px',
        }}
        rowsPerPageOptions={[5, 10]}
        component="div"
        count={totalCount}
        rowsPerPage={rowsPerPage}
        page={paginationPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  )
}
