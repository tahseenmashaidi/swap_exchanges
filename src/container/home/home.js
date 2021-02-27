import React ,{Component} from 'react';
import  {H1} from "../../components/typography";
import './styles.scss';
import {CustomButton} from "../../components/button";
import CustomSelect from "../../components/selectField";
import { IntegerInput} from "../../components/inputField";
import {addToken, swapToken, uniSwap} from "../../services/api";
import Toast from "../../components/toast";
import ResultTable from "../../components/resultTable";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            from:'',
            to:'',
            value:'',
            loading:'',
            data:[],
            uniSwapData:[],
            errors:'',
            newAddress:'',
        };
    }

    onSubmit= async()=>{
        const {from,to,value}=this.state
        this.setState({loading:'swap',errors:''})


       let resp= await swapToken(from,to,value)
       if (resp&&resp.status===200){
           console.log("resp",resp)
           this.setState({data:resp.data,loading:'',errors:''})
           // let resp2= await uniSwap(from,to)
           // if (resp2&&resp2.status===200){
           //     let data= JSON.parse(await resp2.text());
           //     // console.log(data.data,"data")
           //     this.setState({loading:'',uniSwapData:data.data.pairs,errors:''})
           // }else {
           //     this.setState({loading:'',errors:resp})
           // }
       }else {
           this.setState({loading:'',errors:resp})
       }
    }

  render() {
      const {from,to,value,loading,uniSwapData,data,errors}=this.state
      console.log(data,errors)
      return (
          <>
              <div className="home-container">
                 <div className={'home-left'}>
                     <H1 value={'Swap Token'}/>
                     <CustomSelect selectedItem={from} handleItemSelect={(item)=>{ this.setState({ from: item.id });}} />
                     <CustomSelect selectedItem={to} handleItemSelect={(item)=>{ this.setState({ to: item.id });}} />

                     <IntegerInput
                         label={'Value'} value={value}
                         onChange={(value) => this.setState({value:value})}
                         placeholder="Enter Value"
                     />
                     <CustomButton value={'Submit'} onClick={() => this.onSubmit()} loading={loading === 'swap'}/>
                     </div>
                  {/*<div className={'home-right'}>*/}
                  {/*    <H1 value={'Add New Token'}/>*/}
                  {/*    <Input*/}
                  {/*        label={'Address'} value={newAddress}*/}
                  {/*        onChange={(event) => this.setState({newAddress:event.target.value})}*/}
                  {/*        placeholder="Enter Address"*/}
                  {/*    />*/}
                  {/*    <CustomButton value={'Add New Token'} onClick={() => this.onAddToken()} loading={loading === 'add'}/>*/}
                  {/*</div>*/}
              </div>
              {errors!==''?
                  <Toast  intent={'Danger'} message={errors}  timeout={10000}/>
              :''
              }
              {data&&data.length!==0 ? <div className={'result-container'}>
                      <ResultTable data={data} uniSwapData={uniSwapData}/>
                  </div>
                  : ""
               }
          </>
      )
  }
}

export default Home;
