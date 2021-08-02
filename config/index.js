/**
 * this helps to check if our application is in dev mode or in any other environment
 * since this assignment is scoped to dev environment, checking if node environment is dev and assigning the variable server  to http://localhost:3000
 * In this we can use the variable server the prefix url throughout our application and if we want to change the url we can change in this one file instead of 
 * changing in all the other files used.
 */

const dev = process.env.NODE_ENV !== 'production'

export const server = dev  ? 'http://localhost:3000': 'https://productionsite.com'