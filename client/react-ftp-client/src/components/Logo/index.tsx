import * as React from "react";
import { Image, ImageProps } from "@chakra-ui/react";


export function Logo(props: ImageProps) {
  return <Image 
  // TODO: add image import service // TSX seems to have issues with chakra-ui
  src='logo.png'
  fallbackSrc='https://via.placeholder.com/150'
  borderRadius='full'
  boxSize='100px'
  maxH='180px'
  alt="FTP Logo"
  {...props} />;
}
