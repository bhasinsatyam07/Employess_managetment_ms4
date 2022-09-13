import React from 'react'
import '../Admin/bill.css'

 const Billmanagement = () => {
  return (
    <div class="container">
      <header><strong>
            <center> Bill Management</center>
      </strong></header>
      <p class="description">
         Enter the bill amount and the cash given by the customer 
         and know minimum number of notes to return
      </p>
  
      <label for="input-bill"><strong>Enter the bill amount</strong></label>
      <input class="input-bill" id="bill" />
      <label for="cash-given"><strong> Cash Given</strong></label>
      <input class="cash-given" id="cash" />
      <button class="check-btn" id="btn">Check</button>
      <p id="error">
      </p>
  
      <table class="table">
         <caption>
            <strong>Return Change</strong></caption>
         <tr class="row">
            <th class="row">No of Notes</th>
            <td class="no-of-notes"></td>
            <td class="no-of-notes"></td>
            <td class="no-of-notes"></td>
            <td class="no-of-notes"></td>
            <td class="no-of-notes"></td>
            <td class="no-of-notes"></td>
            <td class="no-of-notes"></td>
         </tr>
         <tr>
            <th class="row">Notes</th>
            <td class="row">2000</td>
            <td class="row">500</td>
            <td class="row">100</td>
            <td class="row">20</td>
            <td class="row">10</td>
            <td class="row">5</td>
            <td class="row">1</td>
         </tr>
      </table>
   </div>
  )
}
export default Billmanagement
