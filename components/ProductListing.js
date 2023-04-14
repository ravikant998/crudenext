import { IconButton, Slider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import ModeIcon from '@mui/icons-material/Mode';
import { useRouter } from 'next/router';
import dynamic from "next/dynamic";

const ProductListing = () => {
    const router = useRouter()
    const [productdetails, setProductdetails] = useState('')// product Details
    const [search, setSearch] = useState('')// Search by product name
    const [val, setVal] = React.useState([0, 100000]);
    const [showbrand, setShowbrand] = useState()// List Show Brand
    const [brandFilter, setBrandFilter] = useState([]);

    // console.log("brandFilter>>", brandFilter)
    /// Remove duplicate value
    let brandData = showbrand?.map((menu) => menu.brand)
    let uniquebrand = [];
    brandData?.forEach((data) => {
        // console.log("data>>", data)
        if (!uniquebrand.includes(data)) {
            uniquebrand.push(data)
        }
    })
    // console.log("uniquebrand", uniquebrand)

    //Sortting price
    const handleSort = (e) => {
        // console.log("e", e)
        const sortingdata = [...productdetails]
        // console.log("sortingdata>>>>", sortingdata)
        if (e.target.value == 'highest') {
            sortingdata.sort((a, b) => (b.price - a.price))
        }
        else {
            sortingdata.sort((a, b) => (a.price - b.price))
        }
        setProductdetails(sortingdata)
    }
    useEffect(() => {
        let productdata = JSON.parse(localStorage.getItem('productadd'))
        setProductdetails(productdata)
        setShowbrand(productdata)
    }, [])

    /// Edit product Datails
    const edithandler = (id) => {
        router.push(`/products/${id}`)
    }

    /// Delete product id By
    const removeData = (id) => {
        const proDetails = productdetails.filter((val) => {

            return val.id !== id

        })

        // const proDetails = productdetails.filter((val) => val.id !== id)
        // console.log("proDetails", proDetails)
        setProductdetails(proDetails)
        localStorage.setItem("productadd", JSON.stringify(proDetails))
    }

    // Data filter on check box
    const handleCheck = (e) => {
        let checkdata = [...brandFilter]
        console.log("cccc", checkdata)
        if (e.target.checked) {
            checkdata = [...brandFilter, e.target.value];
            // console.log("checkdata", checkdata)
        }
        else {
            checkdata.splice(brandFilter.indexOf(e.target.value), 1);
        }
        setBrandFilter(checkdata)
    }

    return (
        <div>
            {/* Show brand  */}
            <div >
                <h5>Brand</h5>
                {
                    showbrand?.length ? showbrand.map((items, index) => {
                        return (
                            <div key={index} style={{ display: 'flex' }}>
                                <input type="checkbox" style={{ opacity: '1', position: 'static', pointerEvents: 'all' }}
                                    value={items.brand}
                                    onChange={handleCheck}
                                />
                                <h5>{items.brand}</h5>
                            </div>
                        )
                    })
                        : null
                }

                {/* Search product by brand name,product by ???????????????????????/ */}
                <div>
                    <h4>Search by product name</h4>
                    <input type="text" placeholder="Search....."
                        onChange={(e) => setSearch(e.target.value)} />
                </div>

                {/* Sorting Price by highest to Lowest ???????????????????????????/*/}
                <div>
                    <select style={{ display: 'block' }} onChange={handleSort}>
                        <option >Plese Select all Data</option>
                        <option value={'lowest'}>Sort by lowest price first</option>
                        <option value={'highest'}>Sort by highest price</option>
                    </select>
                </div>

                {/* Price Range between?????????????????????????????????????????????// */}

                <h4>Filter By Price</h4>
                <div>
                    <Slider
                        step={5}
                        min={0}
                        max={100000}
                        value={val}
                        onChange={(ev, v) => setVal(v)}
                        valueLabelDisplay="off"
                        aria-labelledby="range-slider"
                    />
                </div>
                <div>{`${val[0]}`}-{`${val[1]}`}</div>
            </div>



            <div>
                <TableContainer >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">S.No</TableCell>
                                <TableCell align="right">Product Name</TableCell>
                                <TableCell align="right">Description</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Brand Name</TableCell>
                                <TableCell align="right">Category</TableCell>
                                <TableCell align="right">Edit/Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                productdetails &&
                                productdetails.filter(data =>
                                    data.productname.toLowerCase().includes(search.toLowerCase())
                                    && data.productname.toLowerCase().includes(search.toLowerCase())
                                    && data.brand.toLowerCase().includes(search.toLowerCase())
                                    &&
                                    data.price >= (val[0]) && data.price <= (val[1]))
                                    .map((items, index) => {
                                        return (

                                            brandFilter.length == 0 ?
                                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    key={index} >

                                                    <TableCell align="right">{items.id}</TableCell>
                                                    <TableCell align="right">{items.productname}</TableCell>
                                                    <TableCell align="right">{items.productdes}</TableCell>
                                                    <TableCell align="right">{items.price}</TableCell>
                                                    <TableCell align="right">{items.brand}</TableCell>
                                                    <TableCell align="right">{items.category}</TableCell>
                                                    <TableCell align="right">
                                                        <IconButton aria-label="delete" onClick={() => edithandler(items.id)}><ModeIcon /></IconButton>

                                                        <IconButton aria-label="delete" onClick={() => removeData(items.id)}> <DeleteIcon /></IconButton>
                                                    </TableCell>
                                                </TableRow>
                                                :

                                                brandFilter.includes(items.brand) &&
                                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    key={index} >

                                                    <TableCell align="right">{items.id}</TableCell>
                                                    <TableCell align="right">{items.productname}</TableCell>
                                                    <TableCell align="right">{items.productdes}</TableCell>
                                                    <TableCell align="right">{items.price}</TableCell>
                                                    <TableCell align="right">{items.brand}</TableCell>
                                                    <TableCell align="right">{items.category}</TableCell>
                                                    <TableCell align="right">
                                                        <IconButton aria-label="delete" onClick={() => edithandler(items.id)}><ModeIcon /></IconButton>

                                                        <IconButton aria-label="delete" onClick={() => removeData(items.id)}> <DeleteIcon /></IconButton>
                                                    </TableCell>
                                                </TableRow>


                                        )
                                    })
                            }

                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

        </div>
    )
}

export default dynamic(() => Promise.resolve(ProductListing), { ssr: false })/// eror handling ssr

// export default ProductListing