import { useState, useEffect } from 'react'
import * as API from 'services/api'
import Headline from 'components/Headline/Headline'
import s from './Students.module.scss'
import SortableTable from './SortableTable'
import TablePagination from '@mui/material/TablePagination'

export default function Students() {
  const [students, setStudents] = useState([])
  const [page, setPage] = useState(1)
  const [paginationPage, setPaginarionPage] = useState(0)
  const [size, setSize] = useState(5)
  const [totalCount, setTotalCount] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [selected, setSelected] = useState(false)
  const [filter, setFilter] = useState('')

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

  const changeFilter = e => {
    setFilter(e.target.value)
  }

  const filteredStudents = () => {
    const normalizedFilter = filter.toLowerCase()
    return students.filter(
      student =>
        student.name.toLowerCase().includes(normalizedFilter) ||
        student.parents.join(', ').toLowerCase().includes(normalizedFilter) ||
        student.id === Number(normalizedFilter),
    )
  }

  const changeCheckbox = () => {
    setSelected(!selected)
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

  const studentsFiltered = filteredStudents()

  return (
    <div className={s.container}>
      <Headline changeFilter={changeFilter} filter={filter} />
      {studentsFiltered.length > 0 ? (
        <>
          <SortableTable
            studentsFiltered={studentsFiltered}
            changeCheckbox={changeCheckbox}
            checked={selected}
            things={studentsFiltered}
          />
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
        </>
      ) : (
        <h3 style={{ textAlign: 'center' }}> Sorry! Students not found</h3>
      )}
    </div>
  )
}
