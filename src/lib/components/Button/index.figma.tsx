import React from "react"
import Button from "./index"
import figma from "@figma/code-connect"

figma.connect(
  Button,
  "https://www.figma.com/design/FNVYXYuplFl2mNZi9YzuQ9/Components?node-id=1%3A12",
  {
    props: {
      label: figma.string("label"),
      variant: figma.enum("variant", {
        primary: "primary",
        secondary: "secondary",
      }),
      isPill: figma.boolean("isPill"),
    },
    example: (props) => <Button label={props.label} isPill={props.isPill} />,
  },
)
