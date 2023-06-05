import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import PaginationButton from '../../../UI/CustomButtons/PaginationButton';

const Pagination = (props) => 
{
     const { number , setPage } = props

     const pageNumber =  number+1

    const changePage = (number) =>
    {
        setPage(number)
    }

    return <PaginationButton press={changePage} number={number} >{pageNumber.toString()}</PaginationButton>
};

export default Pagination;


