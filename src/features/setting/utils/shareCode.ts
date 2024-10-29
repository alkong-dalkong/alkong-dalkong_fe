export const shareCode = (code: string) => {
  try {
    navigator.share({
      title: document.title,
      text: `초대 코드: ${code}`,
      url: document.location.href,
    })
  } catch (error) {
    console.error(error)
  }
}
