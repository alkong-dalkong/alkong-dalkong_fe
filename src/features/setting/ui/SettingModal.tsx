import { Button, Icon, Modal, Portal } from '@/components'
import type { CodeModalProps, InviteModalProps } from '@/types'

import { copyClipboard } from '../utils/copyClipboard'
import { shareCode } from '../utils/shareCode'

export const CodeModal = ({
  isOpen,
  onClose,
  title,
  description = `우리 가족으로 초대하고 싶은\n사람에게 가족 코드를 공유해 보세요!`,
  code,
}: CodeModalProps) => {
  return (
    <Portal>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="flex-column-align w-full px-[20px]">
          <h1 className="subtitle-B mb-[8px] text-black">{title}</h1>
          <h2 className="headline-M mb-[24px] whitespace-pre text-center text-black">
            {description}
          </h2>
          <div className="flex-center mb-[16px] w-full rounded-xl bg-mint-1 py-[11px] text-center text-mint-9">
            {code}
          </div>
          <div className="body-M flex gap-[6px] text-mint-7">
            <button onClick={() => copyClipboard(code)}>코드 복사하기</button>
            <Icon name="line-bar" color="#0E8763" />
            <button onClick={() => shareCode(code)}>코드 공유하기</button>
          </div>
        </div>
      </Modal>
    </Portal>
  )
}

export const InviteModal = ({ isOpen, onConfirm, onClose, inviter }: InviteModalProps) => {
  return (
    <Portal>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="flex-column-align w-full px-[16px]">
          <h1 className="subtitle-B mb-[8px] text-black">
            {inviter ? `${inviter}님의 그룹에 초대받았어요!` : '그룹에 초대받았어요!'}
          </h1>
          <h2 className="headline-M mb-[24px]">해당 가족에 들어가시겠습니까?</h2>
          <div className="flex w-full gap-[15px]">
            <Button size="sm" type="submit" onClick={onConfirm}>
              네
            </Button>
            <Button primary={false} size="sm" onClick={onClose}>
              아니오
            </Button>
          </div>
        </div>
      </Modal>
    </Portal>
  )
}
