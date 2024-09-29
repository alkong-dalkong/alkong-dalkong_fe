'use client'

type ToggleProps = {
  toggleState: boolean
  toggleAction: VoidFunction
}

export const Toggle = ({ toggleState, toggleAction }: ToggleProps) => {
  const containerStyle = toggleState ? 'bg-mint-6' : 'bg-gray-2'
  const innerStyle = toggleState ? 'translate-x-8 bg-white' : 'translate-x-0 bg-mint-6'

  return (
    <div className="inline-block">
      <input
        type="checkbox"
        id="toggle"
        checked={toggleState}
        onChange={toggleAction}
        className="hidden"
      />
      <label
        htmlFor="toggle"
        className={`flex-align h-[34px] w-[66px] shrink-0 cursor-pointer rounded-full p-[5px] transition-all focus-visible:outline-none ${containerStyle}`}
      >
        <div className={`size-6 rounded-full transition-all ${innerStyle}`}>{''}</div>
      </label>
    </div>
  )
}
