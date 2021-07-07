import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@material-ui/core';
import React  from 'react'; 
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  head: {
    fontFamily: 'Prompt, sans-serif',
    fontWeight: 500,
    color: 'white',
    fontSize: 17,
    textShadow: '2px 2px 3px grey',          
    borderCollapse: 'collapse',
  },
  text: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 700,
    fontSize: 16,
    width: '100%',
    color: theme.palette.primary.dark, 
    backgroundColor: 'transparent',
  },
  row: {
    width: '100%',
    margin: '0 auto', 
    padding: '0.5em',
    color: theme.palette.primary.light,
    backgroundColor: 'transparent',
  },
  container: {
    color: '#d2bde8',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: ' 0px 0px 50px 19px rgba(134, 9, 249, 0.47)',
    background: theme.palette.background.graidiertTwo,
    margin: '20px auto',
    maxWidth: '400px'
  },

}));

function HomeTabMobile({ transactions }) {
    const s = useStyles();
    function getRandomColor() {
    const colors = ['#0091ea', '#004d40', '#cddc39', '#76ff03', '#c6ff00', '#ef6c00', '#ffff00', '#bdbdbd'];
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
};
  return (
    <>     
          {transactions === null ? (
            <TableRow className={s.row} >No transactions yet</TableRow> 
          ) : (
            <>
              {transactions.map(transaction => (
                      <TableContainer className={s.container} component={Paper}>

                           <Table key={transaction._id} > 
                          <TableBody>
                              <TableCell style={{ maxWidth: '10px', backgroundColor: getRandomColor()}}></TableCell>
                                <TableCell >
                                  <TableRow className={s.row}>
                                  
                                              <TableCell className={s.head} align="left">
                                                  Date
                                              </TableCell>
                                              <TableCell className={s.text} align="right">
                                                  {transaction.date}
                                              </TableCell>
                                    </TableRow>
                                    <TableRow className={s.row}>
                                              <TableCell className={s.head} align="left">
                                                  Type
                                              </TableCell>
                                              <TableCell className={s.text} align="right">
                                                  {transaction.type}
                                              </TableCell>
                                    </TableRow>
                                    <TableRow className={s.row}>
                                              <TableCell className={s.head} align="left">
                                                  Category
                                              </TableCell>
                                              <TableCell className={s.text} align="right">
                                                  {transaction.category}
                                              </TableCell>
                                    </TableRow>
                                    <TableRow className={s.row}>
                                              <TableCell className={s.head} align="left">
                                                  Comment
                                              </TableCell>
                                              <TableCell className={s.text} align="right">
                                                  {transaction.comment}
                                              </TableCell>
                                    </TableRow>
                                    <TableRow className={s.row}>
                                              <TableCell className={s.head} align="left">
                                                  Sum
                                              </TableCell>
                                              <TableCell className={s.text} align="right">
                                                  {transaction.sum}
                                              </TableCell>
                                    </TableRow>
                                    <TableRow className={s.row}>
                                              <TableCell className={s.head} align="left">
                                                  Balance
                                              </TableCell>
                                              <TableCell className={s.text} align="right">
                                                  {transaction.balance}
                                              </TableCell>
                                    </TableRow>
                              </TableCell>
                                   
                                      </TableBody>                                    
                                  </Table>
                
                                    </TableContainer>
                              ))}
            </>
          )}
    </>
  );
}

export default HomeTabMobile;