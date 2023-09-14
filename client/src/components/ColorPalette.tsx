import { Dispatch, SetStateAction } from "react"

interface ColorPaletteProps {
  color: string
  setColor: Dispatch<SetStateAction<string>>
  colorsList: string[]
}

export default function ColorPalette({
  color,
  setColor,
  colorsList,
}: ColorPaletteProps) {
  return (
    <div className="mx-auto">
      <ul className="flex gap-1">
        {colorsList.map((clr) => (
          <li
            key={clr}
            onClick={() => setColor(clr)}
            style={{ backgroundColor: clr }}
            className={`cursor-pointer w-[2rem] rounded-full aspect-square ${
              color === clr && "border-2 border-black"
            }`}
          ></li>
        ))}
      </ul>
    </div>
  )
}
