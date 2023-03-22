// Get initials
// Write a function getInitials(user), which takes an object user as an argument. The user object will always have at least two properties firstName and lastName, which hold string values. Some objects may also have the additional property middleName. The function should return the user's initials in the following format: F. M. L., where the letters F, M and L represent the first, middle and last names respectively.

// Directions
// Remember to follow the required return format
// You can assume that the input object will always have firstName and lastName

const getInitials = (user) => {
  const { firstName, middleName, lastName } = user

  let initials = firstName[0].toUpperCase() + '. '

  if (middleName) {
    initials += middleName[0].toUpperCase() + '. '
  }

  initials += lastName[0].toUpperCase() + '.'

  return initials
}

console.log(getInitials({ firstName: 'John', middleName: 'A', lastName: 'Doe' }))
console.log(getInitials({ firstName: 'Jane', lastName: 'Doe' }))
