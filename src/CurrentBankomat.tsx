import React from 'react';
import {MoneyType} from "./App";
import styled from "styled-components";

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {

    return (
            <Banknote color={props.money.banknotes === 'Dollars' ? 'yellowgreen' : 'deepskyblue'}>
                <Name>{props.money.banknotes}</Name>
                <Nominal>{props.money.value}</Nominal>
            </Banknote>
    );
};

const Banknote = styled.div`
  background-color: ${props => {
      if (props.color === 'yellowgreen') {
        return 'yellowgreen'
      } else {
          return 'deepskyblue'
      }
  }};
  width: 400px;
  height: 200px;
  margin: 10px;
`

const BanknoteGreen = styled.div`
  background-color: yellowgreen;
  width: 400px;
  height: 200px;
  margin: 10px;
`

const BanknoteBlue = styled.div`
  background-color: deepskyblue;
  width: 400px;
  height: 200px;
  margin: 10px;
`

const Name = styled.span`
  display: flex;
  justify-content: center;
`

const Nominal = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  font-size: 90px;
`

//----------------------------------------------------------------

// import React from 'react';
// import {MoneyType} from "./App";
// import styled from "styled-components";
//
// type CurrentBankomatPropsType = {
//     money: MoneyType
// }
// export const CurrentBankomat = (props: CurrentBankomatPropsType) => {
//
//     return (
//         props.money.banknotes === 'Dollars'
//             ?
//             <BanknoteGreen>
//                 <Name>{props.money.banknotes}</Name>
//                 <Nominal>{props.money.value}</Nominal>
//             </BanknoteGreen>
//             :
//             <BanknoteBlue>
//                 <Name>{props.money.banknotes}</Name>
//                 <Nominal>{props.money.value}</Nominal>
//             </BanknoteBlue>
//
//     );
// };
//
//
// const BanknoteGreen = styled.div`
//   background-color: yellowgreen;
//   width: 400px;
//   height: 200px;
//   margin: 10px;
// `
//
// const BanknoteBlue = styled.div`
//   background-color: deepskyblue;
//   width: 400px;
//   height: 200px;
//   margin: 10px;
// `
//
// const Name = styled.span`
//   display: flex;
//   justify-content: center;
// `
//
// const Nominal = styled.span`
//   display: flex;
//   justify-content: center;
//   margin-top: 30px;
//   font-size: 90px;
// `