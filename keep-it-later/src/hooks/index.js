import React, { useState, useEffect } from 'react'
import axios from 'axios'

// define custom hook
export const useCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get('http://localhost:8000/categories')
      console.log(response)
      setCategories(response.data)
    }

    fetchCategories()
  }, [])

  return [categories, setCategories]
}
