import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import TablePagination from '@mui/material/TablePagination'
import * as API from 'services/api'
import Headline from 'components/Headline/Headline'
import SelectedStudent from 'components/SelectedStudent/SelectedStudent'
import s from './Students.module.scss'
import SortableTable from './SortableTable'

export default function Students() {
  const [students, setStudents] = useState([])
  const [archive, setArchive] = useState([])
  const [page, setPage] = useState(1)
  const [paginationPage, setPaginarionPage] = useState(0)
  const [size, setSize] = useState(5)
  const [totalCount, setTotalCount] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [selected, setSelected] = useState(false)
  const { filter } = useSelector(state => state.filter)

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

  const toggleSelectStudent = (index, selected) => {
    const newStudents = students.map(item => {
      if (item.id === index) {
        return { ...item, selected }
      }
      return item
    })
    setStudents(newStudents)
  }

  const toggleArchivedStudent = archive => {
    const newStudents = archive
    setArchive(newStudents)
    cancelSelected()
  }

  const cancelSelected = () => {
    const newStudents = students.map(item => {
      return { ...item, selected: false }
    })
    setStudents(newStudents)
  }
  const cancelArchive = index => {
    archive.splice(index, 1)
    const newStudents = archive.map(item => item)

    setArchive(newStudents)
  }

  const selectStudents = students.filter(student => student.selected)
  const studentsFiltered = filteredStudents()

  return (
    <>
      {selectStudents.length > 0 ? (
        <SelectedStudent
          selectStudents={selectStudents}
          cancelSelected={cancelSelected}
          toggleArchivedStudent={toggleArchivedStudent}
        />
      ) : (
        <Headline />
      )}
      <div className={s.container}>
        {studentsFiltered.length > 0 ? (
          <>
            <SortableTable
              studentsFiltered={studentsFiltered}
              changeCheckbox={changeCheckbox}
              checked={selected}
              things={studentsFiltered}
              toggleSelectStudent={toggleSelectStudent}
              archivedStudents={archive}
              cancelArchive={cancelArchive}
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
    </>
  )
}
