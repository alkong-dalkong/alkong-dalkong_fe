type returnDate = {
  year: number
  month: number
}

const prevMonth = (year: number, month: number): returnDate => {
  if (month === 0) {
    return {
      year: year - 1,
      month: 11,
    }
  }

  return {
    year,
    month: month - 1,
  }
}

const nextMonth = (year: number, month: number): returnDate => {
  if (month === 11) {
    return {
      year: year + 1,
      month: 0,
    }
  }

  return {
    year,
    month: month + 1,
  }
}

export { nextMonth, prevMonth }
