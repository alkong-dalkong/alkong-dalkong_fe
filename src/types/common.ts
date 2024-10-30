export type CheckBoxSectionType = 'personal' | 'notification'

export type BottomSheetType = {
  section: string
  isShowing: boolean
  onClickScrim: VoidFunction
}

export type CustomBottomSheetProps = {
  isShowing: boolean
  onClickScrim: VoidFunction
}

export type ModalProps = {
  isOpen: boolean
  onClose: () => void
}
