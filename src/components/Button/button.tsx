interface ButtonProps {
    onClick?: () => void
}
export const Button = (props: ButtonProps) => {
  const { onClick } = props;
  // const handler = () => {
  //   console.log("hey");
  // }
  // if (!onClick) {
  //   return (
  //     <button onClick={handler} data-testid="button-test">Button</button>
  //   )
  // }
  
  return (
    <button onClick={onClick} data-testid="button-test">Button</button>
  )
}
