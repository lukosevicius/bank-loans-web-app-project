import {Customer} from "./customer";

export const CUSTOMERS: Customer[] = [
  {loan: 10100, income: 1200, name: 'Tomas Martinkėnas', status: 'patvirtina', date: 2017, draft:false},
  {loan: 3000, income: 1200, name: 'John Boo', status: 'patvirtina', date: 2016, draft:false},
  {loan: 1300, income: 1200, name: 'Michael Robinson', status: 'atmesta', date: 2016, draft:false},
  {loan: 14000, income: 1000, name: 'Alexander Robson', status: 'patvirtina', date: 2016, draft:false},
  {loan: 6500, income: 1100, name: 'Jennifer Pinsker', status: 'patvirtina', date: 2016, draft:false},
  {loan: 5600, income: 3000, name: 'Bob Robson', status: 'atmesta', date: 2016, draft:false},
  {loan: 1700, income: 1200, name: 'Michael Robinson', status: 'nepatikrinta', date: 2015, draft:false},
  {loan: 1800, income: 2200, name: 'Vaida Kisieliūtė', status: 'nepatikrinta', date: 2016, draft:false},
  {loan: 1900, income: 1200, name: 'John Jones', status: 'atmesta', date: 2016, draft:false},
  {loan: 2000, income: 5000, name: 'Mantas Lukoševičius', status: 'patvirtina', date: 2016, draft:false},
  {loan: 0, income: 2000, name: 'No name', status: '', date: 2016, draft: true},
  {loan: 0, income: 5000, name: 'Kazkas', status: '', date: 2016, draft: true}
];
