export function FakebookTitle(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" {...props}>
      <path fill="none" d="M0 0H200V60H0z" />
      <text
        x={10}
        y={45}
        fontFamily="Helvetica, Arial, sans-serif"
        fontSize={40}
        fontWeight="bold"
        fill="#1877F2"
        letterSpacing={-1}
      >
        {"faKebook"}
      </text>
    </svg>
  )
}