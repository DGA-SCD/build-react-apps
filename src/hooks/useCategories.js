import { useState, useEffect } from 'react'
import axios from 'axios'

export const useCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios.get('http://localhost:8000/categories')
      const data = await response.data
      setCategories(data)
    }

    getCategories()
  }, [])

  return categories
}
