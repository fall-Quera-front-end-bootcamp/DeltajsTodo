import { atom } from 'jotai'

export const ballPositionAtom = atom({ x: 20, y: 740 })

export const isDraggingAtom = atom(false)

export const isSettingsOpenAtom = atom(false)
