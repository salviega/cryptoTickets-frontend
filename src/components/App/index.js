import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Box } from '@chakra-ui/react'
import './App.scss'

import { Header } from '../../shared/Header'
import { Footer } from '../../shared/Footer'
import { TicketAbout } from '../TicketAbout'
import { TicketEvent } from '../TicketEvent'
import { TicketHome } from '../TicketHome'
import { TicketMaker } from '../TicketMaker'
import { TicketPost } from '../TicketPost'
import { TicketContext } from '../TicketContext'
import { TicketLoading } from '../TicketLoading'
import { TicketError } from '../TicketError'
import { TicketWallet } from '../TicketWallet'

function App () {
  const {
    items: events,
    saveItem,
    addToIpsf,
    loading,
    error,
    walletDesconected,
    setWalletDesconected
  } = useContext(TicketContext)

  return (
    <>
      <Box w='100%' minHeight='100vh'>
        {error && <TicketError />}
        {loading && <TicketLoading />}
        <Header>
          <TicketWallet walletDesconected={walletDesconected} setWalletDesconected={setWalletDesconected} />
        </Header>
        <BrowserRouter>
          <Routes>
            <Route path='/about' element={<TicketAbout />} />
            <Route path='/maker' element={<TicketMaker saveItem={saveItem} addToIpsf={addToIpsf} />} />
            <Route
              path='/' element={<TicketHome> {events?.map((event, index) => (<TicketPost event={event} key={index} />))}</TicketHome>}
            />
            {events?.map((event, index) => <Route path='/event/:id' element={<TicketEvent event={event} />} key={index} />)}
          </Routes>
        </BrowserRouter>
        <Footer />
      </Box>
    </>
  )
}

export { App }
