import PriorityFlag from '../../../../../Common/Icons/PriorityFlag'

export const taskPriority = (
  num: number | undefined,
  className?: string,
  borderDiv: boolean = false,
  borderClass?: string,
  borderSvg: boolean = false
): JSX.Element => {
  if (num === 1) {
    return (
      <div className={borderDiv ? `${borderClass} border-[#82C91E]` : ''}>
        <PriorityFlag
          color="#82C91E"
          className={borderSvg ? `${className} border-[#82C91E]` : ''}
        />
      </div>
    )
  } else if (num === 2) {
    return (
      <div className={borderDiv ? `${borderClass} border-[#15AABF]` : ''}>
        <PriorityFlag
          color="#15AABF"
          className={borderSvg ? `${className} border-[#15AABF]` : ''}
        />
      </div>
    )
  } else if (num === 3) {
    return (
      <div className={borderDiv ? `${borderClass} border-[#FAB005]` : ''}>
        <PriorityFlag
          color="#FAB005"
          className={borderSvg ? `${className} border-[#FAB005]` : ''}
        />
      </div>
    )
  } else if (num === 4) {
    return (
      <div className={borderDiv ? `${borderClass} border-[#FA5252]` : ''}>
        <PriorityFlag
          color="#FA5252"
          className={borderSvg ? `${className} border-[#FA5252]` : ''}
        />
      </div>
    )
  } else {
    return (
      <div className={borderDiv ? `${borderClass} border-[#C1C1C1]` : ''}>
        <PriorityFlag
          color="#C1C1C1"
          className={borderSvg ? `${className} border-[#C1C1C1]` : ''}
        />
      </div>
    )
  }
}
