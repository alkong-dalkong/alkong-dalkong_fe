'use client'
import { Button, Modal } from '@/components'
import { useClinicDeleteModal } from '@/features'

type ClinicInfoModalProps = {
  modalState: boolean
  closeModal: VoidFunction
}

export const ClinicInfoModal = ({ modalState, closeModal }: ClinicInfoModalProps) => {
  const handleClickDelete = useClinicDeleteModal()

  return (
    <Modal isOpen={modalState} onClose={closeModal}>
      <h4 className="subtitle-B">삭제하시겠습니까?</h4>
      <p className="headline-M mt-2">삭제하실 경우 복원이 불가능합니다.</p>

      <div className="mt-6 flex w-full gap-[15px] px-4">
        <Button primary={false} onClick={closeModal}>
          취소
        </Button>
        <Button onClick={handleClickDelete}>삭제</Button>
      </div>
    </Modal>
  )
}
