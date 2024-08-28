/* eslint-disable no-unused-vars */
import {useEffect, useState} from "react";
import {
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
    Grid,
    TextField,
} from "@mui/material";
import constant_data from "../constants.js";

function JFilter({applyFilters ,filters, setFilters}) {

    const handleApplyFilters = () => {

        applyFilters(filters);
    };

    const handleResetFilters = () => {
        setFilters({
            subjectArea: "All",
            subjectCategory: "All",
            region: "All",
            type: "All",
            searchQuery: "",
        });
        applyFilters(filters);
    };


    const [countryList, setCountryList] = useState([]);
    const [regionList, setRegionList] = useState([]);
    const [publisherList, setPublisherList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [areaList, setAreaList] = useState([]);
    const [typeList, setTypeList] = useState([]);
    useEffect(() => {
        fetch(`${constant_data.backend_url}/get_all_journal_countries`).then(response => response.json()).then(data => {
            setCountryList(data);
        });
        fetch(`${constant_data.backend_url}/get_all_journal_regions`).then(response => response.json()).then(data => {
            setRegionList(data);
        });
        fetch(`${constant_data.backend_url}/get_all_journal_publishers`).then(response => response.json()).then(data => {
            setPublisherList(data);
        });
        fetch(`${constant_data.backend_url}/get_all_journal_categories`).then(response => response.json()).then(data => {
            let temp_data=[]
            data.map((value,index)=>{
                if(value.toString().includes(";")){
                    let temp=value.split(";");
                    temp.map((tvalue,index)=>{
                        temp_data.push(tvalue.toString().trim());
                    });
                }
                else temp_data.push(value);
            });
            const uniqueElements =  [...new Set(temp_data)];
            uniqueElements.sort()
            setCategoryList(uniqueElements);
        });
        fetch(`${constant_data.backend_url}/get_all_journal_areas`).then(response => response.json()).then(data => {
            let temp_data=[]
            data.map((value,index)=>{
                if(value.toString().includes(";")){
                    let temp=value.split(";");
                    temp.map((tvalue,index)=>{
                        temp_data.push(tvalue.toString().trim());
                    });
                }
                else temp_data.push(value);
            });
            const uniqueElements =  [...new Set(temp_data)];
            uniqueElements.sort()
            setAreaList(uniqueElements);
        });
        fetch(`${constant_data.backend_url}/get_all_journal_types`).then(response => response.json()).then(data => {
            setTypeList(data);
        });

    }, []);


    return (
        <Box p={2} sx={{marginTop: "30px", marginBottom: "20px"}}>
            <Grid container spacing={3} justifyContent="center">
                {/* Subject Area */}
                <Grid item xs={12} sm={6} md={3}>
                    <FormControl
                        fullWidth
                        variant="outlined"
                        size="small"
                        sx={{minWidth: 120}}
                    >
                        <InputLabel sx={{color: "#ffffff", fontSize: "1.1rem"}}>
                            Subject Area
                        </InputLabel>
                        <Select
                            label="Subject Area"
                            value={filters.subjectArea}
                            onChange={(e) =>
                                setFilters({...filters, subjectArea: e.target.value})
                            }
                            sx={{
                                backgroundColor: "#111827",
                                color: "#ffffff",
                                border: "1px solid black",
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderColor: "#ffffff",
                                    },
                                },
                            }}
                            MenuProps={{
                                PaperProps: {
                                    sx: {
                                        bgcolor: "#111833",
                                        "& .MuiMenuItem-root": {
                                            color: "#ffffff", // Set the text color of menu items
                                        },
                                    },
                                },
                            }}
                        >
                            <MenuItem value="All">All</MenuItem>
                            {areaList.map((area) => {
                                return <MenuItem key={area.toString()} value={area}>{area}</MenuItem>;
                            })}
                        </Select>
                    </FormControl>
                </Grid>

                {/* Subject Category */}
                <Grid item xs={12} sm={6} md={3}>
                    <FormControl
                        fullWidth
                        variant="outlined"
                        size="small"
                        sx={{minWidth: 120}}
                    >
                        <InputLabel sx={{color: "#ffffff", fontSize: "1.1rem"}}>
                            Subject Category
                        </InputLabel>
                        <Select
                            label="Subject Category"
                            value={filters.subjectCategory}
                            onChange={(e) =>
                                setFilters({...filters, subjectCategory: e.target.value})
                            }
                            sx={{
                                backgroundColor: "#111827",
                                color: "#ffffff",
                                border: "1px solid black",
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderColor: "#ffffff",
                                    },
                                },
                            }}
                            MenuProps={{
                                PaperProps: {
                                    sx: {
                                        bgcolor: "#111833",
                                        "& .MuiMenuItem-root": {
                                            color: "#ffffff", // Set the text color of menu items
                                        },
                                    },
                                },
                            }}
                        >
                            <MenuItem value="All">All</MenuItem>
                            {categoryList.map((category) => {
                                return <MenuItem key={category.toString()} value={category}>{category}</MenuItem>;
                            })}

                        </Select>
                    </FormControl>
                </Grid>

                {/* Region */}
                <Grid item xs={12} sm={6} md={3}>
                    <FormControl
                        fullWidth
                        variant="outlined"
                        size="small"
                        sx={{minWidth: 120}}
                    >
                        <InputLabel sx={{color: "#ffffff", fontSize: "1.1rem"}}>
                            Region
                        </InputLabel>
                        <Select
                            label="Region"
                            value={filters.region}
                            onChange={(e) =>
                                setFilters({...filters, region: e.target.value})
                            }
                            sx={{
                                backgroundColor: "#111827",
                                color: "#ffffff",
                                border: "1px solid black",
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderColor: "#ffffff",
                                    },
                                },
                            }}
                            MenuProps={{
                                PaperProps: {
                                    sx: {
                                        bgcolor: "#111833",
                                        "& .MuiMenuItem-root": {
                                            color: "#ffffff", // Set the text color of menu items
                                        },
                                    },
                                },
                            }}
                        >
                            <MenuItem value="All">All</MenuItem>
                            {regionList.map((region) => {
                                return <MenuItem key={region.toString()} value={region}>{region}</MenuItem>;
                            })}
                        </Select>
                    </FormControl>
                </Grid>

                {/* Type */}
                <Grid item xs={12} sm={6} md={3}>
                    <FormControl
                        fullWidth
                        variant="outlined"
                        size="small"
                        sx={{minWidth: 120}}
                    >
                        <InputLabel sx={{color: "#ffffff", fontSize: "1.1rem"}}>
                            Type
                        </InputLabel>
                        <Select
                            label="Type"
                            value={filters.type}
                            onChange={(e) => setFilters({...filters, type: e.target.value})}
                            sx={{
                                backgroundColor: "#111827",
                                color: "#ffffff",
                                border: "1px solid black",
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderColor: "#ffffff",
                                    },
                                },
                            }}
                            MenuProps={{
                                PaperProps: {
                                    sx: {
                                        bgcolor: "#111833",
                                        "& .MuiMenuItem-root": {
                                            color: "#ffffff", // Set the text color of menu items
                                        },
                                    },
                                },
                            }}
                        >
                            <MenuItem value="All">All</MenuItem>
                            {typeList.map((type) => {
                                return <MenuItem key={type.toString()} value={type}>{type}</MenuItem>;
                            })}
                            {/* Add more options as needed */}
                        </Select>
                    </FormControl>
                </Grid>


                {/* Search Bar */}
                <Grid
                    item
                    xs={12}
                    container
                    justifyContent="center"
                    sx={{marginTop: "10px"}}
                >
                    <TextField
                        label="Search"
                        variant="outlined"
                        size="small"
                        value={filters.searchQuery}
                        onChange={(e) => setFilters({...filters, searchQuery: e.target.value})}
                        sx={{
                            minWidth: "100%",
                            backgroundColor: "#111827",
                            color: "#ffffff",
                            "& .MuiInputLabel-root": {
                                color: "#ffffff",
                            },
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "#ffffff",
                                },
                                "&:hover fieldset": {
                                    borderColor: "#ffffff",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#ffffff",
                                },
                                "& input": {
                                    color: "#ffffff",
                                },
                            },
                        }}
                    />
                </Grid>

                {/* Apply and Reset Buttons */}
                <Grid
                    item
                    xs={12}
                    container
                    justifyContent="center"
                    sx={{marginTop: "10px"}}
                >
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleApplyFilters}
                        size="large"
                        sx={{
                            backgroundColor: "#2E53BA",
                            color: "#ffffff",
                            textTransform: "capitalize", // Corrected to lowercase 'capitalize'
                            transition: "background-color 0.7s ease", // Adding transition for background-color
                            "&:hover": {
                                backgroundColor: "#006102",
                            },
                        }}
                    >
                        Apply
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleResetFilters}
                        size="large"
                        sx={{
                            marginLeft: "10px",
                            backgroundColor: "#2E53BA",
                            color: "#ffffff",
                            textTransform: "Capitalize",
                            "&:hover": {backgroundColor: "#7C0000"},
                        }}
                    >
                        Reset
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default JFilter;
