import React from "react";

interface NumberListProps {
  numbers: number[],
}

export default function NumberList(props: NumberListProps) {
  const numbers = props.numbers;

  const listItems = numbers.map((value, idx) => (
    <li key={idx}>{value}</li>
  ))

  return (
    <ul>
      {listItems}
    </ul>
  )
}