import React, { useEffect } from 'react'
import { toast } from 'react-toastify'
import { WrapperFooter } from './styles'
import { FaElementor } from "react-icons/fa";

export function Footer() {
  useEffect(() => {
    toast.success('Sucess!')}, [])
  return (
    <>
    <FaElementor color="red" size={30}/>
    <WrapperFooter>Desenvolvido por Priscila, Carlos e Gustavo.</WrapperFooter>
    </>
  )
}

export default Footer
