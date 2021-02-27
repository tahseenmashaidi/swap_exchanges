import React from 'react';
import {Cell, Column, Table} from "@blueprintjs/table";

const ResultTable = ({data,uniSwapData}) => {



    console.log("data",data,uniSwapData)

    const renderCell=(data)=>{
        return <Cell>{data}</Cell>
    }
   return  <Table numRows={1}>
       <Column name={"From Token Name"} cellRenderer={(idx)=>renderCell(data.fromToken.name)} />
       <Column  name={"From Token Symbol"} cellRenderer={(idx)=>renderCell(data.fromToken.symbol)}/>
       <Column  name={"From Token Amount"} cellRenderer={(idx)=>renderCell(data.fromTokenAmount)}/>
       <Column name={"To Token Name"} cellRenderer={(idx)=>renderCell(data.toToken.name)}/>
       <Column  name={"To Token Symbol"} cellRenderer={(idx)=>renderCell(data.toToken.symbol)}/>
       <Column  name={"To Token Amount"} cellRenderer={(idx)=>renderCell(data.toTokenAmount)}/>
       <Column name={"Estimated Gas"} cellRenderer={(idx)=>renderCell(data.estimatedGas)}/>
   </Table>
    // return (
    //     <Table numRows={2}>
    //         <Column
    //             columnHeaderCellRenderer={() => (
    //                 <ColumnHeaderCell name="Created Date" />
    //             )} cellRenderer={renderCell}/>
    //         {/*<Column name={'Symbol'} cellRenderer={renderCell}/>*/}
    //     </Table>
    // );
};

export default ResultTable;
