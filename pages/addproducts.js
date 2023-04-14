import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material'
import { useRouter } from 'next/router';
const addproducts = () => {
const router=useRouter()
  const [productname, setProductname] = useState('')
  const [category, setCategory] = useState('')
  const [brand, setBrand] = useState('')
  const [price, setPrice] = useState('')
  const [productdes, setProductdes] = useState('')

  const handleProductNameChange = (e) => {
    setProductname(e.target.value)
  }
  const handleCategory = (e) => {
    setCategory(e.target.value)
  }
  const handlePriceChange = (e) => {
    setPrice(e.target.value)
  }
  const handleProductdes = (e) => {
    setProductdes(e.target.value)
  }
  const handelBrandName = (e) => {
    setBrand(e.target.value)
  }
  const handleSubmit = () => {
    const products = JSON.parse(localStorage.getItem('productadd')) || [];
    console.log("products",products)
    localStorage.setItem('productadd',JSON.stringify([...products,{id: products.length + 1,productname,category,brand,price,productdes}]))
  router.push('/')
  }

  return (

    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          value={productname}
          onChange={(e) => handleProductNameChange(e)}
          label="Productname"
          required
        /><br />
        <TextField
          required
          value={category}
          onChange={(e) => handleCategory(e)}
          label="Category"
        /><br />
        <TextField
          required
          value={brand}
          onChange={(e) => handelBrandName(e)}
          label="BrandName"
        /><br />
        <TextField
          value={price}
          onChange={(e) => handlePriceChange(e)}
          type="number"
          label="Price"
        /><br />
        <TextField
          value={productdes}
          onChange={(e) => handleProductdes(e)}
          type="text"
          label="Product description"
        /><br />
        {/* <TextField
          // value={file}
          // onChange={(e) => handleImageChange(e)}
          type="file"
          label="Image"
        /><br /> */}
      </div>
      <Button variant='contained'
        onClick={handleSubmit}
      >Submit</Button>
    </Box>
  )
}

export default addproducts