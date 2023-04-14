import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
const edit = () => {
    const router = useRouter()
    const { edit } = router.query
    // console.log("edit", edit)

    const [productname, setProductname] = useState('')
    // console.log("productname",productname)
    const [category, setCategory] = useState('')
    const [brand, setBrand] = useState('')
    const [price, setPrice] = useState('')
    const [productdes, setProductdes] = useState('')

    useEffect(() => {
        const getdata = JSON.parse(localStorage.getItem('productadd')) || []
        getdata.forEach((element) => {
            if (element.id == edit) {
                setProductname(element.productname)
                setCategory(element.category)
                setPrice(element.price)
                setBrand(element.brand)
                setProductdes(element.productdes)
            }
        });
    }, [edit])

    const handleProductName = (e) => {
        console.log("e", e.target.value)
        setProductname(e.target.value)
    }
    const handleCategory = (e) => {
        setCategory(e.target.value)

    }
    const handelBrandName = (e) => {
        setBrand(e.target.value)
    }
    const handlePriceChange = (e) => {
        setPrice(e.target.value)

    }
    const handleProductdes = (e) => {
        setProductdes(e.target.value)
    }

    const handleSubmit = () => {
        const data = JSON.parse(localStorage.getItem('productadd')) || []
        data[0].productname = productname
        data[0].productname = productname
        data[0].category = category
        data[0].brand = brand
        data[0].price = price
        data[0].productdes = productdes

        localStorage.setItem('productadd', JSON.stringify(data))
        router.push('/')
    }

    return (
        <>
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
                        onChange={(e) => handleProductName(e)}
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


        </>

    )
}

export default edit