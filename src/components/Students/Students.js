import { useState, useEffect } from 'react'
import TablePagination from '@mui/material/TablePagination'
import * as API from 'services/api'
import Headline from 'components/Headline/Headline'
import SelectedStudent from 'components/SelectedStudent/SelectedStudent'
import s from './Students.module.scss'
import SortableTable from './SortableTable'
import Loader from 'components/Loader/Loader'

export default function Students() {
  const [students, setStudents] = useState([])
  const [archive, setArchive] = useState([])
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('')
  const [sortDir, setSortDir] = useState(null)
  const [paginationPage, setPaginarionPage] = useState(0)
  const [size, setSize] = useState(5)
  const [totalCount, setTotalCount] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [selected, setSelected] = useState(false)

  useEffect(() => {
    API.fetchStudentsData(page, size, search, sortBy, sortDir)
      .then(response => {
        setTotalCount(response.totalCount)
        setPage(page)
        setStudents(response.data)
      })
      .catch(error => console.log(error))
  }, [page, size, search, sortBy, sortDir])

  const changeSort = sortByName => {
    if (sortBy !== sortByName) {
      setSortBy(sortByName)
      setSortDir(1)
    } else {
      const newSortDir = sortDir === 1 ? -1 : 1
      setSortBy(sortByName)
      setSortDir(newSortDir)
    }
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

  return (
    <>
      {selectStudents.length > 0 ? (
        <SelectedStudent
          selectStudents={selectStudents}
          cancelSelected={cancelSelected}
          toggleArchivedStudent={toggleArchivedStudent}
        />
      ) : (
        <Headline changeFilter={setSearch} search={search} />
      )}
      <div className={s.container}>
        {students === [] && <Loader />}
        {students.length > 0 ? (
          <>
            <SortableTable
              changeCheckbox={changeCheckbox}
              checked={selected}
              students={students}
              toggleSelectStudent={toggleSelectStudent}
              archivedStudents={archive}
              cancelArchive={cancelArchive}
              changeSort={changeSort}
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
          <>
            <Loader />
            <h3 style={{ textAlign: 'center' }}> Sorry! Students not found</h3>
          </>
        )}
      </div>
    </>
  )
}
