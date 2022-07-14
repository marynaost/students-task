import { createAsyncThunk } from '@reduxjs/toolkit'
import * as API from 'services/api'

export const fetchStudents = createAsyncThunk(
  'students/fetchStudents',
  async (_, { rejectWithValue }) => {
    try {
      const students = await API.fetchStudentsData()
      return students
    } catch (error) {
      return rejectWithValue(error)
    }
  },
)
