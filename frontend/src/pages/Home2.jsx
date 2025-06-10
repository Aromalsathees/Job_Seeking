import React from 'react'

import {
   Table,
   TableBody,
   TableCaption,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "../components/ui/table"


const Home2 = () => {
   return (
      <div className='lg:w-screen w-100 mt-[-10px] mb-20 bg-white text-black'>
         <div className='mx-auto lg:w-250 w-80 '>

            <Table className='border'>
               <TableCaption>A list of your recent invoices.</TableCaption>
               <TableHeader>
                  <TableRow>
                     <TableHead className="w-[100px]">Job Title</TableHead>
                     <TableHead>Company</TableHead>
                     <TableHead>Status</TableHead>
                     <TableHead className="text-right">Applied</TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
               
                  <TableRow>
                     <TableCell className="font-medium"></TableCell>
                     <TableCell>Paid</TableCell>
                     <TableCell>Credit Card</TableCell>
                     <TableCell className="text-right">$250.00</TableCell>
                  </TableRow>
                  
                  <TableRow>
                     <TableCell className="font-medium"></TableCell>
                     <TableCell>Paid</TableCell>
                     <TableCell>Credit Card</TableCell>
                     <TableCell className="text-right">$250.00</TableCell>
                  </TableRow>
                  
                  <TableRow>
                     <TableCell className="font-medium"></TableCell>
                     <TableCell>Paid</TableCell>
                     <TableCell>Credit Card</TableCell>
                     <TableCell className="text-right">$250.00</TableCell>
                  </TableRow>
                  
                  <TableRow>
                     <TableCell className="font-medium"></TableCell>
                     <TableCell>Paid</TableCell>
                     <TableCell>Credit Card</TableCell>
                     <TableCell className="text-right">$250.00</TableCell>
                  </TableRow>
                  
                  <TableRow>
                     <TableCell className="font-medium"></TableCell>
                     <TableCell>Paid</TableCell>
                     <TableCell>Credit Card</TableCell>
                     <TableCell className="text-right">$250.00</TableCell>
                  </TableRow>
                 
               </TableBody>
            </Table>

         </div>
      </div>
   )
}

export default Home2

